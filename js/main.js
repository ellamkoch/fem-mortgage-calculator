// js imports
import computeMortgage from './calculatemortgage.js';

// Html selectors
const mainForm =document.getElementById("mortgageForm");
const amountInput = document.getElementById("amount");
const termInput = document.getElementById("years");
const interestInput = document.getElementById("rate");

//console.log(js);

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
    let isAmountValid = isInputValid(amount, 'amount');

    if(!isAmountValid.valid) {
        amountInput.parentElement.classList.add('invalid'); // adding a class list

        // shows the eror message
        amountInput.parentElement.nextElementSibling.innerText = isAmountValid.message;
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
    monthlyText.innerText = monthlyPaymentsR;
    totalResult.innerText = result.total.toFixed(2); // also rounds to 2 decimal points

    // displays the results container
    actualResults.style.display = 'block';

});

// validation function
function isInputValid(input, type) {
    return   {
        valid: false,
        message: "The field is required",
    };
}

