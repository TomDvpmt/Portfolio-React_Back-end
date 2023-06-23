const express = require("express");
const cors = require("cors");
const mailingRoutes = require("./routes/mailing");
const configRoutes = require("./routes/config");

const app = express();

app.use(express.json());
app.use(cors());

app.use("/API/mail", mailingRoutes);
app.use("/API/config", configRoutes);

module.exports = app;
