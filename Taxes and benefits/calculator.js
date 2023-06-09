/*
This is a basic calculator project build with JS.
First I build three basic calculators, then I build a calculator for Norwegian income tax and benefits
*/

// -------------------------------------------------------
// BASIC CALCULATOR 1 – ALL FUNCTIONS

// let number1 = 5;
// let number2 = 6;

// adding = (number1, number2) => {
//     return number1 + number2
// };

// subtracting = (number1, number2) => {
//     return number1 - number2
// };

// multiplying = (number1, number2) => {
//     return number1 * number2
// };

// dividing = (number1, number2) => {
//     return number1 / number2
// };

// console.log(adding(number1, number2));
// console.log(subtracting(number1, number2));
// console.log(multiplying(number1, number2));
// console.log(dividing(number1, number2));


// -------------------------------------------------------
// BASIC CALCULATOR 2 – OBJECT WITH METHODS

// let number3 = 8;
// let number4 = 6;

// const calculations = {
//     adding(number1, number2) {
//         return number3 + number4;
//     },

//     subtracting(number1, number2) {
//         return number3 - number4;
//     },

//     multiplying(number1, number2) {
//         return number3 * number4;
//     },

//     dividing(number1, number2) {
//         return number3 / number4;
//     },

// };

// console.log(calculations.adding(number3, number4));
// console.log(calculations.subtracting(number3, number4));
// console.log(calculations.multiplying(number3, number4));
// console.log(calculations.dividing(number3, number4));


// -------------------------------------------------------
// BASIC CALCULATOR 3 – MULITPLE OPERATIONS IN ONE CALC
// TBC ...........

// -------------------------------------------------------
// CALCULATOR FOR NORWEGIAN TAXES AND BENEFITS
// -------------------------------------------------------

const noDecimals = Math.trunc;

// NATIONAL INSURANCE DATA

const oneG = 118620 // Basic calculation income
const maxIncomeFullPension = oneG * 7.1 // Maximum income for full pension
const maxIncomeFullBenefits = oneG * 6 // No benefit for income above this numer
const minIncomeForBenefits = oneG * 0.75 // Minimum income for receiveing befenits
const myIncome = maxIncomeFullPension; // Max sum taken as income

console.log(oneG, maxIncomeFullPension, maxIncomeFullBenefits, minIncomeForBenefits, myIncome);

// A labour year broken down
const months = 12;
const weeks = 52;
const days = 260;
const hours = 1950;

const brokenDownIncome = {
    monthlyIncome() {
        return noDecimals(myIncome / months); 
    },

    weeklyIncome() {
        return noDecimals(myIncome / weeks);
    },

    dailyIncome() {
        return noDecimals(myIncome / days);
    },

    hourlyIncome() {
        return noDecimals(myIncome / hours);
    },
};
console.log(brokenDownIncome.monthlyIncome(), brokenDownIncome.weeklyIncome(), brokenDownIncome.dailyIncome(), brokenDownIncome.hourlyIncome());

// VACATION PAY

let vacationPayPercentOfIncome = 12;
let vacationDaysAllowed = 30;
let vacationDaysAllowedWithPay = 26;

let vacationPay = (monthlyIncome, myIncome, vacationPayPercentOfIncome, vacationDaysAllowedWithPay, vacationDaysAllowed) => monthlyIncome + (myIncome * vacationPayPercentOfIncome) - (monthlyIncome / vacationDaysAllowedWithPay) * vacationDaysAllowed;

console.log(vacationPay());





