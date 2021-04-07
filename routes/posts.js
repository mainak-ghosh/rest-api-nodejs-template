const express = require("express");

const router = express.Router();

// default route
router.get("/", (request, response) => {
  response.send("Are you sure you wanna face this right now?");
});

// children routes --
router.get("/year2016", (request, response) => {
  response.send("What is this ? I'm gonna die for sure");
});

module.exports = router;
