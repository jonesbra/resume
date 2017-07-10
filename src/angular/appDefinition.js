var app = angular.module('app', ['ngRoute'])

app.config(['$routeProvider', function($routeProvider){

  $routeProvider
    .when('/', {
      templateUrl:  'angular/views/home.html',
    })
    .otherwise({
      redirectTo:   '/'
    })
}])
