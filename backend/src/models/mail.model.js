const mongoose = require("mongoose");

const mailSchema = new mongoose.Schema(
  {
    sender: {
      type: String,
      required: true,
    },
    recipient: {
      type: String,
      required: true,
    },
    read: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      required: [true, "enter a message title"],
    },
    body: {
      type: String,
      required: [true, "enter a message body"],
    },
  },
  {
    timestamps: true,
  }
);

const Mail = mongoose.model("Mail", mailSchema);
module.exports = Mail;
