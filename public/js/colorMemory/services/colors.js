colorMemory.factory('colors', ['$http', function($http) {
	return $http.get('/colors')
    .success(function(data){
  	})
    .error(function(err) {
      return err;
  	});
}]);