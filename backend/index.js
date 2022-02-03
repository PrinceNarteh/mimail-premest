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

app.use("/api/auth", userRoute);
app.use("/api/mails", mailRoute);

app.get("/", (req, res) => {
  res.status(400).sendFile(path.join(__dirname + "/src/pages/index.html"));
});

app.get("/*", (req, res) => {
  res.status(400).sendFile(path.join(__dirname + "/src/pages/404.html"));
});

app.use((err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "Internal server error";
  res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
  });
});

const start = async () => {
  dbConnect();

  app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
  });
};

start();
