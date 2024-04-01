require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors({origin: "*"}));
app.use(express.json());
const connectToMongo = require('./db');

app.use("/api/admin",require("./router/Admin"));
app.use("/api/user",require("./router/User"));
app.use("/api/menu",require("./router/Menu"));
app.use("/api/cart",require("./router/Cart"));
app.use("/api/order", require("./router/Order"));
app.use("/api/payment",require("./router/Payment"));

app.listen(process.env.PORT,()=>{
    console.log("Server is connected with",process.env.PORT);
    connectToMongo();
})