const model = require("../model/Cart");
const cart = async(req,res)=>{
try {
const newCart = new model({
   meal_day: req.body.meal_day,
    customer_id: req.body.customer_id,
    meals: req.body.meals,
    meal_price: req.body.meal_price
});
   const doc = await newCart.save()
   res.status(200).json(doc);   
} catch (error) {
    res.status(500).json({error: true, message: error.message})
}
};
const get = async(req,res)=>{
    try {
        let total = 0.0
        let itemId = []
        const doc = await model.find({customer_id: req.body.customer_id});
        if(doc){
           for (i =0; i<doc.length; i++){
            total += parseFloat(doc[i].meal_price)
            itemId.push(doc[i]._id)
           }
           res.status(200).json({error: false, cart: doc, total_amount: total, total_items: doc.length, cartItems: itemId })
        }else{
          res.status(400).json({error: false, cart: "No Items in the cart"})
        }
        
    } catch (error) {
        res.status(500).json({error: true, cart: error.message})
    }
}

 const deleteFromCart = async (req, res) => {
    const { cartID } = req.body;
    try {
    const doc = await model.findByIdAndDelete(cartID);
    res.status(200).json({success: true, message:"meal deleted from cart"});
  } catch (err) {
    res.status(400).json({success: false,message: err.message});
  }
};

const updateCart = async (req, res) => {
    const { id } = req.params;
    try {
      const cart = await model.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      
  
      res.status(200).json(cart);
    } catch (err) {
      res.status(400).json(err);
    }
  };

module.exports = {
    cart,
    get,
    deleteFromCart,
    updateCart
}