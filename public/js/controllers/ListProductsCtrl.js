angular.module('ListProductsCtrl', ['DataService'])
.controller('ListProductsController', ['$scope', '$location', 'Data', function($scope, $location, Data) {

  $scope.data = {};

  $scope.updatePrice = (item, vChange) => {
    if(item && vChange) item.quantity = Math.max(0, item.quantity+vChange);
    $scope.data.price = $scope.data.list.reduce((price, item) => price + item.quantity*item.price, 0);
  }

  Data.getUserProductList().then((list) => {
    $scope.data.list = list;
    $scope.updatePrice();
  });

  $scope.validate = () => {
    Data.setUserCart($scope.data.list);
    $location.path('/list-stores');
  }
}]);