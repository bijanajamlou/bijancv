core.controller('SliderController', ['$scope', 'slides', function($scope, slides) {
  slides.success(function(data) {
    $scope.slides = data;
  });
  
}]);