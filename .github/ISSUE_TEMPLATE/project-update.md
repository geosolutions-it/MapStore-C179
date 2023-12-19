---
name: Project Update
about: Template for updating the project
title: ''
labels: 'C179-PUBLIACQUA-2022-SUPPORT, MapStore, Task'
assignees: 'tdipisa'
---

## Description

The MapStore revision need to be updated to the stable branch **YYYY.XX.xx**

### Checks

It is necessary to check if the existing customizations are properly working after the project update. Custom or client's specific extensions are the following **that will be checked during the PR review**:

- [X] None


### Notes

Remember to update the project following [migration guidelines](https://mapstore.readthedocs.io/en/latest/developer-guide/mapstore-migration-guide/)

In particular in the **master** branch

- [ ] update version in package.json to be aligned to the new release version (e.g. v1.3.0 with -test)
- [ ] update version present in version.txt accordingly