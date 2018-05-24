"use strict";

const get = {
  template: `
  <button type="button" ng-click="$ctrl.showData();">Show User Data</button>
  <p>Username: {{ $ctrl.userData.username }}</p>
  <p>Password: {{ $ctrl.userData.password }}</p>
  
  
  `,

  controller: ["DataService", function(DataService){
    const vm = this;
    vm.showData = (userData) => {
      
      vm.userData = DataService.receiveUserInfo();
    };
  }]
};



angular
  .module("app")
  .component("get", get);