"use strict";

const add = {
  template: `
  <form ng-submit="$ctrl.signUp($ctrl.user);">
    <input type="text" placeholder = "username" ng-model="$ctrl.user.username">
    <input type="text" placeholder = "password" ng-model="$ctrl.user.password">
    <button>Sign Up</button>
  </form>
  
  `,

  controller: ["DataService", function(DataService){
    const vm = this;

    vm.signUp = (user) => {
      DataService.sendUserInfo(user);
    
    }

  }]


}




angular
  .module("app")
  .component("add", add);