app.config(function($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'templates/main.html',
      controller: 'movieControl'
    })
    .when('/movies/:id', {
      templateUrl: 'templates/show.html',
      controller: 'movieControl'
    })
    .otherwise('/');
});