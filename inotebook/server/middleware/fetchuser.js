const jwt = require('jsonwebtoken');
const JWTToken ='Rohit_is_a_MERN_Developer';

const fetchuser=(req, res, next)=>{
    const token = req.header('authToken');
    if(!token){
        res.status(400).send({error: "Send Error !"});
    }
    try{
        const data = jwt.verify(token, JWTToken);
        req.user = data;
        next();
    }catch(e){
        res.status(400).send({error: "Wrong Token!"});
    }
}

module.exports = fetchuser;
