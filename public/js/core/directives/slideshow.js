core.directive('slideshow', function ($timeout) {
  return {
    restrict: 'AE',
    replace: true,
	scope:{
		slides: '=',
    myInterval: '@',
    noWrapSlides: '@',
	},
  // controller: ['$scope',function($scope) {
  //     $scope.init = function () {
  //         var uibCarousel = $('.myCarousel');
  //         uibCarousel.uibCarousel();
  //     }
  //     $scope.init();
  // }],
    link: function (scope, element, attrs) {
      scope.currInterval = 0;
      scope.noWrapSlides = false;
      scope.toogleLabel = "play";

      scope.showNext = function(){
        var index = ($('#myCarousel .active').index()+1)%(scope.slides.length);
        var modIndex = (((index)%(scope.slides.length))+(scope.slides.length))%(scope.slides.length);
        scope.slides[modIndex].active=true;
        scope.pauseSlideshow();
      }

      scope.showPrev = function(){
        var index = ($('#myCarousel .active').index()-1)%(scope.slides.length);
        var modIndex = (((index)%(scope.slides.length))+(scope.slides.length))%(scope.slides.length);
        scope.slides[modIndex].active=true;
        scope.pauseSlideshow();
      }

      scope.tooglePlay = function(){
        if(scope.currInterval == 0){
          scope.playSlideshow();
        }
        else
        {
          scope.pauseSlideshow();
        }

      }

      scope.playSlideshow = function(){        
          scope.toogleLabel = "pause";
          scope.currInterval = 2000;
      }

      scope.pauseSlideshow = function(){        
          scope.toogleLabel = "play";
          scope.currInterval = 0;
          $timeout.cancel(timer);
          sliderFunc();
      }

    /* Start: For Automatic slideshow*/
      
    var timer;
    
    var sliderFunc=function(){
      timer=$timeout(function(){
        scope.playSlideshow();
        timer=$timeout(sliderFunc,20000);
      },20000);
    };
    
    sliderFunc();
    
    scope.$on('$destroy',function(){
      $timeout.cancel(timer);
    });


      scope.init = function () {
        var uibCarousel = $('#myCarousel');

        for (var i = scope.slides.length - 1; i >= 1; i--) {
          scope.slides[i].active=false;
        };

        scope.slides[0].active=true;
        scope.pauseSlideshow();
      }
      scope.init();


    },
	templateUrl:'js/core/directives/slideshow.html'
  }
});
