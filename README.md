# PUBLIACQUA

## Quick Start

Clone the repository with the --recursive option to automatically clone submodules:

`git clone --recursive git@github.com:geosolutions-it/MapStore-C179.git`

Install NodeJS, Maven and Java versions indicated [here](https://docs.mapstore.geosolutionsgroup.com/en/latest/developer-guide/requirements/).

Start the development application locally:

`npm install`

## Build / Develop

In order to run this project you need to setup some local environmental variables first.

Here is a list:

```sh
export LDAP_URL="ldap://this.will.not.work:389/dc=xxxxx,dc=xxxxx,dc=xxxxx"
export LDAP_USER_SEARCH_CATEGORY="LDAP_USER_SEARCH_CATEGORY"
export LDAP_GROUPS="LDAP_GROUPS"
export LDAP_GROUP_SEARCH_BASE="LDAP_GROUP_SEARCH_BASE"
export LDAP_ROLE_SEARCH_BASE="LDAP_ROLE_SEARCH_BASE"
```

or you can run the export script

```sh
source ./export.sh
```

We also added printing profile to the build of the backend, see command `be:start`

then you can simply run `npm start` or in two terminals have so you can better monitor logs of the two script running

- `npm run fe:start`
- `npm run be:start`

## Testing ldap locally

A developer can test ldap connection to use the `ldap-server` available [here](https://github.com/intoolswetrust/ldap-server/).

The application need to be configured to match this mock ldap system. A future improvement can require less configuration.

### Configuration

`export.sh`

```bash
export LDAP_URL="ldap://localhost:10389/dc=ldap,dc=example"
export LDAP_USER_SEARCH_CATEGORY="person"
export LDAP_GROUPS="LDAP_GROUPS"
export LDAP_GROUP_SEARCH_BASE="ou=Roles"
export LDAP_ROLE_SEARCH_BASE="ou=Roles"
```

Changes to apply to `geostore-spring-security.xml`:

```diff
diff --git a/web/src/main/resources-filtered/WEB-INF/classes/geostore-spring-security.xml b/web/src/main/resources-filtered/WEB-INF/classes/geostore-spring-security.xml
index 2f7169a..535cb0c 100644
--- a/web/src/main/resources-filtered/WEB-INF/classes/geostore-spring-security.xml
+++ b/web/src/main/resources-filtered/WEB-INF/classes/geostore-spring-security.xml
@@ -101,8 +101,8 @@
         <bean id="contextSource" class="org.springframework.security.ldap.DefaultSpringSecurityContextSource">
                 <constructor-arg value="${LDAP_URL}" />
                 <!-- constructor-arg value="" / -->
-                <!-- property name="userDn" value=""/ See externalized properties file -->
-                <!-- property name="password" value=""/ See externalized properties file -->
+                <property name="userDn" value="uid=admin,ou=system"/>
+                <property name="password" value="secret"/>
         </bean>

     <!--
@@ -121,8 +121,8 @@
                                 <property name="userSearch">
                                         <bean id="userSearch"
                                                 class="org.springframework.security.ldap.search.FilterBasedLdapUserSearch">
-                                                <constructor-arg index="0" value="" />
-                                                <constructor-arg index="1" value="(&amp;(objectCategory=${LDAP_USER_SEARCH_CATEGORY})(|#LDAP_GROUPS)(sAMAccountName={0}))" />
+                                                <constructor-arg index="0" value="ou=Users" />
+                                                <constructor-arg index="1" value="(uid={0})" />
                                                 <constructor-arg index="2" ref="contextSource" />
                                         </bean>
                                 </property>
```

*Please remember to revert these changes before committing.*

### Run the application connected to the mock ldap server

To test ldap support:

- download the jar [here](https://github.com/intoolswetrust/ldap-server/releases/download/v.1.0.0/ldap-server.jar)

Run 3 applications in 3 different command line terminals:

- run `java -jar ldap-server.jar` to run the sample ldap server.
- run `source ./export.sh` and then `npm run be:start` in the same command line to run the backend with the ldap profile
- run `npm run fe:start` to run the frontend application locally.

If everything is up and running. You should be able to login as `jduke` with password `theduke`.
