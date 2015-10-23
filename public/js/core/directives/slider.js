core.directive('slider', function ($timeout) {
  return {
    restrict: 'AE',
	replace: true,
	scope:{
		slides: '='
	},
    link: function (scope, elem, attrs) {
	
		scope.currentIndex=0;


		scope.next=function(){
			scope.currentIndex<scope.slides.length-1?scope.currentIndex++:scope.currentIndex=0;
		};
		
		scope.prev=function(){
			scope.currentIndex>0?scope.currentIndex--:scope.currentIndex=scope.slides.length-1;
		};
		
		scope.$watch('currentIndex',function(){
			scope.slides.forEach(function(slide){
				slide.visible=false;
			});
			scope.slides[scope.currentIndex].visible=true;
		});
		
		/* Start: For Automatic slideshow*/
		
		var timer;
		
		var sliderFunc=function(){
			timer=$timeout(function(){
				scope.next();
				timer=$timeout(sliderFunc,10000);
			},10000);
		};
		
		sliderFunc();
		
		scope.$on('$destroy',function(){
			$timeout.cancel(timer);
		});

		scope.setCurrentSlideIndex = function (index) {
            scope.direction = (index > scope.currentIndex) ? 'left' : 'right';
            scope.currentIndex = index;
        };

        scope.isCurrentSlideIndex = function (index) {
            return scope.currentIndex === index;
        };
		
		/* End : For Automatic slideshow*/
		
    },
	templateUrl:'js/core/directives/slider.html'
  }
});

// app.directive('appInfo', function() {
// 	return {
//     restrict: 'E',
//     scope: {
//     	info: '='
//     },
//     templateUrl: 'js/directives/appInfo.html'
//   };
// });