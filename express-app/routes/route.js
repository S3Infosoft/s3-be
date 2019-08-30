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
  console.log("fired this request");
  try {
    const { final_data, user } = req.body;
    console.log(final_data);
    const db_data = {
      room_name: final_data.room_name,
      room_price: final_data.room_price,
      room_type: final_data.room_type,
      Date: Date.now(),
      name: user.name,
      email: user.email
    };
    const done = new modals(db_data);
    await done.save();
    return res.json({ db_data });
  } catch (e) {
    console.log(e);
    return res.json(e);
  }
});

module.exports = router;
