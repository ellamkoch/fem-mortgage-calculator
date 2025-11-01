# Frontend Mentor - Mortgage repayment calculator solution

This is a solution to the [Mortgage repayment calculator challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/mortgage-repayment-calculator-Galx1LXK73). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)



## Overview

### The challenge

Users should be able to:

- Input mortgage information and see monthly repayment and total repayment amounts after submitting the form
- See form validation messages if any field is incomplete
- Complete the form only using their keyboard
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](./screenshots/desktop%20screenshot.png)
![](./screenshots/desktop%20screenshot.png)


### Links

- Solution URL: [](https://github.com/ellamkoch/fem-mortgage-calculator)
- Live Site URL: [](https://ellamkoch.github.io/fem-mortgage-calculator/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties and utilities and variable files
- Flexbox
- Mobile-first workflow
- Multiple js scripts to do computations and validity
  - `calculatemortgage.js` → pure function that returns `{ monthly, total }`
  - `main.js` → DOM events, validation, and UI updates

### What I learned

This week focused on bringing HTML and CSS together with JavaScript to create an interactive calculator.  As part of doing this challenge, I followed along with many of the videos and during the class sessions where Ulises walked us through how he would go about designing this for mobile.

We built the html page first, then styled, then did some of the javascript which does the mortgage calculations for the page in the background.

After watching the videos, and ensuring most of the complete code was similar to Ulises repo on GitHub, I tried to compare the design images with what was in my live server display and adjusted it from what Ulises had originally to my own in areas where I thought it could be improved upon or wasn't quite close. Like the font size in the inputs, and the color of the labels for years, %, etc. There were portions of the page, like the spans that I commented out the styles and adjusted them by targeting them closer, which allowed me to have more control over those areas I just mentioned, and the radio selection area for Repayment and Interest.

I did have to do some googling to find a way to override my system colors on the radio with the colors that were shown in the completed mobile design.

Came back to finish up the validation and desktop styles. Had issues figuring out how to get the mortgage term and interest side by side in the desktop. Realized after looking at the code a bit that the code wasn't fully complete and I had to concatonate the validation function for the other fields and found a way to make the validation work on the radio buttons. This one was definitely a learning experience. I had the desktop version working for the terms and % being side by side, but then realized the mobile wasn't working properly. I fixed the mobile, and then broke the desktop again... so I'll figure it out eventually.

Key learnings:
- More about how to select elements and dynamically update text content using `document.querySelector()` and `.textContent`.
- How to import functions between files using `export default` and `import`.
- How to toggle visibility of sections using `.style.display`.
- How to use custom validation and styling states (`.invalid`) to guide user feedback.
- Learned how "em" is used for width, height and border width control to help with appearance of the radio buttons. -
- Transform can help to improve alignment of radio buttons with text.
- How to set accent colors in CSS
- Simple, beginner-friendly validation:
  - custom `.invalid` state on the `.input` wrapper
  - consistent “This field is required” messages
  - all errors surfaced together by using a `hasError` flag (instead of returning on the first error)
- Styling the £ / years / % chips to change with invalid state:
  - `.input.invalid .input__prefix` and `.input.invalid .input__suffix`
- Mobile input layout fix:
  - make the text input flex between prefix and suffix
    `flex: 1 1 auto; width: auto; min-width: 0;`
- Custom radio styling (accent color, ring, and checked state) using only CSS
-1st time doing mobile first styling and then going to desktop


#### Code snippets I'm proud of:

```css
.choice__item input[type="radio"] {
  appearance: none;
  width: 1.4rem;
  height: 1.4rem;
  border: 2px solid var(--color-slate-500);
  border-radius: 50%;
  position: relative;
}

.choice__item input[type="radio"]:checked {
  border-color: var(--color-primary);
  background: radial-gradient(circle at center, var(--color-primary) 50%, transparent 51%);
}
```

/* Show the chips as invalid together with the input */
.input.invalid .input__prefix,
.input.invalid .input__suffix {
  background-color: var(--color-secondary);
  color: #fff;
  border-radius: 0;
}

// Show all field errors at once (simple flag pattern)
let hasError = false;
if (!isAmountValid.valid) { markInvalid(amountInput, isAmountValid.message); hasError = true; }
if (!isTermValid.valid)   { markInvalid(termInput,   isTermValid.message);   hasError = true; }
if (!isInterestValid.valid){markInvalid(interestInput,isInterestValid.message);hasError = true; }
if (!pickedRadio) { radioErrorEl.textContent = 'This field is required'; hasError = true; }
if (hasError) return;
### Continued development  - Update this more later

When this project is revisited, the next steps will include:
-Figure out how to make fields that are in a column in the mobile version can be side by side and in a row within the desktop version. 

### Useful resources

- CodeX Academy Weekly Lectures – helped connect front-end structure to JavaScript logic.
- MDN: Form Validation Guide – understanding .preventDefault() and custom validation.
- Frontend Mentor Community Discussions – for comparing responsive approaches and styles.
- Modern CSS for learning about styling radio buttons and how to use "em" - https://moderncss.dev/pure-css-custom-styled-radio-buttons/
- Stackflow forum for setting accent colors - https://stackoverflow.com/questions/4253920/how-do-i-change-the-color-of-radio-buttons
- MDN for styling the radio buttons with gradients - https://developer.mozilla.org/en-US/docs/Web/CSS/gradient/radial-gradient

## Author

- Ella Koch
- Frontend Mentor - [@ellamkoch](https://www.frontendmentor.io/profile/ellamkoch)

## Acknowledgments

Thanks to Ulises (CodeX instructor) for the example code and step-by-step approach, and to Frontend Mentor for providing the base challenge files.
