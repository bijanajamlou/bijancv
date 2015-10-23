var core = angular.module('app.core',['ui.bootstrap', 'ngRoute', 'ngSanitize', 'ngAnimate', 'ngTouch', 'mgcrea.ngStrap.navbar'])
.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
 $routeProvider
  // .when('/', {
  //       templateUrl: 'views/home/home.html',
  //       controller: 'HomeCtrl'
  //   })
 .when('/', {
        templateUrl: 'views/cv/bijan/tabset.html',
        controller: 'TabsetCtrl'
    })
    // .when('/about', {
    //     templateUrl: 'views/about/about.html',
    //     controller: 'AboutCtrl'
    // })
    // .when('/references', {
    //     templateUrl: 'views/references/references.html',
    //     controller: 'ReferencesCtrl'
    // })
    .when('/game', {
        templateUrl: 'views/game/game.html',
        controller: 'GameCtrl'
    })
    // .when('/contact', {
    //     templateUrl: 'views/contact/contact.html',
    //     controller: 'ContactCtrl'
    // })
    .when('/search', {
        templateUrl: 'views/search/search.html',
        controller: 'SearchCtrl'
    })
    .otherwise({
     redirectTo: '/'
    });



 //Enable html5Mode for pushstate ('#'-less URLs)
    // $locationProvider.html5Mode(true);
}]);