const express = require("express");
const router = express.Router();
const axios = require("axios");
const data = require("../server_data/data");
const modals = require("../dbs/model");

const modal = require("../dbs/model");
router.get("/", (req, res) => {
  res.json(data);
});

// setup rest api in backend
router.get("/api", async (req, res) => {
  try {
    const hotel = await modal.find({});
    res.json(hotel);
  } catch (e) {
    res.json(e);
  }
});

router.post("/api", async (req, res) => {
  try {
    const { name, email, hotel_name, price } = req.body;
    const data = new modal({ name, email, hotel_name, price });
    await data.save();
    const final = await modal.find({});
    return res.status(201).json(final);
  } catch (err) {
    return res.status(400).json({ err: err.code });
  }
});

module.exports = router;
