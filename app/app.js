var myNinjaApp = angular.module("myNinjaApp", ["ngRoute"]);

myNinjaApp.config([
  "$routeProvider",
  function($routeProvider) {
    $routeProvider
      .when("/home", {
        templateUrl: "views/home.html"
      })
      .when("/directory", {
        templateUrl: "views/directory.html",
        controller: "NinjaController"
      })
      .otherwise({
        redirectTo: "/home"
      });
  }
]);

myNinjaApp.controller("NinjaController", [
  "$scope",
  function($scope) {
    $scope.ninjas = [
      {
        name: "Yoshi",
        belt: "Green",
        rate: 50,
        available: true,
        thumb: "content/img/yoshi.png"
      },
      {
        name: "Crystal",
        belt: "Yellow",
        rate: 60,
        available: true,
        thumb: "content/img/crystal.png"
      },
      {
        name: "Ryu",
        belt: "Orange",
        rate: 10,
        available: false,
        thumb: "content/img/ryu.png"
      },
      {
        name: "Shaun",
        belt: "Black",
        rate: 1000,
        available: true,
        thumb: "content/img/shaun.png"
      }
    ];

    $scope.removeNinja = function(ninja) {
      var removedNinja = $scope.ninjas.indexOf(ninja);
      $scope.ninjas.splice(removedNinja, 1);
    };
    $scope.addNinja = function() {
      $scope.ninjas.push({
        name: $scope.newNinja.name,
        belt: $scope.newNinja.belt,
        rate: parseInt($scope.newNinja.rate),
        available: true
      });
      $scope.newNinja.name = "";
      $scope.newNinja.belt = "";
      $scope.newNinja.rate = "";
    };
  }
]);
