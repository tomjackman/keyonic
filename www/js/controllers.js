angular.module('starter.controllers', [])

.controller('ProfileCtrl', function($scope, $ionicPopup) {

  $scope.showProfile = false;

  $scope.login = function() {
    auth.authz.login();
  };

  $scope.$on('$ionicView.loaded', function () {
    auth.authz.loadUserProfile().success(function(profile) {
      $scope.user = profile;
      $scope.showProfile = true;
    }, function(err) {
      $ionicPopup.alert({
       title: 'Error',
       template: err
     });
    });
  });
})

.controller('AccessCtrl', function($scope) {
  $scope.$on('$ionicView.loaded', function () {
    // get the keycloak object which has realm/accounts roles array
    $scope.keycloak = auth.authz;

    // simple checking of roles to show/hide content based on role
    $scope.adminRealmRole = $scope.keycloak.hasRealmRole("admin");
    $scope.driverRealmRole = $scope.keycloak.hasRealmRole("driver");
    $scope.managementRealmRole = $scope.keycloak.hasRealmRole("management");
    $scope.backofficeRealmRole = $scope.keycloak.hasRealmRole("backoffice");
  });
})

.controller('AccountCtrl', function($scope) {
  $scope.manageAccount = function() {
    auth.authz.accountManagement();
  }

  $scope.logout = function() {
    auth.authz.logout();
  };
});
