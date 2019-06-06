# Project structure for REST API - Node.js

Checkout this repository to have production level ready architecture for small to medium application

# Installation

Use npm to install all packages.

```bash
npm install
```

Install eslint globally to maintain code consistency and readability

```bash
npm install -g eslint
```

# Project Architecture

Here is the folder strucure :

```bash
├───app
│   ├───api
│   │   └───movies
│   ├───assest
│   ├───auth
│   ├───environment
│   ├───middlewares
│   └───utils
└───logs
```


logs folder is used to file log.

App folder have subfolders 

```bash
├───api
│   └───movies
├───assest
├───auth
├───environment
├───middlewares
└───utils
```
in api folder there will be folder for every feature of system.In every feature folder,there will be three files

```bash
1. index.js
2. service.js
3. controller.js
```

To get complete idea for this three file chekout movie folder in app/api folder

`assest` folder is to put files that required in system like resource files.In this project,I have used firestore,so put generated .json file from firestore in this folder.

`auth` folder is to implement authentication.One can use JWT authentication,passport.js

`environment` folder have json files for different environment like development,production,staging.All the configuration for different environment are written in respective environment .json file.

To load particular environment, I have used convict module.Chekout convict here : [convict](https://www.npmjs.com/package/convict)

config.js file have configuration for project.I have used convict in this file.

`middlewares` folder is for creating your own middleware.

`utils` folder is for utilities.you can find logger.js in utils folder.
I have used winston and morgan for logging request and exception.File to make connection with firestore is in util folder.

## Contributing
Pull requests are welcome