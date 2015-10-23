colorMemory.directive('arrowSelector',['$document',function($document){
    return{
        restrict:'A',
        link:function(scope,elem,attrs,ctrl){
            var elemFocus = false;             
            elem.on('mouseenter',function(){
                elemFocus = true;
            });
            elem.on('mouseleave',function(){
                elemFocus = false;
            });
            $document.bind('keydown',function(e){
                if(elemFocus){
                    if(e.keyCode == 38){
                        console.log(scope.selectedRow);
                        if(scope.selectedRow == 0){
                            return;
                        }
                        scope.selectedRow--;
                        scope.$apply();
                        e.preventDefault();
                    }
                    if(e.keyCode == 40){
                        if(scope.selectedRow == scope.foodItems.length - 1){
                            return;
                        }
                        scope.selectedRow++;
                        scope.$apply();
                        e.preventDefault();
                    }
                }
            });
        }
    };
}]);