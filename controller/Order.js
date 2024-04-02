const model = require("../model/Order")
const createOrder = async (req, res) => {
    const order = new model(req.body);
    try {
      const doc = await order.save();
      res.status(200).json(doc);
    } catch (err) {
      res.status(400).json(err);
    }
  };
  
  const fetchOrder = async(req,res)=>{
   try {
    console.log(req.body);
   const result = await model.find({user: req.body.user})
   res.status(200).json({error: false, orders: result})

   } catch (error) {
    res.status(500).json({error: false, order: error.message})
   }
  };

 const fetchAllOrders = async(req,res)=>{
   try {
   const result = await model.find()
   if(result){
res.status(200).json({error: false, orders: result})
   }else{
    res.status(200).json({error: false, orders: "No orders found"})
   }
   } catch (error) {
    res.status(500).json({error: false, orders: error.message})
   }
  };

 const updateOrder = async (req, res) => {
    const { id } = req.params;
    try {
      const order = await model.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      res.status(200).json(order);
    } catch (err) {
      res.status(400).json(err);
    }
  };

  const deleteOrder = async (req, res) => {
    const { id } = req.params;
    try {
    const order = await model.findByIdAndDelete(id);
    res.status(200).json(order);
  } catch (err) {
    res.status(400).json(err);
  }
};

  module.exports = {
    createOrder,
    fetchOrder,
    updateOrder,
    deleteOrder,
    fetchAllOrders

  }