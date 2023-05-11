# Webpack Sass
A walkthrough for setting up Sass with Webpack.

## Table of Contents
1. [Introduction](#introduction)
2. [Nesting](#nesting)
3. [Variables](#variables)
4. [Ampersand](#ampersand)
5. [Webpack and Sass](#webpack-and-sass)
6. [Implementation](#implementation)
7. [Review](#review)

## Introduction
Sass is a CSS extension language, meaning, it has extra syntax that makes writing code easier and is more efficient. There are many reasons for using Sass. This repository will cover a handful of key features that include, nesting, variables, the ampersand and the implementation of Sass with Webpack.

## Nesting
HTML elements are nested and by nature so is CSS. When CSS is implemented properly with HTML, styles should not be added at the top of the file, but rather the elements can themselves be styled or classes and ids can be added within the element tags and styled. However, this is not reflected in CSS syntax when coding and styling within the CSS stylesheet. Below is an example of how nesting works with Sass:
```css
nav {
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  li { display: inline-block; }

  a {
    display: block;
    padding: 6px 12px;
    text-decoration: none;
  }
}
```
And here is what the browser friendly transpiled vanilla (plain) CSS looks like:
```css
nav ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
nav li {
  display: inline-block;
}
nav a {
  display: block;
  padding: 6px 12px;
  text-decoration: none;
}
```
With vanilla CSS, every element inside of the `nav` element needs to refernce `nav` before referencing the intended elements `ul`, `li`, or `a` that requires styling. With Sass, everything can be neatly nested inside each other, saving a developer time and adding more clarity.

## Variables
Another feature is the use of variables. Although they are also available in vanilla CSS, using variables when theming makes far more flexible and understandable styles. For instance, if the `font-stack` and `primary-color` variables need changing below, only the variables require changing instead of each and every style:
```css
$font-stack: Helvetica, sans-serif;
$primary-color: #333;

body {
  font: 100% $font-stack;
  color: $primary-color;
}
```
The transpiled CSS in the browser would look like this:
```css
body {
  font: 100% Helvetica, sans-serif;
  color: #333;
}
```

## Ampersand
The ampersand is a simple yet effective feature that allows styling to more than one seletor selector on the same element. At first this may seem somewhat underwhelming, but when used with pseudo elements, such as, `:hover`, `:visited` or animations, they can all be conveniently nested and the ampersand saves writing repetitive code: Below is an example of how the ampersand is implemented with Sass:
```scss
button.cta {
  border-radius: 3px;
  background: teal;
  color: white;

  &:hover {
    background: aqua;
  }

  &:visited {
    background: fuchsia;
  }
}
```
Vanilla CSS would look like this:
```css
button.cta {
  border-radius: 3px;
  background: teal;
  color: white;
}

button.cta:hover {
  background: aqua;
}

button.cta:visited {
  background: fuchsia;
}
```

## Webpack and Sass
### Inroduction
Without Webpack, Sass would not work, because the browser does not understand Sass and only understands vanilla CSS. For Sass to work with Webpack, loaders and other packages are required to be installed. These loaders and other packages transpile (convert) Sass SCSS files into plain CSS files. More than one loader is needed and are chained in order to get the intended file format. Chaining is a useful concept that allows Webpack to practically build an assembly line that works through a loader stack chronologically until the necessary result is achieved. In this case, Sass is converted into CSS and then styled. Note that the chained stack runs from right to left.

### Installation
Install the following dependecies in the Command Line:
```
npm i --legacy-peer-deps dotenv@8.2.0
npm i --legacy-peer-deps jest-fetch-mock@3.0.3
```
Install the following devDependecies in the Command Line:
```
npm i -D --legacy-peer-deps css-loader@5.2.1
npm i -D --legacy-peer-deps jest@26.6.3
npm i -D --legacy-peer-deps mini-css-extract-plugin@1.4.1
npm i -D --legacy-peer-deps node-fetch@2.6.1
npm i -D --legacy-peer-deps optimize-css-assets-webpack-plugin@5.0.4
npm i -D --legacy-peer-deps sass@1.32.8
npm i -D --legacy-peer-deps sass-loader@10.1.1
npm i -D --legacy-peer-deps style-loader@2.0.0
npm i -D --legacy-peer-deps terser-webpack-plugin@5.1.1
npm i -D --legacy-peer-deps workbox-webpack-plugin@6.1.5
```
Force install node-sass@5.0.0 in the devDependencies in the Command Line:
```
npm i -D --legacy-peer-deps --force node-sass@5.0.0
```

### Configuration
#### webpack.dev.js
Add the following to the rules object:
```js
{
        test: /\.scss$/,
        use: [ 'style-loader', 'css-loader', 'sass-loader' ]
}
```
#### src/client/index.js
Import scss files:
```
import './styles/resets.scss'
import './styles/base.scss'
import './styles/footer.scss'
import './styles/form.scss'
import './styles/header.scss'
```

### Test
Run development mode in the Command Line:
```
npm run build-dev
```
The result should be an unstyled webpage with the alert message `I exist!`. Once `OK` is clicked there should be a basic styled layout confirming that the Sass configuration with Webpack is working.

## Implementation
The files in the `src/client/styles` folder are already `.scss` files. Technically, due to Sass being CSS, CSS code is valid Sass code and no further adjustments are *required*. Nonetheless, since Sass is set up, it would be an opportune moment to refactor and optimize the styles. Below is the code for all the styling files, where plain CSS has been replaced with Sass and a short explanation of what has been changed in line with what has been touched upon above:

### base.scss
CSS:
```css
body {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}

main {
    flex: 2;
}

section {
    max-width: 800px;
    margin: 50px auto;
}
```
Sass:
```scss
body {
    display: flex;
    flex-direction: column;
    min-height: 100vh;

    main {
        flex: 2;

        section {
          max-width: 800px;
          margin: 50px auto;
      }
    }
}
```
`main` is now nested inside `body` and `section` inside `main`.

### footer.scss
This is an empty file and nothing has been changed in this file. Nonetheless, it is important to note that it must be an SCSS file in order for Webpack to transpile it into plain CSS, build and distribute.

### form.scss
CSS:
```css
form {
    border: 1px solid #545454;
    border-radius: 3px;
    padding: 40px;
}

input {
    padding: 5px 20px;
    width: 100%;
    line-height: 16px;
    margin: 10px 0;
}
```
Sass:
```scss
$form-border: 1px solid #545454;

form {
    border: $form-border;
    border-radius: 3px;
    padding: 40px;

    input {
        padding: 5px 20px;
        width: 100%;
        line-height: 16px;
        margin: 10px 0;
    }
}
```
The `border` property value inside the `form` rule has been delegated to the `$form-border` variable and `input` is now nested inside of `form`.

### header.scss
CSS:
```css
header {
    display: flex;
    justify-content: space-between;
    padding: 10px 40px;
}
```
Sass:
```scss
$header-padding: 10px 40px;

header {
    display: flex;
    justify-content: space-between;
    padding: $header-padding;
}
```
The `padding` property value inside the `header` rule has been delegated to the `$header-padding` variable.

### resets.scss
CSS:
```css
/* http://meyerweb.com/eric/tools/css/reset/
   v2.0 | 20110126
   License: none (public domain)
*/

* {
    box-sizing: border-box;
}

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
ul {
    list-style-type: none;
}
```
Sass:
```scss
/* http://meyerweb.com/eric/tools/css/reset/
   v2.0 | 20110126
   License: none (public domain)
*/

* {
  box-sizing: border-box;
}

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}

/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
  display: block;
}

body {
  line-height: 1;

  ol, ul {
    list-style: none;
  }

  blockquote, q {
    quotes: none;
    
    &:before, &:after {
      content: '';
      content: none;
    }
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  ul {
    list-style-type: none;
  }
}
```
resets.scss contains code from somebody else. Personally, I would not touch reset code, because it is not something I would be changing and altering with any given project. Nevertheless, in order to get some practice with the ampersand, everything after the comment section for older browsers that can be nested inside of the `body` rule has been done so and pseudo elements for `blockquote` and `q` have been nested respectively which includes the use of the ampersand.

## Review

### [Back to Top](#webpack-sass)
