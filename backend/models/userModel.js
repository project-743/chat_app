const mongoose = require("mongoose");

const Model = mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true ,unique:true },
    pass: { type: String, required: true },
    dp: {
      type: String,
      required: true,
      default:
        "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", Model);

module.exports = User;
