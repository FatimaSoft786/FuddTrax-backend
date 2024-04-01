const mongoose = require("mongoose")
const cartSchema = new mongoose.Schema({
    meal_day: {
        type: String
    },
      customer_id: {
        type: String,
        required: true
    },
    meal_price: {
        type: String
    },
    meals: [{
        menu: {
            type: String,
            required: true
        },
        quantity: {
            type: Number,
            required: true
        }
    }]
},{
    timestamps: true
});
module.exports = mongoose.model("Cart",cartSchema);