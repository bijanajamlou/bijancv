core.controller('TabsetCtrl',['$scope', '$rootScope', 'slides',
	function($scope, $rootScope, slides) {
		$scope.tabs = [
			{
				"heading": "Presentation",
				"active": true,
				 "template":"/views/cv/bijan/tab1.html"
			},
			// {
			// 	"heading": "Knowledge and skills",
			// 	"active": false,
			// 	 "template":"/views/cv/bijan/tab2.html"
			// },
			//{
			// 	"heading": "Carieer",
			// 	"active": false,
			// 	"template":"views/tab3.html"
			// },
			{
				"heading": "Show Reel",
				"active": false,
				"template":"views/cv/bijan/tab4.html"
			},
			// {
			// 	"heading": "Contact",
			// 	"active": false,
			// 	"template":"views/tab5.html"
			// },
		];

	slides.success(function(data) {
    	$scope.slides = data;
	});
}]);