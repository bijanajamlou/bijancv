colorMemory.factory('searchImageService', ['$http', function($http) {

	 var searchImage = function(searchString) {

        return $http.get('/searchImageGoogleWebAPI/' +searchString)
		    .success(function(data){
		    	return data;
		  	})
		    .error(function(err) {
		      return err;
		  	});
    };
    return { searchImage: searchImage };


}]);
