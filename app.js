const express = require("express");
const app = express();

app.use(express.json());

const UserRouter = require("./routes/users");
const ProductRouter = require("./routes/products");
const cartRouter = require("./routes/cart");

 app.use("/users",UserRouter);
 app.use("/products",ProductRouter);
 app.use("/cart",cartRouter);

  app.listen(3000,()=>{
    console.log("Server is running at port 3000");
 });