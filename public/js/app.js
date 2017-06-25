angular.module('driveme', [
  'ngRoute', 'ui.bootstrap',
  'appRoutes', 'DataService', 'MainCtrl',
  'ListNeedsCtrl', 'ListProductsCtrl', 'ListStoresCtrl',
  'DeliveryCtrl', 'PaymentCtrl'
]);