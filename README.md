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
Webpack is relevant to Sass, because browsers do not run Sass and do not understand what to do with these files. Browsers know what CSS is though, therefore, Webpack is required to transpile and convert Sass into vanilla CSS. To achieve this, various loaders are required and must be installed. These loaders will then then be chained in the `webpack.dev.js` file. Chaining is another Webpack feature that allows multiple loaders to run one after another, like an assembly line, to run through the process of preparing and converting things into the required format. 

### Installation
Install Sass loaders in the Command Line:
```

```

### Configuration

### Test

## Conclusion

### [Back to Top](#webpack-sass)
