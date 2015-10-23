colorMemory.controller('GameCtrl', ['$scope', 'colors', 'gameRuleService', '$rootScope', 'gameInfo', 'deckService', '$timeout', function($scope, colors, gameRuleService, $rootScope, gameInfo, deckService, $timeout) {

	$scope.gameStarted = false;

	$scope.flipCard = function (card) {
			gameRuleService.flip(card);
	};

	$scope.startGame = function () {
		$scope.gameStarted = false;
		$rootScope.cards = deckService.createDeck(gameInfo.cards, $scope.colors);
		$scope.cards = $rootScope.cards;
		$scope.gameInfo = gameInfo;

		$scope.gameInfo.clicks = 0;
		$scope.gameInfo.score = 0;
	


		$timeout(function() {
		    $scope.gameStarted = true;
		}, 1000); 

		
	};




	colors.success(function(data) {
		$scope.colors = data;
		$scope.startGame();
		
	}); 

;;

	 
}]);