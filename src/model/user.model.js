/* eslint-disable no-undef */

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  login: { type: String, lowercase: true, unique: true },
  name: { type: String, default: "" },
  email: { type: String, default: "" },
  location: { type: String, default: "" },
  bio: { type: String, default: "" },
  blog: { type: String, default: "" },
  avatar_url: { type: String, default: "" },
  twitter_username: { type: String, default: "" },
  public_repos: { type: Number, default: 0 },
  followers: { type: Number, default: 0 },
  following: { type: Number, default: 0 },
  friends: { type: Number, default: 0 },
  followers_url: { type: String, default: "" },
  following_url: { type: String, default: "" },
  isDeleted: { type: Boolean, default: false },
});

const User = mongoose.model("user", userSchema);

module.exports = User;
