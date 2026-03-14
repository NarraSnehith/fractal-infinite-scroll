const express = require("express");
const router = express.Router();
const Activity = require("../models/Activity");

router.get("/", async (req, res) => {

  try {

    console.log("Feed API called");

    const activities = await Activity.find().limit(10);

    res.json(activities);

  } catch (error) {

    console.error(error);

    res.status(500).json({
      error: "Server Error"
    });

  }

});

module.exports = router;