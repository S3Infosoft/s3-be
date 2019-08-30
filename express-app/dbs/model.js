const mongoose = require("mongoose");

const shema = new mongoose.Schema({
  room_name: {
    type: String,
    required: true,
    trim: true
  },
  room_price: {
    type: Number,
    required: true,
    trim: false
  },
  room_type: {
    type: String,
    required: true,
    trim: true
  },
  Date: {
    type: String,
    required: false,
    default: Date.now()
  },
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true
  }
});

const model = mongoose.model("rooms", shema);

module.exports = model;
