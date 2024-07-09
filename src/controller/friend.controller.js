/* eslint-disable no-undef */

const { findingUserInFriendDB } = require("../service/friend.service");
const httpStatus = require("http-status");

async function handleGetFriendRequest(req, res) {
  const { user } = req.params;
  try {
    const findingUser = await findingUserInFriendDB(user);
    if (findingUser) {
      res.status(httpStatus.OK).json(findingUser);
    } else {
      res
        .status(httpStatus.INTERNAL_SERVER_ERROR)
        .json({ message: "error", error });
    }
  } catch (error) {
    res
      .status(httpStatus.INTERNAL_SERVER_ERROR)
      .json({ message: "error", error });
  }
}

module.exports = { handleGetFriendRequest };
