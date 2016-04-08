var movieControl = function($scope, $http, $routeParams) {
  $scope.searchTerm = '';
  $scope.wait = true;
  $scope.searchCall = function() {
    $http.get('http://www.omdbapi.com/?type=movie&plot=full&r=json&s='+$scope.searchTerm)
         .then(function(data) {
            $scope.wait = false;
            $scope.movies = data.data.Search;
            console.log($scope.movies);
         })
         .catch(function(err) {
            console.log(err);
         });
  };
};

movieControl.$inject = ['$scope', '$http', '$routeParams'];
app.controller('movieControl', movieControl);

var singleMovie = function($scope, $http, $routeParams) {
    $scope.oneMovie = (function() {
        $scope.entertain = true;
    $http.get('http://www.omdbapi.com/?i='+$routeParams.id+'&plot=full&r=json')
         .then(function(data) {
            $scope.entertain = false;
            console.log(data.data);
            $scope.movieInfo = data.data;
         })
    })();
}

singleMovie.$inject = ['$scope', '$http', '$routeParams'];
app.controller('singleMovie', singleMovie);


//http://www.omdbapi.com/?s=