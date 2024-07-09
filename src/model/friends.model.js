/* eslint-disable no-undef */

const mongoose = require("mongoose");

const friendsSchema = new mongoose.Schema({
  user: { type: String, lowercase: true, required: true, unique: true },
  friend: [
    {
      login: { type: String },
      avatar_url: { type: String, default: "" },
      node_id: { type: String, default: "" },
      url: { type: String, default: "" },
      id: { type: Number, default: 0 },
    },
  ],
});

const Friend = mongoose.model("friend", friendsSchema);

module.exports = Friend;
