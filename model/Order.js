const mongoose = require("mongoose");
  const { Schema } = mongoose;
const orderSchema = new mongoose.Schema({
    meals: { type: [Schema.Types.Mixed], required: true },
    totalAmount: { type: Number },
    totalItems: { type: Number },
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    paymentMethod: { type: String, required: true},
    paymentStatus: { type: String, default: 'pending' },
    order_status: { type: String, default: 'pending' },
    selectedAddress: { type: String, required: true }
},
{ timestamps: true })
module.exports = mongoose.model("Order",orderSchema)