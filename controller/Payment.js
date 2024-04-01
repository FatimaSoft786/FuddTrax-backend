const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY)
const CheckoutSession = async (req, res) => {
  console.log(req.body)
  try {
    const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        mode: "payment",
        // line_items: [
        //   {
        //     name: 'Golden',
        //     amount: 499 * 100,
        //     currency: 'usd',
        //     quantity: 1,
        //   },
        // ],
        // payment_intent_data: {
        //       metadata: {
        //         userId: "123456",
        //         postId: "123456"
        //       },
        //     },
        line_items: req.body.items.map((item) => {
          return {
            price_data: {
              currency: "usd",
              product_data: {
                name: item.name,
                description: item.description,
               
              },
              unit_amount: item.price * 100,
            },
            quantity: item.quantity
          }
        }),
        payment_intent_data: {
          metadata: {
            "userId": req.body.userId,
            "orderId": req.body.orderId,
            "order": req.body.order,
            "totalAmount": req.body.totalAmount,
            "paymentStatus": "received",
            "paymentMode": "card"
          }
        },
        success_url: `http://192.168.1.4:3000/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: "http://192.168.1.4:3000/cancel"
      });
      console.log("session.url", session.url)
      res.status(200).json({url: session.url})
  } catch (error) {
    res.status(500).send(error.message)
  }
};

 const getSuccess = async(req,res)=>{
    try {
        const session_id = req.query.session_id;
        const session = await stripe.checkout.sessions.retrieve(session_id);
        if(session.payment_status === "paid"){
            res.send("Payment successful")
        }else{
            res.send("Payment unsuccessful")
        }
        
    } catch (error) {
        res.status(500).json({error: true, message: error.message})
    }
 }

 const getCancel = async(req,res)=>{
try {
    res.send("Payment cancelled")
} catch (error) {
    res.status(500).send(error.message)
}
 }
module.exports = {
  CheckoutSession,
  getCancel,
  getSuccess
};