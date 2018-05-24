"use strict";

function DataService(){

    let userInfo = {};
    const sendUserInfo = (user) => {
      userInfo = user;
      console.log(user);
    }

    const receiveUserInfo = () =>{
      return userInfo
    }

    return {
      sendUserInfo,
      receiveUserInfo
    }

}



angular
  .module("app")
  .factory("DataService", DataService)