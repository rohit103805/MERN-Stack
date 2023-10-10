const mongoose = require('mongoose');
const {Schema} = mongoose;

const OrderSchema = new Schema({
    user: {type: String, required: true},
    prod_id: {type: mongoose.Schema.Types.ObjectId, ref: 'Products'},
    name: {type: String, required: true},
    img_url: {type: String, required: true},
    price: {type: Number, required: true},
    quantity: {type: Number, required:true},
    size: {type: String, required: true},
    address: {type: String, required: true},
    payment: {type: String, default: "COD"}
});

module.exports = mongoose.model('Orders', OrderSchema);