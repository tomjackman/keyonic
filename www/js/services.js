angular.module('starter.services', [])

.factory('Keycloak', function($q) {

  var keycloak = Keycloak({
    "realm": "keypress",
    "url": "http://localhost:8080/auth",
    "ssl-required": "external",
    "clientId": "keypress-mobile",
    "resource": "keypress-mobile",
    "public-client": true,
    "use-resource-role-mappings": true,
    "adapter": "corodva"
  });

  return {
    init: function() {
      keycloak.init({ onLoad: 'login-required', responseMode: 'query'}).success(function(authenticated) {
        console.log("Authenticated:", authenticated);
      }).error(function() {
        console.error("Error Authenticating");
      })
    },
    loadUserProfile: function() {
      return $q(function(resolve, reject) {
        keycloak.loadUserProfile().success(function(profile) {
          resolve(profile);
        }).error(function() {
          reject("Error Obtaining Profile Data.");
       });
     });
   },
   hasResourceRole: function(role) {
     return keycloak.hasResourceRole(role);
   },
   hasRealmRole: function(role) {
     return keycloak.hasRealmRole(role, keycloak.clientId);
   },
   logout: function() {
     keycloak.logout({redirectUri: "http://10.32.241.8:8100"});
   },
   manageAccount: function() {
     keycloak.accountManagement();
   },
   returnKeycloak: function() {
     return keycloak;
   }
  };
})

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'img/ben.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'img/max.png'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'img/adam.jpg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'img/perry.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'img/mike.png'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});
