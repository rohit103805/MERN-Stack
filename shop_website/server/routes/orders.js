const express = require('express')
const {body, validationResult} = require('express-validator');
const Order = require('../models/Order')

const router = express.Router();

router.post('/createorder', [
    body('user', "Enter a valid user"),
    body('prod_id', "Enter a valid prod_id"),
    body('name', "Name of the product"),
    body('img_url', "Image URL of the product"),
    body('price', "Price of the product"),
    body('quantity', "Enter the quantity"),
    body('size', "Enter the size required"),
    body('address', "Enter a valid Address")
], async(req, res)=>{
    const error = validationResult(req);
    if (!error.isEmpty()) {
        return res.status(400).json({errors: error.array()});
    }
    try{
        const order = await Order.create({
            user: req.body.user,
            prod_id: req.body.prod_id,
            name: req.body.name,
            img_url: req.body.img_url,
            price: req.body.price,
            quantity: req.body.quantity,
            size: req.body.size,
            address: req.body.address 
        })
        return res.json({order})
    }catch(e){
        return res.status(500).send("Some Error occured !");
    }
})

router.post('/fetchorder', [
    body('user', "Enter a valid user"),
], async(req, res)=>{
    const error = validationResult(req);
    if (!error.isEmpty()) {
        return res.status(400).json({errors: error.array()});
    }
    try{
        const order = await Order.find({user: req.body.user});
        return res.json({order})
    }catch(e){
        return res.status(500).send("Some Error occured !");
    }
})

router.delete('/deleteorder', [
    body('user', "Enter a valid user"),
    body('_id', "Enter a Valid Id")
], async(req, res)=>{
    const error = validationResult(req);
    if (!error.isEmpty()) {
        return res.status(400).json({errors: error.array()});
    }
    try{
        const order = await Order.findByIdAndDelete(req.body._id);
        return res.json({order})
    }catch(e){
        return res.status(500).send("Some Error occured !");
    }
})

module.exports = router;