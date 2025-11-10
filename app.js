const express = require("express");
const app = express();

app.use(express.json());

const UserRouter = require("./routes/usersRoutes");
const ProductRouter = require("./routes/productsRoutes");
const cartRouter = require("./routes/cartRoutes");

app.use(express.static("public"))

 app.use("/users",UserRouter);
 app.use("/products",ProductRouter);
 app.use("/cart",cartRouter);

  app.listen(3000,()=>{
    console.log("Server is running at port 3000");
 });