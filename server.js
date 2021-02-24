const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const callRoute = require("./router/router");
const cors = require("cors");

const port = process.env.PORT || 4040;

const app = express();

mongoose.connect(process.env.DATABASE_URL, {
  useFindAndModify: false,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

mongoose.connection
  .once("open", () => {
    console.log("Connection...");
  })
  .on("error", () => {
    console.log("something went wrong");
  });

app.use(express.json());
app.use(cors());
app.use("/api", callRoute);
app.listen(process.env.PORT, () => {
  console.log("listening on my port ");
});
