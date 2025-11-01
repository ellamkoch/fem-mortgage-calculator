// js imports
import computeMortgage from './calculatemortgage.js';

// Html selectors
const mainForm =document.getElementById("mortgageForm");
const amountInput = document.getElementById("amount");
const termInput = document.getElementById("years");
const interestInput = document.getElementById("rate");
const clearAllBtn = document.getElementById('clearAll');

//console.log(js); to check for connection

// Result Selectors
const defaultResults = document.querySelector('.main__rightColumn__default');
const actualResults = document.querySelector('.main__rightColumn__results');
const monthlyText = document.getElementById("monthlyResult");
const totalResult = document.getElementById("totalResult");

// event listeners
mainForm.addEventListener('submit', (e) => {
    // prevents default action, aka refresh of screen
    e.preventDefault();
    // testing submit
    //console.log("test submit"); // checks submit

    // getting the values
    const amount = amountInput.value;
    const years= termInput.value;
    const interest = interestInput.value;

    // Calls the validation function
    let isAmountValid = isInputValid(amountInput, 'amount'); // checks to see if the amount is valid.

    if(!isAmountValid.valid) {
        amountInput.parentElement.classList.add('invalid'); // adding a class list

        // shows the error message
        amountInput.parentElement.nextElementSibling.innerText = isAmountValid.message;
        // makes sure the program stops in here. use 'return' keyword to make a function stop.
        return;
    }

    let isTermValid = isInputValid(termInput, 'term'); // checks to see if the term is valid.

        if(!isTermValid.valid) {
            termInput.parentElement.classList.add('invalid'); // adding a class list

            // shows the error message
            termInput.parentElement.nextElementSibling.innerText = isTermValid.message;
            // makes sure the program stops in here. use 'return' keyword to make a function stop.
            return;
        }

        let isInterestValid = isInputValid(interestInput, 'number'); // checks to see if the interest is valid.

                if(!isInterestValid.valid) {
                    interestInput.parentElement.classList.add('invalid'); // adding a class list

                    // shows the error message
                    interestInput.parentElement.nextElementSibling.innerText = isInterestValid.message;
                    // makes sure the program stops in here. use 'return' keyword to make a function stop.
                    return;
                }

    const result = computeMortgage(amount, years, interest);

    console.log(result);

    // makes default result disappear
    defaultResults.style.display = 'none';

// Rounds the # to 2 decimal points
    const monthlyPaymentsR = Math.round(result.monthly * 100) / 100;

    // want to apply results to the actual text inputs
    monthlyText.innerText = `£${monthlyPaymentsR.toFixed(2)}`; // adds the £ sign to the beginning. 
    totalResult.innerText = `£${result.total.toFixed(2)}`; // also rounds to 2 decimal points

    // displays the results container
    actualResults.style.display = 'block';

});

// validation function
function isInputValid(input, type) {
    let value = input.value; // pulls what the user tyuped.

    if (value === "") {// this checks to see if the field is empty
    return   {
        valid: false,
        message: "The field is required",
    };
}   // checks to see if its supposed to be a number
    if (type === "number") {
        let numberValue = Number(value); // changes text to a number
        if (numberValue <= 0) {
            return {
                valid: false,
                message: "Enter a number greater than 0",
            };
        }
    }

    return { // no message if nothing is wrong.
        valid: true,
        message: '',
    };
}

