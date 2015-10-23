colorMemory.directive('board', [function() {
	return {
		restrict: 'E',
		replace: true,
		transclude:true,
		scope: {
			gameInfo:'=',
			startGame: "&",
		},
		templateUrl: 'js/colorMemory/directives/views/board.html',
		link: function(scope) {	

			scope.tooglePlay = function() {
				scope.startGame();
			};		
		}
	};
}]);