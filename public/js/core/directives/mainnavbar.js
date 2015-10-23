core.directive('mainnavbar', ['$location', '$route', function(location, route) {
  return {
    restrict: 'AE',
    scope: {
    },
    templateUrl:'js/core/directives/mainnavbar.html',
    controller: ['$scope', '$http', function($scope, $http) {
 
    }],
    link: function(scope, iElement, iAttrs, ctrl) {

          var navbarHover = $('.navbarHover');
          var highs = [];
          // graph.css('background-color', 'Lime');
          // graph.css('width', 200);
          // graph.css('height', 200);
          

          var svg;

          var chartGraph = function(element, data, opts) {
            var width = opts.width || 25,
                height = opts.height || 26,
                padding = opts.padding || 0;

            // chart
            svg    = d3.select(element[0])
                            .append('svg:svg')
                            .attr('width', width)
                            .attr('height', height)
                            .attr('transform', 'translate('+padding+', '+padding+')')
                            .attr('class', 'sparkline');
                            // .append('g')
                            // .attr('transform', 'translate('+padding+', '+padding+')');
                              //.attr('transform', 'translate('+padding+', '+padding+')');

            svg.selectAll('*').remove();
            // svg.append('g');
            svg.append("polygon")
                //.attr("points", "05,30 4 15,10 5 25,30")
                .attr("points", "05,30 15,10 25,30")
                //.attr("fill", "green")
                //.attr("height", height)
                .attr('class', 'targetRect');

          }
          chartGraph(navbarHover, highs, iAttrs);
          var sparkline  = $('.sparkline');
           var rect  = $('.targetRect');
          var li = $('li');
          var navbarBrand = $('img');

          function navbarHoverTween(target, targetPosition, offsetParentX, currPosition, width) {
            var offsetWidth =  width /2 -15;

            TweenLite.to(target, 1, {x: targetPosition -offsetParentX + offsetWidth}); 
          }


          function navbarHoverMoveClicked() {
            $this    = $(this);
            var targetPosition = $this.position().left;
            var currPosition = sparkline.position().left;
            var offsetParentX = $this.parent().offset().left;
            var width =  $this.width();

            navbarHoverTween(sparkline, targetPosition, offsetParentX, currPosition, width);
            //alert(route);

            //TweenLite.to(sparkline, 1, {x: targetPosition -px, width: offsetWidth}); 
            //TweenLite.to(rect, 1, {width: offsetWidth}); 
          }




          scope.$on('$locationChangeSuccess', function() {

              for (var i = 0; i < li.length; i++) {
                //if($(li[i]).hasClass('active'))
                var dataMatchRoute = $(li[i]).attr('data-match-route');
                dataMatchRoute = dataMatchRoute.replace('/$','/');

                if(location.path() == dataMatchRoute  )
                {
                    console.log(li[i]);

                    target    = $(li[i]);
                    var targetPosition = target.position().left;
                    var currPosition = sparkline.position().left;
                    var offsetParentX = target.parent().offset().left;
                    var width =  target.width();

                    navbarHoverTween(sparkline, targetPosition, offsetParentX, currPosition, width);
                }
                //Do something

                 //console.log(li[i]);
             }

             //$('a').removeClass('hover');
          });

          // li.click(navbarHoverMoveClicked);
          // navbarBrand.click(navbarHoverMoveClicked);



          //TweenLite.fromTo(rect, 2, {x:"0px"}, {x:"100px"});
          //TweenLite.to(rect, 2, {rotation:30, scaleX:0.8});
          //TweenLite.to(rect, 1.5, {width:100, height:200});
    }
  }
}]);


