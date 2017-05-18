angular.module('starter.controllers', [])

.controller('ProfileCtrl', function($scope, $ionicPopup, Keycloak) {

  $scope.showProfile = false;

  $scope.$on('$ionicView.loaded', function () {
    $scope.keycloakLoadUserProfile();
  });

  $scope.keycloakLoadUserProfile = function() {
    Keycloak.loadUserProfile().then(function(profile) {
      $scope.user = profile;
      $scope.showProfile = true;
    }, function(err) {
      $ionicPopup.alert({
       title: 'Error',
       template: err
     });
    });
  };
})

.controller('AccessCtrl', function($scope, Chats, Keycloak) {

  $scope.$on('$ionicView.loaded', function () {
    // simple checking of roles to show/hide content based on role
    $scope.adminRealmRole = Keycloak.hasRealmRole("admin");
    $scope.driverRealmRole = Keycloak.hasRealmRole("driver");
    $scope.managementRealmRole = Keycloak.hasRealmRole("management");
    $scope.backofficeRealmRole = Keycloak.hasRealmRole("backoffice");

    // get the keycloak object which has realm/accounts roles array
    $scope.keycloak = Keycloak.returnKeycloak();
  });


})

.controller('AccountCtrl', function($scope, Keycloak) {
  $scope.manageAccount = function() {
    Keycloak.manageAccount();
  }

  $scope.logout = function() {
    Keycloak.logout();
  };
});
