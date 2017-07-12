# Keyonic
## Description
A simple Keycloak Sample Mobile App with Ionic & Angular. This is a small app that shows the majority of the functions in the Keycloak JS Adapter.

## Installation
The following configuration was used for this application.

```
var keycloak = Keycloak({
  "realm": "keypress",
  "url": "http://localhost:8080/auth",
  "ssl-required": "external",
  "clientId": "keypress-mobile",
  "public-client": true,
  "use-resource-role-mappings": true
});
```
You can import the Keycloak Realm and Users JSON files [here](https://github.com/TommyJ1994/keypress/tree/master/keycloak) to populate Keycloak with the correct configuration.

* Under the Realms section in Keycloak, add a new Realm with the Import option.
* Import the keypress-realm.json file.
* Once complete, visit the newly created realm and click the 'Import' button at the bottom left of the sidebar. You will import the users here. Choose the keypress-users-0.json file.

You must first have a running Keycloak instance running as the Keycloak JS Adapter is being fetched from the Keycloak server itself, rather than via npm. 

Note: In this sample application, Keycloak is expected to be already running off `localhost:8080`. This can be changed however in `www/index.html` under `<script src="http://localhost:8080/auth/js/keycloak.js"></script>`

Run `ionic serve --address localhost` to start the application.

Ensure that you have the Web Origin configured in Keycloak. eg `*` or other.

Also ensure that the redirectUri is pointing to where the ionic dev server is running. eg. `http://localhost:8100/*`

## Access Control Functionality
Some UI elements are shown/hidden under the Access tab based on the logged in users role. These roles are:
* admin
* driver
* management
* backoffice

## Example UI
### User Profile
The user profile screen will show information about the logged in user. You can also retrieve user Attributes this way.

![](www/img/sample.png)

### User Access
From here, you can see what auth server you have authenticated against, the realm you are using, and the client that you are interacting with Keycloak through. You can also see what Account Access Roles and Realm Roles have been granted to the user. Lastly, the Access Control list will show a role name UI element if they have that role, otherwise a role name UI component will not be shown if they do not have that role.

![](www/img/sample2.png)

### User Account
The account tab will allow you to manage your account (update some details like your password etc) and also logout.

![](www/img/sample3.png)

### Known Issues
* If you have CORS related plugins enabled in the browser, this can cause issues with Keycloak access origins, so please disable these.
