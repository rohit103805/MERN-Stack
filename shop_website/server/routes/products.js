const express = require('express')
const {body, validationResult} = require('express-validator');
const Products = require('../models/Product')

const router = express.Router();

router.post('/sell', [
    body('name', "Enter a valid name").exists(),
    body('img_url', "Enter a valid URL").exists(),
    body('brand', "Enter a Brand").exists(),
    body('category', "Enter a Category").exists(),
    body('price', "Enter a valid Price").isNumeric(),
    body('color', "Enter a Color").exists(),
], async(req, res)=>{
    const error = validationResult(req);
    if (!error.isEmpty()) {
        return res.status(400).json({errors: error.array()});
    }
    try{
        const product = await Products.create({
            name: req.body.name,
            img_url: req.body.img_url,
            brand: req.body.brand,
            category: req.body.category,
            price: req.body.price,
            color: req.body.color,
        })
        return res.json({"Product": product});
    }catch(e){
        return res.status(500).send("Some Error occured !");
    }
})

router.post('/fetch', [
    body('category', "Enter a Category").exists(),
], async(req, res)=>{
    const error = validationResult(req);
    if (!error.isEmpty()) {
        return res.status(400).json({errors: error.array()});
    }
    try{
        const products = await Products.find({category: req.body.category});
        return res.json({products});
    }catch(e){
        return res.status(500).send("Some Error Occured !");
    }
})

router.delete('/delete', [
    body('_id', "Enter a Product Id").exists(),
], async(req, res)=>{
    const error = validationResult(req);
    if (!error.isEmpty()) {
        return res.status(400).json({errors: error.array()});
    }
    try{
        const product = await Products.findByIdAndDelete(req.body._id)
        return res.json({"Deleted Product": product});
    }catch(e){
        return res.status(500).send("Some Error Occured !");
    }
})

module.exports = router;