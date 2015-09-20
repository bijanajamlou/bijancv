app.factory('slides', ['$http', function($http) {
	return $http.get('http://homestead.app/slides')
    .success(function(data){
  	})
    .error(function(err) {
      return err;
  	});
}]);