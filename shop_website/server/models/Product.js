const mongoose = require('mongoose');
const {Schema} = mongoose;

const ProductSchema = new Schema({
    name: {type: String, required: true},
    img_url: {type: String, required: true},
    brand: {type: String, required: true},
    category: {type: String, required: true},
    price: {type: Number, required: true},
    color: {type: String, required: true}
});

module.exports = mongoose.model('Products', ProductSchema)