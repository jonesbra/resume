var app = angular.module('app', ['ngRoute'])

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
  $locationProvider.hashPrefix('');
  $routeProvider
    .when('/', {
      templateUrl:  'angular/views/profile.html',
    })
    .when('/achievements', {
      templateUrl:  'angular/views/achievements.html',
    })
    .when('/contact', {
      templateUrl:  'angular/views/contact.html',
    })
    .when('/education', {
      templateUrl:  'angular/views/education.html',
    })
    .when('/skills', {
      templateUrl:  'angular/views/skills.html',
    })
    .otherwise({
      redirectTo:   '/'
    })
}])
