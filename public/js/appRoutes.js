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
  .when('/list-stores', {
    templateUrl: 'views/list-stores.html',
    controller: 'ListStoresController'
  })
  .when('/delivery', {
    templateUrl: 'views/delivery.html',
    controller: 'DeliveryController',
  })
  .when('/payment', {
    templateUrl: 'views/payment.html',
    controller: 'PaymentController',
  })

	$locationProvider.html5Mode(true);

}]);