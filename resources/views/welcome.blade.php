<!doctype html>
<html ng-app="app">
  <head>  
    <meta charset="utf-8">
    <base href="/"> 


    <meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
     <link href='css/bootstrap.css' rel='stylesheet' type='text/css' />
    <!-- <link href="//netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap.min.css" rel="stylesheet" /> -->
     <link rel="stylesheet" type="text/css" href="//cdnjs.cloudflare.com/ajax/libs/font-awesome/4.2.0/css/font-awesome.css" />
     <script src="https://cdnjs.cloudflare.com/ajax/libs/d3/3.5.6/d3.min.js" charset="utf-8"></script>
    <link href='css/app.css' rel='stylesheet' type='text/css' />

    <link href='http://fonts.googleapis.com/css?family=Open+Sans' rel='stylesheet' type='text/css' />
    <link rel="stylesheet" href="fonts/font-awesome/css/font-awesome.min.css">

    <script src="js/vendor/angular.min.js"></script>
    <script src="js/vendor/angular-route.min.js"></script>
    <script src="js/vendor/angular-touch.min.js"></script>
    <script src="js/vendor/angular-animate.min.js"></script>
    <script src="js/vendor/angular-sanitize.min.js"></script>
    <script src="js/vendor/ui-bootstrap-tpls-0.14.2.min.js"></script>
    <script src="js/vendor/navbar.js"></script>
    <script src="js/vendor/jquery-2.1.4.min.js"></script>
    <script src="js/vendor/greenstock/TweenLite.min.js"></script>
    <script src="js/vendor/greenstock/plugins/CSSPlugin.min.js"></script>
    <script src="js/vendor/angular-focusmanager.js"></script>



    <!-- Modules -->
     <script type="text/javascript" src="js/app.module.js"></script> 

    <!-- Modules -->
    <script type="text/javascript" src="js/core/core.module.js"></script> 

    <!-- Controllers -->
    <!-- <script type="text/javascript" src="js/core/controllers/HomeCtrl.js"></script> -->
    <!-- <script type="text/javascript" src="js/core/controllers/ContactCtrl.js"></script> -->
    <!-- <script type="text/javascript" src="js/core/controllers/ReferencesCtrl.js"></script> -->
    <!-- <script type="text/javascript" src="js/core/controllers/AboutCtrl.js"></script>-->
    <script type="text/javascript" src="js/core/controllers/TabsetCtrl.js"></script> 

    <!-- Directives -->
    <script type="text/javascript" src="js/core/directives/mainnavbar.js"></script>
     <script type="text/javascript" src="js/core/directives/slideshow.js"></script>

    
    <!-- Services -->
     <script type="text/javascript" src="js/core/services/slides.js"></script>





    <!-- colorMemory -->

    <!-- Modules -->
    <script type="text/javascript" src="js/colorMemory/colorMemory.module.js"></script> 

    <!-- Controllers -->
    <script type="text/javascript" src="js/colorMemory/controllers/GameCtrl.js"></script> 

    <!-- Directives -->
    <script type="text/javascript" src="js/colorMemory/directives/memorygame.js"></script>
    <script type="text/javascript" src="js/colorMemory/directives/board.js"></script>
    <script type="text/javascript" src="js/colorMemory/directives/card.js"></script>
    <script type="text/javascript" src="js/colorMemory/directives/arrowSelector.js"></script>

    
    <!-- Services -->
    <script type="text/javascript" src="js/colorMemory/services/colors.js"></script>
    <script type="text/javascript" src="js/colorMemory/services/deckService.js"></script>
    <script type="text/javascript" src="js/colorMemory/services/gameRuleService.js"></script>
    
    <!-- factories -->
    <script type="text/javascript" src="js/colorMemory/factories/cardFactory.js"></script>



        <!-- colorMemory -->

    <!-- Modules -->
    <script type="text/javascript" src="js/search/search.module.js"></script> 

    <!-- Controllers -->
    <script type="text/javascript" src="js/search/controllers/SearchCtrl.js"></script> 

    <!-- Directives -->
    <script type="text/javascript" src="js/search/directives/searchForm.js"></script>

    
    <!-- Services -->
     <script type="text/javascript" src="js/search/services/searchImageService.js"></script>
    
    <!-- factories -->

    

    
    <title>Interface interaction</title>
  </head>
    <body>
        <mainnavbar>
        </mainnavbar>

        <div ng-view ></div>

    </body>
</html>
