core.directive('sparkline', function() {
  var url = "http://api.openweathermap.org/data/2.5/forecast/daily?mode=json&units=imperial&cnt=14&callback=JSON_CALLBACK&q=";
  return {
    restrict: 'E',
    require: '^ngCity',
    transclude: true,
    scope: {
      ngCity: '@'
    },
    // template: '<div class="sparkline"><div ng-transclude></div><div class="graph"></div></div>',
    templateUrl:'js/core/directives/sparkline.html',
    controller: ['$scope', '$http', function($scope, $http) {
      $scope.getTemp = function(city) {
        $http({
          method: 'JSONP',
          url: url + city
        }).success(function(data) {
          var weather = [];
          angular.forEach(data.list, function(value){
            weather.push(value);
          });
          $scope.weather = weather;
        });
      }
    }],
    link: function(scope, iElement, iAttrs, ctrl) {
      scope.getTemp(iAttrs.ngCity);
      scope.$watch('weather', function(newVal) {
        // the `$watch` function will fire even if the
        // weather property is undefined, so we'll
        // check for it
        if (newVal) {
          var highs = [];

          angular.forEach(scope.weather, function(value){
            highs.push(value.temp.max);
          });
 		  var graph = $('.graph');
 		  // graph.css('background-color', 'Lime');
 		  // graph.css('width', 200);
 		  // graph.css('height', 200);
          chartGraph(graph, highs, iAttrs);

          var bars = $('.bars');
          barGraph(bars, highs, iAttrs);
        }
      });
    }
  }
});

var chartGraph = function(element, data, opts) {
  var width = opts.width || 400,
      height = opts.height || 160,
      padding = opts.padding || 30;

  // chart
  var svg     = d3.select(element[0])
                  .append('svg:svg')
                  .attr('width', width)
                  .attr('height', height)
                  .attr('class', 'sparkline')
                  .append('g')
                    .attr('transform', 'translate('+padding+', '+padding+')');

  svg.selectAll('*').remove();

  var maxY    = d3.max(data),
      x       = d3.scale.linear()
                  .domain([0, data.length])
                  .range([0, width]),
      y       = d3.scale.linear()
                  .domain([0, maxY])
                  .range([height, 0]),
      yAxis = d3.svg.axis().scale(y)
                    .orient('left')
                    .ticks(5);

  svg.append('g')
      .attr('class', 'axis')
      .call(yAxis);

  var line    = d3.svg.line()
                  .interpolate('linear')
                  .x(function(d,i){return x(i);})
                  .y(function(d,i){return y(d);}),
      path    = svg.append('svg:path')
                    .data([data])
                    .attr('d', line)
                    .attr('fill', 'none')
                    .attr('stroke','black') 
                    .attr('stroke-width', '1');
}

var barGraph = function(element, data, opts) {

function type(d) {
  d.value = +d.value; // coerce to number
  return d;
}


var modData = [];

for (var i in data) {
  modData.push(i/10);
}

 var width = opts.width || 800,
      height = opts.height || 660,
      padding = opts.padding || 40;
      barHeight =  20;

function arrayItemMax(arr) {
    return arr.reduce(function (result, val) {
        return Math.max(result, !isNaN(val) ? parseInt(val) : val.length);
    }, 0);
}



var x = d3.scale.linear()
    .range([0, width]);

var chart = d3.select(element[0])
	.append('svg:svg')
    // .attr("width", arrayItemMax(modData))
    .attr("width", arrayItemMax(modData) * 1000)
    .attr('height', modData.length * (barHeight +padding))
    .attr('class', 'sparkline')
    .append('g')
    .attr('transform', 'translate('+padding+', '+padding+')');

chart.selectAll('*').remove();

  var bar = chart.selectAll("g")
      .data(modData)
    .enter().append("g")
      .attr("transform", function(d, i) { return "translate(0," + i * barHeight + ")"; });

  bar.append("rect")
      .attr("width", function(d) { 
      	return x(d); 
      })
      .attr("height", barHeight - 2)
      .attr('fill','black') 
      // .attr('stroke-width', '1');

  bar.append("text")
      .attr("x", function(d) { 
      	return x(d) ; 
      })
      .attr("y", barHeight / 2)
      .attr("dy", ".35em")
      .text(function(d) { return d; });
}

app.directive('ngCity', function() {
  return {
    controller: function($scope) {}
  }
});


