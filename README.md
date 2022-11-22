# Getting Started with UPAg App

This project is built on React and uses CRACO for managing the configuration, Mobx for state management solution and Material UI react library for material design. 

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


# How to integrate Tailwind in Project

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

