core.directive('fader', function ($interval) {
  return {
    restrict: 'AE',
	replace: true,
	scope:{
		slides: '=',
    selectedImage: '@',
    intervalPromise: '@',
    activePause: '@',
    activeStart: '@',
    numberOfslides: '@'
	},
    link: function (scope, element, attrs) {
        scope.setTime = 4000;
			//Pagination dots - gets number of slides
        scope.numberOfslides = scope.slides.length;


        scope.dots = function(num) {
          return new Array(num);   
        };

        //Pagination - click on dots and change image
        scope.selectedImage = 0;
        scope.setSelected = function (idx) {
          scope.stopSlider();
          scope.selectedImage = idx;
        };

        //Slideshow controls
        scope.sliderBack = function() {
          scope.stopSlider();
          scope.selectedImage === 0 ? scope.selectedImage = scope.numberOfslides - 1 : scope.selectedImage--;
        };

        scope.sliderForward = function() {
          scope.stopSlider();
          scope.autoSlider();
        };

        scope.autoSlider = function (){
          scope.selectedImage < scope.numberOfslides - 1 ? scope.selectedImage++ : scope.selectedImage = 0;
        };

        scope.stopSlider = function() {
          $interval.cancel(scope.intervalPromise);
          scope.activePause = true;
          scope.activeStart = false;
        };

        scope.toggleStartStop = function() {
          if(scope.activeStart) {
          	scope.stopSlider();
          } else {
          	scope.startSlider();
          }
        };
        
        scope.startSlider = function(){
          scope.intervalPromise = $interval(scope.autoSlider, scope.setTime);
          scope.activeStart = true;
          scope.activePause = false;
        };
        scope.startSlider();

        scope.show = function(idx){
        	if (scope.selectedImage==idx) {
        		return "show";
        	}
        };

        //work in progress to add animation using Tweenmax
         //var image = angular.element($document.getElementById('slideContainer'));
        //var image = $('.slideContainer', element)
        // var image = element.children('#slideContainer');

        // image.bind('mouseover', function (children) {
        //     var children = this.children;
        //     TweenMax.to(image, .4, {
        //         scale: '1.1',
        //         ease: Quad.easeOut
        //     });
        //     TweenMax.to(children, .4, {
        //         scale: '1.2',
        //         color: 'white',
        //         rotation: 720
        //     });
        // });
        // image.bind('mouseout', function (children) {
        //     var children = this.children;
        //     TweenMax.to(image, 3, {
        //         scale: '1.',
        //         ease: Elastic.easeOut
        //     });
        //     TweenMax.to(children, .4, {
        //         scale: '1',
        //         color: 'black',
        //         rotation: 0
        //     });
        // });

        // image.bind('mousedown', function () {
        //     TweenMax.to(image, 3, {
        //         scale: '1.3',
        //         ease: Elastic.easeOut
        //     });
        // });

        // image.bind('mouseup', function () {
        //     TweenMax.to(image, 3, {
        //         scale: '1',
        //         ease: Elastic.easeOut
        //     });
        // });
        
		
		
    },
	templateUrl:'js/core/directives/fader.html'
  }
});
