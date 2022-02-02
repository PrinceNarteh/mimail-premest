const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "please enter a username"],
      minlength: [6, "minimum username length is 6 characters"],
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: [true, "you need to choose a password"],
      minlength: [6, "minimum password length is 6 characters"],
    },
    sent: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Mail",
      },
    ],
    inbox: [{ type: mongoose.Schema.Types.ObjectId, ref: "Mail" }],
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  this.password = await bcrypt.hash(this.password, 10);

  next();
});

userSchema.statics.login = async function (username, password) {
  const user = await this.findOne({ username });

  if (user) {
    const match = await bcrypt.compare(password, user.password);

    if (match) {
      return { user: { username: user.username } };
    }

    throw new Error("Invalid credentials");
  }

  throw new Error("Invalid credentials");
};

const User = mongoose.model("User", userSchema);
module.exports = User;
