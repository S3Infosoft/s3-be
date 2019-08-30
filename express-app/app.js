const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const axios = require("axios");
const db = require("./dbs/config");
const cors = require("cors");

mongoose.connect(
  db.mongoURI,
  { useNewUrlParser: true, useCreateIndex: true },
  () => {
    console.log("mongodb connected");
  }
);

const app = express();

app.use(cors());

app.use(bodyParser.json());
app.use(express.json());

// database related stuff
app.use("/rest", require("./routes/route"));
// notification  related stuff
app.use("/notify", require("./routes/notifications"));
// payments
app.use("/payments", require("./routes/payment.js"));

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log("server started");
});
