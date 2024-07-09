/* eslint-disable no-undef */

const express = require("express");

const router = express.Router();
const { handleGetRequest } = require("../controller/user.controller");
const { handleGetFriendRequest } = require("../controller/friend.controller");

// User GET request
router.get("/users/:username", handleGetRequest);
router.get("/friend/:user", handleGetFriendRequest);

module.exports = router;
