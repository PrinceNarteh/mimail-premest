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
    starred: {
      type: Boolean,
      default: false,
    },
    subject: {
      type: String,
      required: [true, "Please, enter subject for the mail"],
    },
    message: {
      type: String,
      required: [true, "Enter a message body"],
    },
  },
  {
    timestamps: true,
  }
);

const Mail = mongoose.model("Mail", mailSchema);
module.exports = Mail;
