angular.module('PaymentCtrl', ['DataService'])
.controller('PaymentController', ['$scope', '$location', 'Data', function($scope, $location, Data) {
  Data.getUserCart().then((cart) => {
    $scope.price = cart.reduce((p, item) => p+item.quantity*item.price, 0);
  });
  $scope.validate = () => {
    $location.path('/payment');
  }
}]);