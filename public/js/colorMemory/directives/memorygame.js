colorMemory.directive('memorygame', function () {
  return {
    restrict: 'AE',
	replace: true,
	scope:{
		colors: '=',
		gameStarted: '='
	},
    link: function (scope, elem, attrs) {
    },
	templateUrl:'js/colorMemory/directives/views/memorygame.html'
  }
});