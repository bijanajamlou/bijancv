// app.directive('slideshowcube', function ($timeout) {
//   return {
//     restrict: 'AE',
// 	replace: true,
// 	scope:{
// 		slides: '='
// 	},
//     link: function (scope, elem, attrs) {
	
// 	// $(document).ready(function(){ 
// 	//     var ctr=0; 
// 	//     var panel=""; 
// 	//         $("button").click(function(){ 
// 	//             ctr++; 
// 	//             if(ctr==1){ 
// 	//                 $("#cube").toggleClass("show-back"); 
// 	//                 $("#cube").removeClass(panel); 
// 	//                 panel="show-back"; 
// 	//             } 
// 	//             if(ctr==2){ 
// 	//                 $("#cube").toggleClass("show-right"); 
// 	//                 $("#cube").removeClass(panel); 
// 	//                 panel="show-right"; 
// 	//             } 
// 	//             if(ctr==3){ 
// 	//                 $("#cube").toggleClass("show-left"); 
// 	//                 $("#cube").removeClass(panel); 
// 	//                 panel="show-left";
// 	//             } 
// 	//             if(ctr==4){ 
// 	//                 $("#cube").toggleClass("show-top"); 
// 	//                 $("#cube").removeClass(panel); panel="show-top"; 
// 	//             } 
// 	//             if(ctr==5){ 
// 	//                 $("#cube").toggleClass("show-bottom"); 
// 	//                 $("#cube").removeClass(panel); 
// 	//                 panel="show-bottom"; 
// 	//             } 
// 	//             if(ctr==6){ 
// 	//                 $("#cube").toggleClass("show-front"); 
// 	//                 $("#cube").removeClass(panel); 
// 	//                 panel="show-front"; ctr=0; 
// 	//             } 
// 	//         }); 
// 	// });
// 	//	
//     },
// 	templateUrl:'js/directives/slideshowcube.html'
//   }
// });