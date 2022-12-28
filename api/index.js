const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");

//* MONGOOSE DATABASE CONNECTION
mongoose.set("strictQuery", true);
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Database connection successfull!"))
  .catch((error) => {
    console.log(error);
  });

//? ROUTERS LISTENING URL "PROTOCOL/HOSTNAME:5555/PATH?/SEARCH#HASH"

app.use(cors());
app.use(express.json());


//? SERVER LISTEINING IN THE PORT
let PORT = process.env.PORT || 3333;

app.listen(PORT, () => {
  console.log("Backend server  is running!");
});
