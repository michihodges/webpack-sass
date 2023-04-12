# Webpack Sass
A walkthrough for setting up Sass with Webpack.

## Table of Contents
1. [Introduction](#Introduction)
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

## Ampersand

## Webpack and Sass

## Conclusion

### [Back to Top](#webpack-sass)
