## Environment Setup for Engineering Course

### Overview

All installation packages you can found at [\\CUIJA-W10\Installations\ITA](\\CUIJA-W10\Installations\ITA)

If you have not install correct required environment, it's recommend to follow this environment setup guide.


### Table of Content

**Mandatory Installation & Settings**
- Node.js


**Optional Installation & Settings** (For better network settings in mainland china / better development experience)
- VSCode 
- Yarn


**Personal Suggestion**
- Node.js with NPM 5.X
- IntelliJ IDEA
- Yarn with mainland china registry
- Cmder for better windows terminal ui



### Installation Guide

#### Node.js

1. Installation

installation file location: \\CUIJA-W10\Installations\ITA\software-installations\node-v6.xxxxx.msi

double-click , next , next ....

2. Install Validation

open terminal;

type `node -v && npm -v`

will show node.js version 6.x and npm version 3.x

#### VSCode

1. Installation

installation file location: \\CUIJA-W10\Installations\ITA\software-installations\VSCodeSetup-x64.xxxxx.exe


#### Yarn 

Optional Settings for yarn 

**Benefits**
- Faster in mainland China
- Better performance with NPM

1. Installation

installation file location: \\CUIJA-W10\Installations\ITA\software-installations\yarn-0.27.5.msi

2. Install Validation

open terminal;

type `yarn --version`

will show yarn version 0.27.5

3. Update yarn registry from `yarnpkg.com` to `npm.taobao.org`

open terminal;

type `yarn config set registry https://registry.npm.taobao.org`

then 

type `yarn config list`

will show ` registry: 'https://registry.npm.taobao.org',` in output.






