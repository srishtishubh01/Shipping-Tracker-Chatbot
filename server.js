const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/track/:id", (req, res) => {
  res.json({
    trackingId: req.params.id,
    status: "In Transit",
    location: "Indore, India",
    expectedDelivery: "10 Feb 2026",
    lastUpdate: "Today 1:30 PM",
    weight: "2.5 kg",
    carrier: "ExpressShip"
  });
});

app.listen(5000, () => {
  console.log("Backend running on http://localhost:5000");
});
