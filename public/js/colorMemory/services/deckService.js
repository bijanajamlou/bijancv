colorMemory.factory('deckService', ['cardFactory', function (cardFactory) {
	function deckService() {
		var cards;
		this.createDeck = function (numberOfCards, colors) {
			var n = numberOfCards,
				ret = [];
			if (!n || n < 0 || !angular.isNumber(n)) {
				n = 10;
			}

			//
			var nr = 0;
			var i = 0;
			angular.forEach(colors, function(item){
				// //console.log(item.color);  
				// $scope.cards[nr].cardColor = item.color;
				// nr++;
				// $scope.cards[nr].cardColor = item.color;
				// nr++;

				var c = cardFactory.create(i, item.color);

				var d = cardFactory.create(i, item.color);

				ret.push(c);
				ret.push(d);

				i++;

			});

			// for (var i = 0, j = 1; i < n; i++, j++) {
			// 	var c = cardFactory.create(i);

			// 	var d = cardFactory.create(i);

			// 	ret.push(c);
			// 	ret.push(d);
			// }

			cards = ret;
			return shuffle(ret);
		};

		function shuffle(o) { //v1.0
			for (var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
			return o;
		};
	}

	return new deckService();
}]);