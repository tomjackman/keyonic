angular.module('starter.controllers', [])

.controller('ProfileCtrl', function($scope, $ionicPopup, Keycloak) {

  $scope.showProfile = false;

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

  $scope.logout = function() {
    Keycloak.logout();
  };
})

.controller('AccessCtrl', function($scope, Chats, Keycloak) {

  $scope.$on('$ionicView.loaded', function () {
    $scope.resourceRole = Keycloak.hasResourceRole("admin");
    $scope.realmRole = Keycloak.hasRealmRole("admin");
    $scope.keycloak = Keycloak.returnKeycloak();
    console.log($scope.keycloak);
  });


})

.controller('AccountCtrl', function($scope, Keycloak) {
  $scope.manageAccount = function() {
    Keycloak.manageAccount();
  }
});
