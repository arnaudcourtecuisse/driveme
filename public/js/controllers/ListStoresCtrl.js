angular.module('ListStoresCtrl', ['DataService'])
.controller('ListStoresController', ['$scope', '$location', 'Data', function($scope, $location, Data) {

  $scope.data = {};

  Data.getUserStoreList().then((list) => {
    $scope.data.store = list[0];
    $scope.data.list = list;
  });

  $scope.validate = () => {
    Data.setUserStore($scope.data.store);
    $location.path('/delivery');
  };

}]);