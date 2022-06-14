const express = require("express");

const app = express();

// app.use(cors());

app.use(express.json());

const connect = require("./configs/db");
const carController = require("./controllers/car.controllers");
app.use("/", carController);
app.listen(5000, async () => {
  try {
    await connect();
    console.log("Listening on port 5000");
  } catch (error) {
    console.log(error);
  }
});

module.exports = app;
