colorMemory.directive('card', [function () {
	return {
		restrict: 'E',
		replace: true,
		scope: {
			model: "=",
			flip: "&",
			cardColor: "=",
		},
		templateUrl: 'js/colorMemory/directives/views/card.html',
		link: function (scope) {
			scope.showVal = function() {
				// if (scope.model.flipped) {
				// 	return scope.model.val;
				// }
				// return "";
				return scope.model.val;
			};
			// scope.cardColor = function () {
			// 	return 'blue';
			// }
		}
	};
}]);