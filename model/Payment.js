const mongoose = require("mongoose");
const paymentSchema = new mongoose.Schema({
    order_amount: {
        type: String
    }
})
module.exports = mongoose.model("order_payments",paymentSchema);