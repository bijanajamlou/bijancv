var app = angular.module('SliderApp',['ui.bootstrap', 'ngRoute', 'ngSanitize', 'ngAnimate', 'ngTouch', ])
.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
	$routeProvider.when('/', {
        templateUrl: 'views/tabset.html',
        controller: 'TabsetCtrl'
    })
    .otherwise({
    	redirectTo: '/'
    });

	  // Enable html5Mode for pushstate ('#'-less URLs)
    // $locationProvider.html5Mode(true);
}]);

 
