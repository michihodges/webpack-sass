# Webpack Sass
A walkthrough for setting up Sass with Webpack.

## Table of Contents
1. [Introduction](#introduction)
2. [Nesting](#nesting)
3. [Variables](#variables)
4. [Ampersand](#ampersand)
5. [Webpack and Sass](#webpack-and-sass)
6. [Conclusion](#conclusion)

## Introduction
Sass is a CSS extension language, meaning, it has extra syntax that makes writing code easier and is more efficient. There are many reasons for using Sass, this repository will cover a handful of key features that include, nesting, variables, the ampersand and the implementation of Sass with Webpack.

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
npm i --legacy-peer-deps dotenv@8.2.0 jest-fetch-mock@3.0.3
```
Install the following devDependecies in the Command Line:
```
npm i -D --legacy-peer-deps css-loader@5.2.1 jest@26.6.3 mini-css-extract-plugin@1.4.1 node-fetch@2.6.1 node-sass@5.0.0 optimize-css-assets-webpack-plugin@5.0.4 sass@1.32.8 sass-loader@10.1.1 style-loader@2.0.0 terser-webpack-plugin@5.1.1 workbox-webpack-plugin@6.1.5
```

### Configuration
Add the following to webpack.dev.js rules:
```js
{
        test: /\.scss$/,
        use: [ 'style-loader', 'css-loader', 'sass-loader' ]
}
```

### Test

## Conclusion

### [Back to Top](#webpack-sass)
