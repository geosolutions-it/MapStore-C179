---
name: Release
about: Release template for test or production
title: ''
labels: 'C179-PUBLIACQUA-2022-SUPPORT, MapStore, Task'
assignees: ''
---

## Description
<!-- Add here a few sentences describing the release -->
Deploy of the updated downstream project in

- [ ] Test **v1.Y.Z-test**
- [ ] Production **v1.Y.Z**

## Release checklist

For Test

- [ ] make sure that PR that updates project to **v1.Y.Z-test** version is merged in **master** branch
- [ ] make sure to have version.txt aligned to **v1.Y.Z-test**
- [ ] make sure to have package.json version aligned to **v1.Y.Z**
- [ ] send email to the client to say you are starting deployment
- [ ] Once the build/deploy completed succesfully, verify here <http://XXX/mapstore2/#/> that deploy of latest version is done properly (in settings panel)
- [ ] send email to the client to say you have completed deploy procedure in test
- [ ] when test run (in case of major) and tests of iteration issues are both ok (@ElenaGallo)
- [ ] check if the tag exists in the github repo, if not create it and push it
  - [ ] git tag **v1.Y.Z-test**
  - [ ] git push origin **v1.Y.Z-test**
- [ ] create a new release in github by assigning this tag
- [ ] update the release with `.war` file

For Production

- [ ] make sure that PR that updates project to **v1.Y.Z** version is merged in **production** branch
- [ ] makes sure to have version.txt and package.json version aligned to **v1.Y.Z**
- [ ] check that revision is updated correctly ( **git submodule update** from the root)
- [ ] send email to the client to say you are starting deployment
- [ ] Once the build/deploy completed succesfully, verify here <http://XXX/mapstore2/#/> that deploy of latest version is done properly (in settings panel)
- [ ] send email to the client to say you have completed deploy procedure in production
- [ ] when test run (in case of major) and tests of iteration issues are both ok (@ElenaGallo)
- [ ] check if the tag exists in the github repo, if not create it and push it
  - [ ] git tag **v1.Y.Z**
  - [ ] git push origin **v1.Y.Z**
- [ ] create a new release in github by assigning this tag
- [ ] update the release with `.war` file
