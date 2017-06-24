angular.module('ListProductsCtrl', ['DataService'])
.controller('ListProductsController', ['$scope', '$location', 'Data', function($scope, $location, Data) {

  $scope.data = {};

  Data.getUserProductList().then((list) => {
    $scope.data.list = list;
  });

  $scope.validateList = () => {
    $location.path('/list-needs');
  }
}]);