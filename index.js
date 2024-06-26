const express = require("express");
const mongoose = require("mongoose");
const user = require("./Routes/user");
const product = require("./Routes/product")
const orders = require("./Routes/orders")

const PORT = 8000;
const app = express();

//mongodb connection
mongoose.connect("mongodb://localhost:27017/sampleProject");
const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));

db.once("open", () => {
  console.log("Connected to MongoDB");
});


//Middlewares
app.use(express.json());


//Router in use
app.use(user);
app.use(product);
app.use(orders);

//Server listening
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
