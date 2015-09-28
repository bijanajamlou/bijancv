<!doctype html>
<html ng-app="SliderApp">
  <head>   
    <meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
    <link href="//netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap.min.css" rel="stylesheet">
     <link rel="stylesheet" type="text/css" href="//cdnjs.cloudflare.com/ajax/libs/font-awesome/4.2.0/css/font-awesome.css" />
    <link href='css/app.css' rel='stylesheet' type='text/css'>

    <link href='http://fonts.googleapis.com/css?family=Open+Sans' rel='stylesheet' type='text/css'>

    <script src="js/vendor/angular.min.js"></script>
    <script src="js/vendor/angular-route.min.js"></script>
    <script src="js/vendor/angular-touch.min.js"></script>
    <script src="js/vendor/angular-animate.min.js"></script>
    <script src="js/vendor/angular-sanitize.min.js"></script>
    <script src="js/vendor/ui-bootstrap-tpls-0.13.4.js"></script>
    <script src="js/vendor/jquery-2.1.4.min.js"></script>
    


    <!-- Modules -->
     <script type="text/javascript" src="js/app.js"></script> 

    <!-- Controllers -->
    <script type="text/javascript" src="js/controllers/SliderController.js"></script>
    <script type="text/javascript" src="js/controllers/TabsetCtrl.js"></script> 
    
    <!-- Directives -->
     <!-- <script type="text/javascript" src="js/directives/slider.js"></script>-->
    <!-- <script type="text/javascript" src="js/directives/fader.js"></script>-->
    <script type="text/javascript" src="js/directives/slideshow.js"></script>
    <!--<script type="text/javascript" src="js/directives/slideshowcube.js"></script>-->
    
    <!-- Services -->
    <script type="text/javascript"  src="js/services/slides.js"></script>

    
    
    <title>Bijan CV</title>
  </head>
    <body>
        <h1>Bijan Ajamlou</h1>
        <div ng-view></div>

    </body>
</html>
