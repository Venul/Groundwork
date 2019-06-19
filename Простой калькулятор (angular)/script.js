var app = angular.module('app', []);

function KitchenCtrl($scope) {
  $scope.items = [
    {name:'Pizza', sum:3.6},
    {name:'Donutzzz', sum:2},
    {name:'PIVKO', sum:8.9},
    {name:'Glaz', sum:0.4}
  ];
  
  $scope.cart = [];
  
  $scope.addToCart = function(item) {
      $scope.cart.push(item);
  }
  
  $scope.removeFromCart = function(index) {
      $scope.cart.splice(index, 1);
  }
  
  $scope.cartSum = function() {
  		var sum = 0;
      angular.forEach($scope.cart,function(item){
      		sum = sum + item.sum;
      });
      return sum;
  }
}


