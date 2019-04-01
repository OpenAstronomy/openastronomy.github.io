---
---
(function(){
	var app = angular.module('coala', ['ngSanitize','btford.markdown', 'ngRoute']);

  app.config(['$routeProvider',
              function($routeProvider) {
                  $routeProvider.
                      when('/projects', {
                          template: '<projects></projects>',
                          reloadOnSearch: false
                      }).
                      when('/mentors', {
                          template: '<mentors></mentors>'
                      }).
                      when('/faq', {
                          template: '<faq></faq>'
                      }).
                      otherwise({
                          redirectTo: '/projects'
                      });
              }]);

  app.controller('TabController', function ($location) {
      this.tab = $location.path();
      this.setTab = function (stab) {
          this.tab = stab;
          $location.path(stab);
      };
      this.isSet = function (stab) {
          return $location.path() == stab;
      };
  });

	app.directive('projects',  ['$http', '$timeout', '$location', function ($http, $timeout, $location) {
		return {
			restrict: 'E',
			templateUrl: "{{ '/gsoc/display/partials/tabs/projects.html' | prepend: site.baseurl }}",
			controller: function ($scope, $location) {
				self = this;
				$scope.projectList = projects;

				self.showProject = function (project) {
					$scope.currentProject = project;
					$(document).ready(function () {
						$('.modal').modal('open');
					});
            mval = encodeURIComponent(project["name"].split(' ').join('_').toLowerCase());
            $location.url('?project=' + mval);
         };

					$scope.search = function (arg) {
						$scope.searchText = arg;
					};

					$scope.redirect = function (arg) {
						window.open(arg, '_blank');
					};

          $scope.updateLink = function () {
              $scope.currentProject = null;
              $location.url($location.path());
          };

          $scope.projects_url_dict = {};
          angular.forEach($scope.projectList, function(value, key){
              // Create a new key as RESTURL so it can follow the name of the project.
              value["resturl"] = encodeURIComponent(value["name"].split(' ').join('_').toLowerCase());
              $scope.projects_url_dict[value["resturl"]] = key;
          });

          // Find whether there's a project name in the URL and try to load it.
          var project_requested = encodeURIComponent($location.search().project);
          if(project_requested){
              if(Object.keys($scope.projects_url_dict).indexOf(project_requested) > -1){
                  self.showProject($scope.projectList[$scope.projects_url_dict[project_requested]]);
              }
          }

		      var search_requested = $location.search().q;
				  if(search_requested){
					    $scope.searchText = search_requested;
				  }
			},
			controllerAs: 'lc'
    };
	}]);

	app.directive('faq',[ '$http', function ($http) {
		return {
			restrict: 'E',
			templateUrl: "{{ '/gsoc/display/partials/tabs/faq.html' | prepend: site.baseurl }}",
			controller: function () {
				self = this
				self.faqs = faq
		},
		controllerAs: 'toc'
	};
	}]);


 app.filter('format_desc', function () {
  return function (value) {
   if (!value) return '';
   var lastspace = value.indexOf('.');
   if (lastspace != -1) {
    if (value.charAt(lastspace-1) == ',') {
    	lastspace = lastspace - 1;
    }
    value = value.substr(0, lastspace);
   }
   return value;
  };
 });

 app.filter('format_issue', function () {
  return function (value) {
   if (!value) return '';
   res = value.split('/');
   res = res[3] + '/' + res[4] + '#' + res[6];
   return res;
  };
 });


	app.directive('mentors', ['$http', function ($http) {
		return {
			restrict: 'E',
			templateUrl: "{{ '/gsoc/display/partials/tabs/mentors.html' | prepend: site.baseurl }}",
			controller: function ($scope) {
				self = this;
				self.mentorsList = {};
				self.adminsList = {};
        self.year = year.toString();
				angular.forEach(projects, function(value, key){
					angular.forEach(value.mentors, function(value, key){
						self.mentorsList[value] =  {
									"github_handle" : value,
									"github_avatar_url": "https://avatars.githubusercontent.com/" +value
						};

					});
				});

				angular.forEach(admins[year], function(value, key){
						self.adminsList[value] = {
							"github_handle" : value,
							"github_avatar_url": "https://avatars.githubusercontent.com/" +value

						};
				});
			},
			controllerAs: "gic"
		};
	}]);

})();
