const express = require("express");
const router = express.Router();
const { initializeAPI } = require("../controllers/configCtrl");

router.get("/initialize", initializeAPI);

module.exports = router;
