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
./export.sh
```

We also added printing profile to the build of the backend, see command `be:start`

then you can simply run `npm start` or in two terminals have so you can better monitor logs of the two script running

- `npm run fe:start`
- `npm run be:start`
