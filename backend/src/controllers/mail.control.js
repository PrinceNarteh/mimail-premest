const User = require("../models/user.model");
const Mail = require("../models/mail.model");
const AppError = require("../helpers/appError");

const mailCtrl = {};

mailCtrl.send = async function (req, res, next) {
  try {
    // checks if user exists
    const { userId } = req;
    const user = await User.findById(userId);
    if (!user) {
      return next(new AppError("User not found", 404));
    }

    // checks if recipient exists
    const recipient = await User.findOne({ username: req.body.recipient });
    if (!recipient) {
      return next(
        new AppError(
          `Could not send mail to ${req.body.recipient}. Please kindly check the username.`,
          404
        )
      );
    }

    // create new mail
    const newMail = Mail({ sender: user.username, ...req.body });
    let mail = await newMail.save();

    if (mail) {
      await User.updateOne(
        { username: user.username },
        { $push: { sent: [mail._id] } }
      );

      await User.updateOne(
        { username: req.body.recipient },
        { $push: { inbox: [mail._id] } }
      );

      res.status(200).json({ success: true, mail: newMail });
      return;
    }

    throw new AppError("could not send mail", 401);
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

mailCtrl.deliver = function (req, res) {
  const actionTypes = {
    INBOX: "inbox",
    SENTBOX: "sent",
  };

  const { username, type } = req.body;

  try {
    User.findOne({ username })
      .populate(type)
      .exec(function (err, mls) {
        let data;

        switch (type) {
          case actionTypes.INBOX:
            data = mls.inbox;
            break;
          case actionTypes.SENTBOX:
            data = mls.sent;
            break;
          default:
            data = "invalid mailbox type";
        }

        if (err) {
          res.status(500).json({ success: false, message: err });
        } else {
          res.status(200).json({ success: true, data, type });
        }
      });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

mailCtrl.getMails = async (req, res, next) => {
  const { userId } = req;
  try {
    const user = await User.findById(userId).populate("inbox").populate("sent");
    if (!user) {
      return next(new AppError("User not found", 404));
    }
    return res.status(201).json({ inbox: user.inbox, sent: user.sent });
  } catch (err) {
    return next(new AppError(err.message, 404));
  }
};

mailCtrl.deleteMail = async (req, res, next) => {
  const mailId = req.params;

  try {
    const mail = await Mail.findById(mailId);
    if (!mail) {
      return res.status(404).json({ error: "Mail not found" });
    }
    await Mail.findByIdAndDelete(mailId);
    res
      .status(200)
      .json({ success: true, message: "Mail deleted successfully." });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

mailCtrl.sync = async function (req, res) {
  const { state, id } = req.body;

  try {
    await Mail.findOneAndUpdate({ _id: id }, { $set: { read: state } });
    res.status(200).json({ success: true });
  } catch (error) {
    res.status(400).json({ success: false, message: err.message });
  }
};

mailCtrl.toggleStarred = async function (req, res) {
  const { mailId } = req.params;
  console.log(req);

  try {
    let mail = await Mail.findById({ _id: mailId });
    if (!mail) {
      return res
        .status(404)
        .json({ success: false, message: "Mail not found" });
    }
    mail = await Mail.findOneAndUpdate(
      { _id: mailId },
      { $set: { starred: !mail.starred } }
    );
    res.status(200).json({ success: true, mail });
  } catch (err) {
    console.log(err);
    res.status(400).json({ success: false, message: err.message });
  }
};

module.exports = mailCtrl;
