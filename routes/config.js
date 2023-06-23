const express = require("express");
const router = express.Router();
const { initializeAPI } = require("../controllers/configCtrl");

router.post("/initialize", initializeAPI);

module.exports = router;
