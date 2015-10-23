searchModule.directive('searchForm', function () {
  return {
    restrict: 'E',
	replace: true,
	scope:{
		//searchImage: '='
	},
	controller: ['$scope','$element','$attrs', '$http', '$timeout', 'searchImageService', function($scope,$element,$attrs,$http, $timeout,searchImageService) {
		$scope.message = null;

		var searchByTag = function (tag, tempFilterText) {


			var data = searchImageService.searchImage(tag);

			data.then(function(result) {  // this is only run after $http completes
		       	console.log(result);

		       	var dataLength = result.data.length;
				var resultData = result.data;
				if (dataLength > 0) {
					console.log( resultData );
					$scope.googleImages = resultData;
					$scope.message = "We found " + dataLength + " results for " + tempFilterText;
					$scope.displayImages = true;
				} else {
					$scope.message = "No results.";
				}
		    });

			//config
			//var url = "https://www.googleapis.com/customsearch/v1?q=" +tag +"&key=" +my_key +"&cx=" + my_id;
			// var clientId = '416e81a93f0d4cb689ded7e74749bc86';
			// var config = {
			// 	'params': {
			// 		// 'fileType' : 'jpg',
			// 		// 'imgSize'  : 'medium',
			// 		'searchType' : 'image',
			// 		'client_id': clientId,
			// 		'callback' : 'JSON_CALLBACK',
			// 		// 'count'    : 16,
				
			// 	}
			// }
			//console.log( 'json request' );
			//$http.jsonp( url, config )
			// $http.jsonp( url, config )
			// 	.success( function (results) {
			// 		var dataLength = results.items.length;
			// 		var resultData = results.items;
			// 		if (dataLength > 0) {
			// 			console.log( resultData );
			// 			$scope.googleImages = resultData;
			// 			$scope.message = "We found " + dataLength + " results for " + tag;
			// 		} else {
			// 			$scope.message = "No results.";
			// 		}
			// 	} )
			// 	.error( function (error) {
			// 		console.log(error);
			// 		$scope.message = "Not found.";
			// 	} );


		};

		 // This is what you will bind the filter to
	    $scope.filterText = '';

	    // Instantiate these variables outside the watch
	    var tempFilterText = '',
	        filterTextTimeout;
	    $scope.$watch('searchText', function (val) {
	        if (filterTextTimeout) $timeout.cancel(filterTextTimeout);

	        tempFilterText = val;
	        filterTextTimeout = $timeout(function() {
	            //$scope.filterText = tempFilterText;

		        var tag = tempFilterText;
		        if(tag == "")
		        {
		        	$scope.formData = {};
					$scope.googleImage = {};
					$scope.message = null;
					$scope.displayImages = null;
					//$scope.googleForm.$submitted = false;
		        }
		        else if(tag){
					tag=tag.replace(/ /g,"%22");
			        searchByTag( tag, tempFilterText );
					$scope.message = "Searching google for photos tagged with " + tempFilterText;
		        }
	        }, 1000); // delay 1000 ms
	    });

		//$scope.formData = {};

		// $scope.submitForm = function () {
		// 	console.log( 'submit' );
		// 	console.log( $scope.formData.tagInput );
		// 	var tag = $scope.formData.tagInput;
		// 	searchByTag( tag );
		// 	$scope.message = "Searching google for photos tagged with " + tag;
		// };

		// $scope.clear = function () {
		// 	console.log( 'clear' );
		// 	$scope.formData = {};
		// 	$scope.googleImage = {};
		// 	$scope.message = null;
		// 	$scope.googleForm.$submitted = false;
		// };


    }],
    link: function (scope, elem, attrs) {

		scope.clear = function () {
			console.log( 'clear' );
        	scope.formData = {};
			scope.googleImage = {};
			scope.message = null;
			scope.displayImages = null;
			scope.searchText = "";
		};
      		

    },
	templateUrl:'js/search/directives/views/searchform.html'
  }
});

searchModule.directive('onlyAllowedChars', function(){
    return {
        require: 'ngModel',
        link: function(scope, element, attrs, modelCtrl) {

            modelCtrl.$parsers.push(function (inputValue) {
                var transformedInput = inputValue ? inputValue.replace(/[^a-zA-Z0-9 ÅÄÖåöä]/g,'') : null;

                if (transformedInput!=inputValue) {
                    modelCtrl.$setViewValue(transformedInput);
                    modelCtrl.$render();
                }

                return transformedInput;
            });
        }
    };
});