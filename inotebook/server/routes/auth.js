const express = require('express');
const {body, validationResult} = require('express-validator');
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
const fetchuser = require('../middleware/fetchuser')

const JWTToken ='Rohit_is_a_MERN_Developer'

const router = express.Router();

//Create a User
router.post('/createuser', [
    body('name', "Enter a valid Name").isLength({min: 3}),
    body('email', "Enter a valid email").isEmail(),
    body('password', "Enter a valid password").isAlphanumeric().isLength({min: 8})
], async (req, res)=>{
    const error = validationResult(req);
    if (!error.isEmpty()) {
        return res.status(400).json({errors: error.array()});
    }
    try{
        let user = await User.findOne({email: req.body.email})
        if(user){
            return res.status(400).json({error: "This Email exists"});
        }
        const salt = await bcrypt.genSalt(10);
        const secpass = await bcrypt.hash(req.body.password, salt)

        user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: secpass
        })

        const data = {
            id: user.id
        };

        const authToken = jwt.sign(data, JWTToken)
        return res.json({"authToken": authToken, "name": req.body.name});
    }catch(e){
        console.log("Error !");
        return res.status(500).send("Some Error occured !"); 
    }
})

//Authenticate a User
router.post('/login', [
    body('email', "Enter a valid email").isEmail(),
    body('password', "Password cannot be blank").exists()
], async(req, res)=>{
    const error = validationResult(req);
    if (!error.isEmpty()) {
        return res.status(400).json({errors: error.array()});
    }
    try{
        let user = await User.findOne({email: req.body.email})
        if(!user){
            return res.status(400).json("Wrong credentials !")
        }
        const passwordCompare = await bcrypt.compare(req.body.password, user.password)
        if(!passwordCompare){
            return res.status(400).json("Wrong credentials !")
        }
        const payload = {
            id: user.id
        };
        const authToken = jwt.sign(payload, JWTToken)
        return res.json({"authToken": authToken, "name": user.name});
    }catch(e){
        console.log("Error !");
        return res.status(500).send("Some Error occured !");
    }
})

//A route that requests user data to perform.
router.post('/getuser', fetchuser, async(req, res)=>{
    try{
        const userId = req.user.id;
        const user = await User.findById(userId);
        return res.send(user);
    }catch(e){
        return res.status(500).send("Internal Server Error !");
    }
})

module.exports = router;