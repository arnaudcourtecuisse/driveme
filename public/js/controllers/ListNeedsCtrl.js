angular.module('ListNeedsCtrl', ['DataService'])
.controller('ListNeedsController', ['$scope', '$location', 'Data', function($scope, $location, Data) {

  const availableTimespans = [
    {value: -1, label: 'Je fais mes course pour...'},
    {value: 1, label: 'aujourd\'hui'},
    {value: 3, label: '3 jours'},
    {value: 7, label: '1 semaine'},
    {value: 14, label: '2 semaines'},
  ];
  $scope.initTimespan = availableTimespans[0];
  $scope.data = {
    availableTimespans,
  };

  $scope.getList = (duration) => {
    if(duration>-1) {
      Data.getNeedList(duration).then((list => {
        $scope.data.list = list.map(cat => ({category: cat, checked: true}));
        $scope.$apply();
      }));    
    }
  };

  $scope.validateList = () => {
    Data.setUserList(
      $scope.data.list
      .filter(item => item.checked)
      .map(item => item.category)
    );
    $location.path('/list-products');
  }
}]);