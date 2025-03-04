const ActualPost = require("./ActualUserData.js");
const express = require("express");

const UserData = express.Router();

UserData.route("/user_registration/naturebee_register").post(ActualPost.NaturebeeRegister);
UserData.route("/user_registration/checklogin").post(ActualPost.CheckLogin);
UserData.route("/user_registration/user_address").post(ActualPost.AddNewAddress);
// UserData.route("/user_registration/google_register").post(ActualPost.GoogleRegister);


module.exports = UserData;