/* eslint-disable no-useless-catch */
/* eslint-disable no-undef */
const axios = require("axios");
const Friend = require("../model/friends.model");

async function callFriendApi(data) {
  try {
    if (data) {
      const responseFollower = await axios.get(
        `https://api.github.com/users/${data.login}/followers`
      );
      const responseFollowing = await axios.get(
        `https://api.github.com/users/${data.login}/following`
      );

      const followerList = responseFollower.data.map((ele) => {
        return {
          login: ele.login,
          avatar_url: ele.avatar_url,
          node_id: ele.node_id,
          url: ele.url,
          id: ele.id,
        };
      });

      const followingList = responseFollowing.data.map((ele) => {
        return {
          login: ele.login,
          avatar_url: ele.avatar_url,
          node_id: ele.node_id,
          url: ele.url,
          id: ele.id,
        };
      });

      const followerLogins = followerList.map((ele) => ele.login);
      const friends = followingList.filter((ele) =>
        followerLogins.includes(ele.login)
      );

      const response = await saveFriendInDB({
        user: data.login,
        friend: friends,
      });
      if (response) return response;
      else return null;
    }
  } catch (error) {
    throw error;
  }
}

async function saveFriendInDB(data) {
  try {
    const response = await Friend.create(data);
    if (response) {
      return response;
    } else return null;
  } catch (error) {
    throw error;
  }
}

async function findingUserInFriendDB(user) {
  try {
    const response = await Friend.findOne({ user: user });
    if (response) return response;
    else return false;
  } catch (error) {
    throw error;
  }
}

module.exports = { callFriendApi, findingUserInFriendDB };
