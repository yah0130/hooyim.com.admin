<p align="center">
  <a href="https://github.com/angular/angular" target="blank">
    <img src="https://angular.io/assets/images/logos/angular/angular.svg" height="90" alt="Angular Logo" />
  </a>
  <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
  <a href="https://github.com/yah0130/hooyim.com.admin" target="blank">
    <img src="https://raw.githubusercontent.com/yah0130/hooyim.com.admin/master/src/assets/images/profile/logo.png" height="90" alt="nodepress Logo" />
  </a>
</p>

# Hooyim.com Admin

[![nodepress](https://img.shields.io/badge/NODE-PRESS-83BA2F?style=for-the-badge&labelColor=90C53F)](https://github.com/yah0130/hooyim.com.admin)
[![GitHub stars](https://img.shields.io/github/stars/yah0130/hooyim.com.admin.svg?style=for-the-badge)](https://github.com/yah0130/hooyim.com.admin/stargazers)
[![GitHub issues](https://img.shields.io/github/issues-raw/yah0130/hooyim.com.admin.svg?style=for-the-badge)](https://github.com/yah0130/hooyim.com.admin/issues)
[![GitHub license](https://img.shields.io/github/license/yah0130/hooyim.com.admin.svg?style=for-the-badge)](https://github.com/yah0130/hooyim.com.admin/blob/master/LICENSE)

**Admin client for [surmon.me](https://github.com/yah0130/surmon.me) blog, powered by [Angular](https://github.com/angular/angular) and [Bootstrap4](https://github.com/twbs/bootstrap).** 

**适用于 [www.hooyim.com](https://github.com/yah0130/hooyim.com) 管理员后台的前端应用，使用 [Angular](https://github.com/angular/angular) 和 [Bootstrap4](https://github.com/twbs/bootstrap) 进行开发。** 

The project forked from [ng2-admin](https://akveo.github.io/ng2-admin/). 项目原始来自 [ng2-admin](https://akveo.github.io/ng2-admin/)。

## Screenshot

![](https://raw.githubusercontent.com/yah0130/hooyim.com.admin/master/screenshots/dashboard-dark.png)


## Development setup

```bash
# install dependencies
npm ci

# serve with hot reload at localhost:4200 
npm run dev

# lint
npm run lint

# test
npm run test
npm run e2e

# build
npm run build
```

## Actions setup

**Rule:**
- `any PR open` -> `CI:Build test`
- `master PR close & merged` -> `CI:Deploy to server`

**Example:**
- `local:develop -> remote:develop` -> `CI:Build test`
- `remote:develop/master -> remote:master -> merged` -> `CI:Deploy to server`
