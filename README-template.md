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

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- Input mortgage information and see monthly repayment and total repayment amounts after submitting the form
- See form validation messages if any field is incomplete
- Complete the form only using their keyboard
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](./screenshot.jpg)

Add a screenshot of your solution. The easiest way to do this is to use Firefox to view your project, right-click the page and select "Take a Screenshot". You can choose either a full-height screenshot or a cropped one based on how long the page is. If it's very long, it might be best to crop it.

Alternatively, you can use a tool like [FireShot](https://getfireshot.com/) to take the screenshot. FireShot has a free option, so you don't need to purchase it.

Then crop/optimize/edit your image however you like, add it to your project, and update the file path in the image above.

**Note: Delete this note and the paragraphs above when you add your screenshot. If you prefer not to add a screenshot, feel free to remove this entire section.**

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties and utilities and variable files
- Flexbox
- Mobile-first workflow
- Multiple js scripts to do computations and validity

### What I learned

This week focused on bringing HTML and CSS together with JavaScript to create an interactive calculator.  As part of doing this challenge, I followed along with many of the videos and during the class sessions where Ulises walked us through how he would go about designing this for mobile.

We built the html page first, then styled, then did some of the javascript which does the mortgage calculations for the page in the background.

After watching the videos, and ensuring most of the complete code was similar to Ulises repo on GitHub, I tried to compare the design images with what was in my live server display and adjusted it from what Ulises had originally to my own in areas where I thought it could be improved upon or wasn't quite close. Like the font size in the inputs, and the color of the labels for years, %, etc. There were portions of the page, like the spans that I commented out the styles and adjusted them by targeting them closer, which allowed me to have more control over those areas I just mentioned, and the radio selection area for Repayment and Interest.

I did have to do some googling to find a way to override my system colors on the radio with the colors that were shown in the completed mobile design.

Key learnings:
- More about how to select elements and dynamically update text content using `document.querySelector()` and `.textContent`.
- How to import functions between files using `export default` and `import`.
- How to toggle visibility of sections using `.style.display`.
- How to use custom validation and styling states (`.invalid`) to guide user feedback.
- Learned how "em" is used for width, height and border width control to help with appearance of the radio buttons. -
- Transform can help to improve alignment of radio buttons with text.
- How to set accent colors in CSS

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

### Continued development  - Update this more later

When this project is revisited, the next steps will include:
- Full validation for all fields (term and interest rate)
- Adding functionality for “Interest Only” mortgages
- Enabling the “Clear All” link to reset the form and results, similar to how a button would
- Improved error visuals for each invalid input
- Optional formatting of inputs (e.g., commas, £ symbol on keypress)

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
