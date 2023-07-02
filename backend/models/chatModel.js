const mongoose = require("mongoose");

const Model = mongoose.Schema(
  {
    chatName: { type: String, trim: true },
    isGC: { type: Boolean, default: false },
    users: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    lastMsg: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Message",
    },
    gcAdmin: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

const Chat = mongoose.model("Chat", Model);

module.exports = Chat;
