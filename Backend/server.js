const express = require("express");
const axios = require("axios");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;
require("dotenv").config;

app.use(
  cors({
    origin: ["chrome-extension://idbocimpgcdhibmenodnjdnkfnodeihl"],
    methods: ["POST", "GET"],
    credentials: true,
  })
);

app.use(express.json());

// Define MongoDB Schema
const skinSchema = new mongoose.Schema({
  success: Boolean,
  lowest_price: String,
  volume: String,
  median_price: String,
  gun: String,
  skin: String,
  condition: String,
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

// Define MongoDB Model
const Skin = mongoose.model("CS2Skins", skinSchema);

// MongoDB connection string
const connectionString = process.env.MONGO_CONNECTION_STRING;
// Connect to MongoDB
mongoose
  .connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => console.error("Error connecting to MongoDB:", err));

// Endpoint to fetch skin data from Steam Market API
app.get("/api/fetchSkinData", async (req, res) => {
  const { gun, skin, condition, isStatTrak, isSouvenir } = req.query;
  let itemName;

  if (isStatTrak === "true") {
    itemName = `StatTrak™ ${gun} | ${skin} (${condition})`;
  } else if (isSouvenir === "true") {
    itemName = `Souvenir ${gun} | ${skin} (${condition})`;
  } else {
    itemName = `${gun} | ${skin} (${condition})`;
  }
  const url = `http://steamcommunity.com/market/priceoverview/?country=US&currency=1&appid=730&market_hash_name=${encodeURIComponent(
    itemName
  )}`;

  try {
    const response = await axios.get(url);
    res.json(response.data);
  } catch (error) {
    console.error("Error fetching data from Steam Market API:", error);
    res.status(500).send("Error fetching skin data");
  }
});

// Endpoint to save skin data to MongoDB
app.post("/api/saveSkinData", async (req, res) => {
  const { success, lowest_price, volume, median_price, gun, skin, condition } =
    req.body;
  try {
    const newSkin = new Skin({
      success,
      lowest_price,
      volume,
      median_price,
      gun,
      skin,
      condition,
    });

    await newSkin.save();
    console.log("Skin data saved to MongoDB:", newSkin);

    res.json({
      message: `Skin data for ${gun} | ${skin} (${condition}) saved successfully`,
      data: newSkin,
    });
  } catch (error) {
    console.error("Error saving skin data:", error);
    res.status(500).send("Error saving skin data");
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
