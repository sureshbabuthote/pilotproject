#### Topics

 > [Getting Started](#getting-started-with-upag-app)\
 > [Initial Project Setup](#initial-project-setup)\
 > [Important Package(s) used in the project](#important-packages-used-in-the-project)\
 > [Available Scripts](#available-scripts)\
 > [Folder Strcuture of the project](#folder-structure-of-the-project)\
 > [Learn More](#learn-more)

# Getting Started with UPAG App

This project is built on React and uses CRACO for managing the configuration, Mobx for state management solution and Material UI react library for material design. 


## Initial Project Setup

### `yarn Install`
Installs all the packages mentioned in the package.json without having to install every package individually.

## Important Package(s) used in the project
### `1. CRACO`

CRACO stands for Create-React-App Configuration Override. It is implemented as an easy way to override create-react-app configuration without mastering Webpack or ejecting

### How to install CRACO in Project

Install the latest version of the package from npm as a dev dependency:

```npm i -D @craco/craco```

Create a CRACO configuration file in your project's root directory and configure:

 ```bash
 my-app
  ├── node_modules
+ ├── craco.config.js
  └── package.json
```
Update the existing calls to react-scripts in the scripts section of your package.json to use the craco CLI:

```bash 
"scripts": {
-  "start": "react-scripts start"
+  "start": "craco start"
-  "build": "react-scripts build"
+  "build": "craco build"
-  "test": "react-scripts test"
+  "test": "craco test"
}
```
visit [craco.js.org](https://craco.js.org/) to learn more

### `2. Material UI`

Material UI is an open-source React component library that implements Google's Material Design. It includes a comprehensive collection of prebuilt components that are ready for use in production right out of the box.

### How to install Material UI in Project

```bash
npm install @mui/material @mui/styled-engine-sc styled-components
                               or 
yarn add @mui/material @mui/styled-engine-sc styled-components 
 ```
 
 visit [documentation](https://mui.com/material-ui/getting-started/installation/) to learn more
 
### Theme customization configurations

If you wish to customize the theme, you need to use the ThemeProvider component in order to inject a theme into your application.

```bash
import { createTheme } from '@mui/material/styles';
import { green, purple } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: green[500],
    },
  },
});
```
 visit [documentation](https://mui.com/material-ui/customization/theming/) to learn more

### `3. fernet`

Fernet is an implementation of symmetric (also known as “secret key”) authenticated cryptography. Fernet guarantees that a message encrypted using it cannot be manipulated or read without the key. 

### How to install fernet in Project

```bash
npm i fernet
```
### Usage

Token.prototype.encode
```bash
//Have to include time and iv to make it deterministic.
//Normally time would default to (new Date()) and iv to something random.
var token = new fernet.Token({
  secret: secret,
  time: Date.parse(1),
  iv: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
})
token.encode("Message")
```

Token.prototype.decode

```bash
var token = new fernet.Token({
  secret: secret,
  token: 'gAAAAABSO_yhAAECAwQFBgcICQoLDA0OD1PGoFV6wgWZG6AOBfQqevwJT2qKtCZ0EjKy1_TvyxTseR_3ebIF6Ph-xa2QT_tEvg==',
  ttl: 0
})
token.decode();
```



visit [documentation](https://www.npmjs.com/package/fernet) to learn more

### `4. i18next`

i18next is a popular internationalization library which uses components to render or re-render the translated content of your application once users request a change of language. It provides you with a complete solution to localize your product from web to mobile and desktop.

### How to install i18next in Project

```bash
npm install react-i18next i18next --save

```

configuration settings 

```bash
i18next.init({
  fallbackLng: 'en',
  ns: ['file1', 'file2'],
  defaultNS: 'file1',
  debug: true
}, (err, t) => {
  if (err) return console.log('something went wrong loading', err);
  t('key'); // -> same as i18next.t
});

// with only callback
i18next.init((err, t) => {
  if (err) return console.log('something went wrong loading', err);
  t('key'); // -> same as i18next.t
});

// using Promises
i18next
  .init({ /* options */ })
  .then(function(t) { t('key'); });
```

visit [documentation](https://react.i18next.com/) to learn more

### `5. jwt-decode`
jwt-decode is a small browser library that helps decoding JWTs token which are Base64Url encoded.

### How to install jwt-decode in Project

```bash 
npm i jwt-decode


import jwt_decode from "jwt-decode";
 
var token = "eyJ0eXAiO.../// jwt token";
var decoded = jwt_decode(token);
```
visit [documentation](https://jwt.io/) to learn more

### `6. lodash`

Lodash makes JavaScript easier by taking the hassle out of working with arrays, numbers, objects, strings, etc.
Lodash’s modular methods are great for:

Iterating arrays, objects, & strings
Manipulating & testing values
Creating composite functions

### How to install lodash in Project

```bash
$ npm i -g npm
$ npm i --save lodash
```

visit [documentation](https://lodash.com/docs/4.17.15) to learn more

### `7. mobx`

MobX is a simple, scalable, boilerplate-free state management solution. It allows you to manage application state outside of any UI framework, making the code decoupled, portable and, above all, easy to test. It implements observable values, which are essentially using the publish/subscribe pattern

### How to install mobx in project

```bash
Yarn: yarn add mobx

NPM: npm install --save mobx
```

React Integration:

```bash
import { observer } from "mobx-react-lite" // Or "mobx-react".

const MyComponent = observer(props => ReactElement)
```


visit [documentation](https://mobx.js.org/about-this-documentation.html) to learn more

### `8. tailwindcss`

Tailwind CSS makes it quicker to write and maintain the code of your application. By using this utility-first framework, you don't have to write custom CSS to style your application. Instead, you can use utility classes to control the padding, margin, color, font, shadow, and more of your application.


### How to install Tailwind in Project

1. Install Tailwind CSS by using following command
```bash
> npm install -D tailwindcss
> npx tailwindcss init
> And create new file as tailwind.config.js file.
```
2. configure your template paths inside tailwind.config.js file like as

```bash
module.exports = {
content: ["./src/**/*.{html,js}"],
theme: {
extend: {},
},
plugins: [],
}
```
3. Add the Tailwind directives to your CSS inside your project in main css file
```bash
@tailwind base;
@tailwind components;
@tailwind utilities;
```

visit [documentation](https://tailwindcss.com/docs/installation) to learn more 

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:9000](http://localhost:9000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


# Folder Structure of the project

### The UPAg App has the following structure:

The following folders, files appear in the src folder which is the root of project

```bash
src/
  assets
  components
  constants
  context
  environment
  features
  hoc
  hooks
  layouts
  pages
  routes
  services
  stores
  translations
  utils
  colors.js
  index.js
  theme.js
```

| Folder  | Description |
| ------------- | ------------- |
| assets  | in this folder we are storing svg images in svg folder and using in our entire project.  |
| components  | in this folder we are creating all re-usable compoents for our project so that we can re-use that component anywhere inside our project. like as inputbox,combobox,dropdown,table,button,icon,images,divider,anchor...etc. if you want to share the business logic in entire project then we are using components. | 
| constants| this folder consists of re-usable constants for tailwind css , or dynamic constants for routing Url. |
| context | this folder consists of store setup configurations of the project |
| environment | in this folder we are mentioning base url of api or capcha site key or secret key. |
| features | in this folder we are creating re-usable components or designing template for pages ``` For Example: signIn, forgot password, forgot user id,  profile, notification, reminder, home, aboutus, contactus, submissions...etc. ```|
| hoc | higher order components are maintained in this folder ```For Example: Confirm Pop-up ``` |
| hooks | react hooks that we are using in the project are maintained here globally ```For Eample: useComponentDidMount, redirects, store factory etc.``` |
| layouts | in this folder we are creating re-usable components for app level structuring ``` For example:  app layout, sidebar, navigation bar ...etc.``` |
| pages | in this folder we maintain the parent components of application and where in we are calling the child/sub components which we call here as "features" inside this page files. ```for example: forgotpassword, forgotuserid, signIn ..etc.``` |
| routes | in this folder we are including all routes of project. |
| services | All the API services, endpoints for pages of the project are maintained in this folder globally. ```For Example: API Services, application end points``` | 
| stores | project level store information is globally maintained in this folder. ```For Example: Store management activities``` | 
| translations | in this folder we are including all text description in this file including en.json file ```For Example input label or input placeholder , label , description , title , link text , button text ..etc.``` |
| utils | project level utilities are globally maintained here. ```For Example: String Utils, Form validations``` |
| colors.js | project level color codes are globally maintained here. ```For Example: default, primary, secondary color codes``` |
| index.js | This is the main project template where configuration for the theme, store, routing is done |
| theme.js | project level theme  configurations are  globally maintained here. ```For Example: theme colors, font size, font family``` |

### Few reusable components from /components folder :

| Folder  | Description |
| ------------- | ------------- |
| Anchor | inside anchor file we are creating link related title, means title with underlined text. |
| Avatar | inside this file we are creating re-usable component for user-profile photo. means after login we are looking some images of user like that we are creating re-usable component. |
| Button | inside this file we are creating re-usable component for all varient types of button like as simple button , circle button , file uploading button , icon button ...etc |
| Capcha | in this file we are creating re-usable components for google capcha for SignIn , Forgot User Id , Forgot Password ...etc. |
| Cards | in this folder we are creating re-usable component for white background card. |
| Checkbox | in this folder we are creating re-usable components for checkbox so that we can use this checkbox inside our project. |
| Divider | in this file or folder we are creating re-usable components for divider icon so that we can divide or section b/w to button. |
| Dropdown | in this file or folder we are creating re-usable components for combobox so that we can use entire project. |
| Icon | in this file or folder we are creating re-usable components for icon. |
| Images | in this file or folder we are creating re-usable components for images, so we can use in entire project. |
| Input | in this file or folder we are creating re-usable components for input box so that we can use in our whole project where the input box is required. |
| Menu | in this file or folder we are creating re-usable components for menu's for our project like as horizontal or vertical menu. |
| Typography| in this file or folder we are creating re-usable components for pageTitle , Description of images, sub-title for tables, labels,card labels ...etc. |



## Learn More

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)


### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

