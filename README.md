# 01 Drum Kit: 31 Dec 2020

**Goal: build with modern REACT with HOOKS. Use cssinjs (JSS) for styles**
react, with hooks
JSS - can use template strings to write actual CSS!! Will do this

- used usedEffect [] with return to set 'app styles' on render. this is in place of traditional html and body styles
- used 'new Audio' for first time

## next day review/refactor

- new bg, tinker a little with styles

# 02 Clock: 01 Jan 2021

React
JSS - using template strings! new thing: passing some styles to children

- in CSS: the "rem" unit (ie root em) is used to set dims based on the root elements font size. The root element is usually <html>. This helps to keep everything consistent.
- in CSS: The box-sizing property allows us to include the padding and border in an element's total width and height. boxSizing: 'border-box'

? best way to do code checking/linting for JSS -> using css template strings?
? how to pass props to template sting stylea?

TODOs
[] hour labels on clock (clockface border)
[x] different color or length hands
[x] bug: when seconds hand gets to 90deg it flickers. why? (probably bezier transition func jump)

## next day review

- definitely use styled-components in place of react-jss
  [] BUT need to learn how to pass props (todo: in HourMark component)
  [] work out how to stop the hour marks stop rerendering

# 03 CSS Variables. 02 Jan 2021

this will be interesting to port to react. I will treat it as a styled-copoments exercise

used react state hooks.

Learned

- document.documentElement accesses the :root. can update css vars here
- styled-components has a global style method for the root
- #fff8e7; cosmic latte. but i like TimGold #E1b01d on a #193549 bg

```
const GlobalStyle = createGlobalStyle`
  :root {
    --base: #E1b01d; /* #fff8e7;  cosmic latte */
    --blur: 3px;
    --spacing: 10px;
  }
`
```

# 04 Array Methods

filter, map, sort, reduce

# 05 Flex gallery

starting to get into the weeds with styled-components. Using useState hook to track local 'isActive state. use transition delay prop(type duration delay) to stagger transitions

# 08 HTML5 Canvas

when you use the useEffect hook to set eventListeners on render, they only have a snapshot of state at render.
Must use useRef hook to give the listener handle functions access to the current state.
"Click ad drag functionality"

# 10

Array.prototype.indexOf.call(nodelist, el)
useRef hook again in eventlistener that is set on initial render

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
