const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create schema
const OrderSchema = new Schema({
    orderId: {
        type: String,
        required: true
    },
    symbol:{
        type: String
    },
    ltp:{
        type: Number
    },
    SL: {
        type: Number
    },
    SL_gap: {
        type: Number
    },
    SL_start_price: {
        type: Number
    }
});

module.exports = Order = mongoose.model('order', OrderSchema);