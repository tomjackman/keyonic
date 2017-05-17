angular.module('starter.controllers', [])

.controller('ProfileCtrl', function($scope, Keycloak) {

  $scope.showProfile = false;

  $scope.keycloakLoadUserProfile = function() {
    Keycloak.loadUserProfile().then(function(profile) {
      $scope.user = profile;
      $scope.showProfile = true;
      console.log(profile);
    }, function(err) {
      console.log(err);
    });
  };

  $scope.logout = function() {
    Keycloak.logout();
  };
})

.controller('ChatsCtrl', function($scope, Chats, Keycloak) {

  $scope.keycloakInit = function() {
    Keycloak.init();
  }

$scope.click = function() {
  $scope.resourceRole = keycloak.hasResourceRole("admin");
  $scope.realmRole = keycloak.hasRealmRole("admin");
  $scope.authenticated = keycloak.authenticated;
}

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
