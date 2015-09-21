app.factory('slides', ['$http', function($http) {
	return $http.get('/slides')
    .success(function(data){
  	})
    .error(function(err) {
      return err;
  	});
}]);