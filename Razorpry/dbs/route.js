const express = require("express");
const router = express.Router();
const axios = require("axios");

const modal = require("./model");
router.get("/", (req, res) => {
  axios
    .get("https://jsonplaceholder.typicode.com/photos")
    .then(res => {
      return res.data;
    })
    .then(data => {
      const trim = data.slice(0, 10);
      res.json(trim);
    })
    .catch(err => console.log(err));
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
    const { hotel_name, hotel_price } = req.body;
    const data = { hotel_name, hotel_price };
    const hotel = new modal(data);
    await hotel.save();
    res.json(hotel);
  } catch (e) {
    res.json(e);
  }
});

module.exports = router;
