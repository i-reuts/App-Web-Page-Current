(function() {

	var app = angular.module('mobAppPage', []).run(function($location) { 
 		var url = $location.absUrl();

 		url.indexOf('app_fr.html')>-1 ? app.lang = 'FR' : app.lang = 'EN';
 		console.log(this.lang);
  	});;


	app.controller('tabController', function($scope) {

		this.tab = 1;

		this.setTab = function(tab) {
			this.tab = tab;
		};

		this.isSet = function(tab) {
			return this.tab === tab;
		};

		this.notifySupport = function()
		{
			$scope.$broadcast('support.active');
		}

	});



	app.controller('carouselController', function() {

		this.initializeCarousel = function()
		{
			if(!this.initialized)
			{
				this.initialized = true;
				$('.carousel').slick({
					nextArrow: '<button type="button" class="arrow-right"></button>',
					prevArrow: '<button type="button" class="arrow-left"></button>',

					slidesToScroll: 1,
  					autoplay: true,
  					autoplaySpeed: 5000
				});
			}		
        };
        	
	});



	app.controller('formController', function($scope) {

		var formCtrl = this;
		$scope.$on('support.active', function() {
   			formCtrl.formData = { email: '' };
   			$scope.reviewForm.$setPristine();
			formCtrl.invalidSubmit = false;
			formCtrl.displayConfirmation = false;
  		});

		this.submitForm = function(isValid)
		{
			if(isValid) {
				//POST data here
			    this.formData = {};
				$scope.reviewForm.$setPristine();
				this.displayConfirmation = true;
				this.invalidSubmit = false;
			}
			else {  
			  	this.invalidSubmit = true;
			  	this.displayConfirmation = false;
			}
		}

	});

	app.directive('features', function(){
		if(app.lang === 'EN') {
			return {
				restrict: 'E',
				templateUrl: 'app_templates/features.html'
			};
		}
		else return {
				restrict: 'E',
				templateUrl: 'app_templates/features_fr.html'
			};
	});

	app.directive('description', function(){
		if(app.lang === 'EN') {
			return {
				restrict: 'E',
				templateUrl: 'app_templates/description.html'
			};
		}
		else return  {
				restrict: 'E',
				templateUrl: 'app_templates/description_fr.html'
			};
	});

	app.directive('support', function(){
		if(app.lang === 'EN') {
			return {
				restrict: 'E',
				templateUrl: 'app_templates/support.html'
			};
		}
		else return {
			restrict: 'E',
			templateUrl: 'app_templates/support_fr.html'
			};
	});

	app.directive('about', function(){
		if(app.lang === 'EN') {
			return {
				restrict: 'E',
				templateUrl: 'app_templates/about.html'
			};
		}
		else return {
			restrict: 'E',
			templateUrl: 'app_templates/about_fr.html'
			};
	});
	
}) ();
