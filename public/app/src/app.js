var app_cached_providers = {};
	
(function(){
	'use strict'
	
	var loadDependencies = function(dependencyArray) { //services or factories
	  return ["$q", function($q) {
	      var deferred = $q.defer();
	      
	      if(dependencyArray){
	      	require(dependencyArray, function() {deferred.resolve(); });
	  	  }
	      return deferred.promise;
	  }];
	}

	angular.module("app",['ui.router','ngAnimate','ngCookies'])
	.config(['$controllerProvider','$provide','$compileProvider',function(controllerProvider,provide,compileProvider) {
		/*for future use where u can create controllers,factories,directives on the fly after app gets bootstrapped*/
	    app_cached_providers.$controllerProvider = controllerProvider; //controllers
	    app_cached_providers.$provide = provide;  //factories and services ,constants and values
	    app_cached_providers.$compileProvider = compileProvider; //directives
	    console.log(app_cached_providers);
	 }])

	//configure routes

	.config(['$stateProvider', '$urlRouterProvider',function($stateProvider, $urlRouterProvider) {

  	$urlRouterProvider.otherwise("/");
  	$stateProvider
  	.state("index", {
  		url: "/",
  		templateUrl: "templates/intro.html",
  		controller: "IndexCtrl",
  		resolve : {
		  	loadCtrl : loadDependencies(["IndexCtrl"])
		}
  	}).state("login", {
  		url: "/login",
  		templateUrl: "templates/login.html",
  		controller: "LoginCtrl",
  		resolve : {
		  	loadCtrl : loadDependencies(["LoginCtrl"])
		}
	 })
  	}])
	
  	.run([function(){
  		//anything before just running the app
  	}]);

  	angular.bootstrap(document,["app"]);

})();