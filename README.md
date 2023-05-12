# Frontend Mentor - Calculator app solution

This is a solution to the
[Calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/calculator-app-9lteq5N29).
Frontend Mentor challenges help you improve your coding skills by building
realistic projects. This calculator was created using Reactjs.

## Table of contents

-   [Overview](#overview)
    -   [The challenge](#the-challenge)
    -   [Screenshot](#screenshot)
    -   [Links](#links)
-   [My process](#my-process)
    -   [Built with](#built-with)
    -   [What I learned](#what-i-learned)
    -   [Continued development](#continued-development)
-   [Author](#author)

## Overview

### The challenge

Users should be able to:

-   See the size of the elements adjust based on their device's screen size
-   Perform mathmatical operations like addition, subtraction, multiplication,
    and division
-   Adjust the color theme based on their preference
-   **Bonus**: Have their initial theme preference checked using
    `prefers-color-scheme` and have any additional changes saved in the browser

### Screenshot

![](./screenshot/screenshot.png)

### Links

-   Solution URL: [github](https://github.com/prolixtrex/calculator)
-   Live Site URL: [netlify](https://bright-calculator.netlify.app)

## My process

### Built with

-   Semantic HTML5 markup
-   CSS custom properties
-   Flexbox
-   CSS Grid
-   Mobile-first workflow
-   [React](https://reactjs.org/) - JS library

### What I learned

Building the project provided more knowledge on some areas which I haven't
thought about or known before. Like formatting the number using locale string,
using css filter: brightness(). Also never knew parseFloat was so handy.

```css filter
.keys .key:active {
    -webkit-filter: brightness(2.5);
    filter: brightness(2.5);
}
```

```js format number to add coma after every 3 digits
const Display = ({ theme, display }) => {
    const num = display.toLocaleString("en-GB");

    return (
        <section className="display" style={theme.screen}>
            <p style={theme.display}>{num}</p>
        </section>
    );
};
```

### Continued development

I will like to work on or learn more about different react hooks, context API
and test driven development.

## Author

-   Frontend Mentor -
    [Bright Anua](https://www.frontendmentor.io/profile/@prolixtrex)
-   Twitter - [Bright Anua](https://www.twitter.com/anua_bright)
