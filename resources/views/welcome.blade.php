<!doctype html>
<html ng-app="SliderApp">
  <head>
    <!-- 
    <link href="css/bootstrap-3.3.5-dist/css/bootstrap.min.css" rel="stylesheet" />
    <link href="css/main.css" rel="stylesheet" />
    -->
    <meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
    <link href='css/ngFader.css' rel='stylesheet' type='text/css'>
    <link href='http://fonts.googleapis.com/css?family=Open+Sans' rel='stylesheet' type='text/css'>
    <script src="js/vendor/angular.min.js"></script>
    <script src="js/vendor/angular-route.min.js"></script>
    <script src="js/vendor/angular-touch.min.js"></script>
    <script src="js/vendor/angular-animate.min.js"></script>
    <script src="http://cdnjs.cloudflare.com/ajax/libs/gsap/latest/TweenMax.min.js"/></script>

    <!-- Modules -->
     <script type="text/javascript" src="js/app.js"></script> 

    <!-- Controllers -->
    <script type="text/javascript" src="js/controllers/SliderController.js"></script> 
    
    <!-- Directives -->
     <!-- <script type="text/javascript" src="js/directives/slider.js"></script>-->
     <script type="text/javascript" src="js/directives/fader.js"></script>
    
    <!-- Services -->
    <script type="text/javascript"  src="js/services/slides.js"></script>
    

    <title>Bijan CV</title>
  </head>
    <body ng-controller="SliderController">
        <h1>Bijan Ajamlou works</h1>
        <div ng-if="slides">
            <fader slides="slides"/>
        </div>
    </body>
</html>
