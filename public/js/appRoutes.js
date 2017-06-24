angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider
  .when('/', {
    templateUrl: 'views/home.html',
    controller: 'MainController'
  })
  .when('/list-needs', {
    templateUrl: 'views/list-needs.html',
    controller: 'ListNeedsController'
  })
  .when('/list-products', {
    templateUrl: 'views/list-products.html',
    controller: 'ListProductsController'
  })

	$locationProvider.html5Mode(true);

}]);