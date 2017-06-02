# Keyonic
## Description
Keycloak with Ionic & Angular.

## Setup
Run `ionic serve --address localhost` to start the application.

Ensure that you have the Web Origin configured in Keycloak. eg `*` or other.

## Keycloak Configuration
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

## Access Control Functionality
Some UI elements are shown/hidden under the Access tab based on the logged in users role. These roles are:
* admin
* driver
* management
* backoffice

## Example UI
### User Profile
![](www/img/sample.png)

### User Access
![](www/img/sample2.png)

### User Account
![](www/img/sample3.png)