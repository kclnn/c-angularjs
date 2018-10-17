(function () {
  'use strict';

  angular.module('DCApp', [])
    .controller('DCController', DCController);

  DCController.$inject = ['$scope'];
  function DCController ($scope) {
    $scope.dishes = "";
    $scope.message = "";
    $scope.checkDishes = function () {
      $scope.message = (countDishes() <= 3) ? "Enjoy!" : "Too much!";
    };
    function countDishes (dishes) {
      var dishesList = $scope.dishes.split(",");
      return (dishesList.length);
    };
  }
})();
