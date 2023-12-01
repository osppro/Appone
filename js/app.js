// Var app = angular.module("myApp",[]);

// app.controller('FirstController', function($scope) {
// $scope.message = 'Testing my Angular App';
// });


var app = angular.module('myApp', ['ngRoute']);
 
app.config(function($routeProvider) {
$routeProvider
 
.when('/', {
templateUrl : 'pages/first.html',
controller : 'FirstController'
})
 
.when('/blog', {
templateUrl : 'pages/second.html',
controller : 'SecondController'
})
 
.when('/about', {
templateUrl : 'pages/third.html',
controller : 'ThirdController'
})
 
.otherwise({redirectTo: '/'});
});


app.controller('FirstController', function($scope) {
$scope.message = 'Hello from FirstController';
});
 
app.controller('SecondController', function($scope) {
$scope.message = 'Hello from SecondController';
});
 
app.controller('ThirdController', function($scope) {
$scope.message = 'Hello from ThirdController';
});