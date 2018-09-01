var app=angular.module("mainApp",['ngRoute']);

app.config(['$routeProvider', function($routeProvider){
    $routeProvider
        .when('/',{
            templateUrl:'templates/main.html', 
            controller:'indexCtrl'           
        })
        .when('/home',{
            templateUrl:'templates/main.html',
            controller:'indexCtrl'
        })
        .when("/schwerpunkte",{
            templateUrl:'templates/taetigkeitsschwerpunkte.html', 
            controller:'schwerpunkteCtrl'
        }) 
        .when("/leistungen",{
            templateUrl:'templates/leistungen.html', 
            controller:'leistungenCtrl'
        }) 
        .when("/taetigkeitsschwerpunkte_mietrecht",{
            templateUrl:'templates/taetigkeitsschwerpunkte_mietrecht.html',
            controller:'mietrechtCtrl'
        }) 
        .when("/taetigkeitsschwerpunkte_familienrecht",{
            templateUrl:'templates/taetigkeitsschwerpunkte_familienrecht.html',
            controller:'familienrechtCtrl'  
        })
        .when("/taetigkeitsschwerpunkte_verkehrsrecht",{
            templateUrl:'templates/taetigkeitsschwerpunkte_verkehrsrecht.html',
            controller:'verkehrsrechtCtrl'
        })/**/
        .when("/taetigkeitsschwerpunkte_weitere",{
            templateUrl:'templates/taetigkeitsschwerpunkte_weitere.html',
            controller:'weitereCtrl'
        })
        .when("/team",{
            templateUrl:'templates/team.html', 
            controller:'teamCtrl'
        }) 
        .when("/rechtsprechungen",{
            templateUrl:'templates/rechtsprechungen.html', 
            controller:'rechtsprechungenCtrl'
        }) 
        .when("/email",{
            templateUrl:'templates/email.html', 
            controller:'emailCtrl'
        }) 
        .when("/kontakt",{
            templateUrl:'templates/email.html', 
            controller:'emailCtrl'
        }) 
        .when("/anfahrt",{
            templateUrl:'templates/anfahrt.html', 
            controller:'anfahrtCtrl'
        }) 
        .when("/impressum",{
            templateUrl:'templates/impressum.html', 
            controller:'impressumCtrl'
        })
        .when("/datenschutz",{
            templateUrl:'templates/datenschutz.html', 
            controller:'datenschutzCtrl'
        })
        .otherwise({
            redirectTo:'templates/main.html'
        });
    }]);

app.controller('naviCtrl', function($scope){
    $scope.toggleKontakt = function(){
        $('#ulKontakt').toggle(200); 
        $('#ulKanzlei').hide(200);       
    };
    $scope.toggleKanzlei=function(){
        $('#ulKanzlei').toggle(200);
        $('#ulKontakt').hide(200);        
    };
    $scope.slideUp=function(){
        $('#ulKanzlei').slideUp(200);
        $('#ulKontakt').slideUp(200);
    };
    $scope.slideUpNavSite1 = function(){        
        $('.navSmall').slideUp(200);        
    };    
});
app.controller('rechtsprechungenCtrl', function($scope){
    $scope.openFall=function(){        
        $('#fall').slideToggle(200);
        $('#neuestes').slideUp(200);
        $('#praxis').slideUp(200);

    };
    $scope.openNeuestes=function(){        
        $('#neuestes').slideToggle(200);
        $('#fall').slideUp(200);
        $('#praxis').slideUp(200);

    };
    $scope.openPraxis=function(){        
        $('#praxis').slideToggle(200);
        $('#fall').slideUp(200);
        $('#neuestes').slideUp(200);
    };
});
app.controller('indexCtrl', function($scope){});
app.controller('schwerpunkteCtrl', function($scope){});
app.controller('familienrechtCtrl', function($scope){});
app.controller('mietrechtCtrl', function($scope){});
app.controller('verkehrsrechtCtrl', function($scope){});
app.controller('weitereCtrl', function($scope){});
app.controller('emailCtrl', function($scope){});
app.controller('anfahrtCtrl', function($scope){});
app.controller('impressumCtrl', function($scope){});
app.controller('datenschutzCtrl', function($scope){});
app.controller('leistungenCtrl', function($scope){});
app.controller('teamCtrl', function($scope){
    $scope.changePic1=function(){
        $('#picTeam').css({
            backgroundImage:'url("assets/team1.jpg")'
        });
        $('.label1').css({
            backgroundColor:'orange'
        });        
        $('.label2, .label3, .label4, .label5, .label6').css({
            backgroundColor:'#efefef'
        });  
    };
    $scope.changePic2=function(){
        $('#picTeam').css({
            backgroundImage:'url("assets/team2.jpg")'
        });
        $('.label2').css({
            backgroundColor:'orange'
        });        
        $('.label1, .label3, .label4, .label5, .label6').css({
            backgroundColor:'#efefef'
        });  
    };
    $scope.changePic3=function(){
        $('#picTeam').css({
            backgroundImage:'url("assets/team3.jpg")',
            transition: 'opacity 2s ease-in-out'
        });
        $('.label3').css({
            backgroundColor:'orange'
        });        
        $('.label1, .label2, .label4, .label5, .label6').css({
            backgroundColor:'#efefef'
        });  
    };
    $scope.changePic4=function(){
        $('#picTeam').fadeIn(300).css({
            backgroundImage:'url("assets/team4.jpg")'
        });
        $('.label4').css({
            backgroundColor:'orange'
        });        
        $('.label1, .label2, .label3, .label5, .label6').css({
            backgroundColor:'#efefef'
        });  
    };
    $scope.changePic5=function(){
        $('#picTeam').css({
            backgroundImage:'url("assets/team5.jpg")'
        });
        $('.label5').css({
            backgroundColor:'orange'
        });        
        $('.label1, .label2, .label3, .label4, .label6').css({
            backgroundColor:'#efefef'
        });  
    };
    $scope.changePic6=function(){
        $('#picTeam').css({
            backgroundImage:'url("assets/team6.jpg")'
        });
        $('.label6').css({
            backgroundColor:'orange'
        });        
        $('.label1, .label2, .label3, .label4, .label5').css({
            backgroundColor:'#efefef'
        });  
    };
    
});
