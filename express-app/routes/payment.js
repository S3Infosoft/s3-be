const express = require("express");
const router = express.Router();
const cors = require("cors");
const uuid = require("uuid");

const stripe = require("stripe")("");
const razorpay = require("razorpay");

const dbs = require("../dbs/config");
router.get("/", async (req, res) => {
  res.send("hello there payment here");
});

router.post("/checkout", async (req, res) => {
  console.log(req.body);
  let error;
  let status;
  try {
    const { product, token } = req.body;

    const customer = await stripe.customers.create({
      email: token.email,
      source: token.id
    });

    const idempotency_key = uuid();
    const charge = await stripe.charges.create(
      {
        amount: product.price * 100,
        currency: "usd",
        customer: customer.id,
        receipt_email: token.email,
        description: `Purchased the ${product.name}`,
        shipping: {
          name: token.card.name,
          address: {
            line1: token.card.address_line1,
            line2: token.card.address_line2,
            city: token.card.address_city,
            country: token.card.address_country,
            postal_code: token.card.address_zip
          }
        }
      },
      {
        idempotency_key
      }
    );
    // console.log("Charge:", { charge });
    status = "success";
  } catch (error) {
    // console.error("Error:", error);
    status = "failure";
  }

  res.json({ error, status });
});

router.post("/razorpaycheckout", (req, res) => {
  const paymentId = uuid();
  const instance = new razorpay({
    key_id: razorpay_id
  });
  instance.payments.fetch(paymentId);
  instance.payments
    .all({
      from: "2019-08-01",
      to: "2019-12-31"
    })
    .then(response => {
      return res.json({
        msg: response
      });
    })
    .catch(error => {
      console.log(error);
      return res.json({ err: error.code });
    });
});

module.exports = router;
