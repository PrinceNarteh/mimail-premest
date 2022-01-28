require("dotenv").config();
const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 4000;
const cors = require("cors");

const userRoute = require("./src/routes/user.route");
const mailRoute = require("./src/routes/mail.route");
const { dbConnect } = require("./src/database/dbConnection");

app.use(cors());

app.use(express.json());

app.use("/api/auth/", userRoute);
app.use("/api/mail", mailRoute);

app.get("/", (req, res) => {
  res.status(400).sendFile(path.join(__dirname + "/src/pages/index.html"));
});

app.get("/*", (req, res) => {
  res.status(400).sendFile(path.join(__dirname + "/src/pages/404.html"));
});

const start = async () => {
  dbConnect();

  app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
  });
};

start();
