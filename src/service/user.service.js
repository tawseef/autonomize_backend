/* eslint-disable no-useless-catch */
/* eslint-disable no-undef */

const User = require("../model/user.model");
const axios = require("axios");
const { callFriendApi } = require("./friend.service");

async function findingUserInDB(user) {
  try {
    const response = await User.find({ login: user });
    if (response) {
      return response
    }
    return null;
  } catch (error) {
    throw error;
  }
}

async function gettingDatafromAPI(user) {
  try {
    const response = await axios.get(`https://api.github.com/users/${user}`);
    if (response) return await saveInDB(response.data);
    else return null;
  } catch (error) {
    throw error;
  }
}

async function saveInDB(data) {
  try {
    const response = await User.create(data);
    if (response) {
      await callFriendApi(response);
      return response;
    } else return null;
  } catch (error) {
    throw error;
  }
}

module.exports = { findingUserInDB, gettingDatafromAPI };
