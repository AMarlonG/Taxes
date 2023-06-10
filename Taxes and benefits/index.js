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

const oneG = 118620 // Base calculation income
const maxIncomeFullPension = oneG * 7.1 // Maximum income for full pension
const maxIncomeFullBenefits = oneG * 6 // No benefit for income above this number
const minIncomeForBenefits = oneG * 0.75 // Minimum income for receiveing benefits
const myIncome = maxIncomeFullPension; // Max sum taken as income

console.log(myIncome);

// A labour year broken down
const months = 12;
const weeks = 52;
const days = 260;
const hours = 1950;

const myIncomeBrokenDown = {
    monthly() {
        return noDecimals(myIncome / months); 
    },

    weekly() {
        return noDecimals(myIncome / weeks);
    },

    daily() {
        return noDecimals(myIncome / days);
    },

    hourly() {
        return noDecimals(myIncome / hours);
    },
};

let monthlyIncome = myIncomeBrokenDown.monthly();
let weeklyIncome = myIncomeBrokenDown.weekly();
let dailyIncome = myIncomeBrokenDown.daily();
let hourlyIncome = myIncomeBrokenDown.hourly();

// console.log(monthlyIncome, weeklyIncome, dailyIncome, hourlyIncome);

// VACATION PAY

let vacationPayPercentOfIncome = 0.12;
let vacationDaysAllowed = 30;
let vacationDaysAllowedWithPay = 26;

let vacationPay = () => noDecimals(monthlyIncome + (myIncome * vacationPayPercentOfIncome) - (monthlyIncome / vacationDaysAllowedWithPay) * vacationDaysAllowed);

console.log(vacationPay());

// INCOME TAX

const deductions = {
    minimum: 109950,
    individual: 58250
};
const totalDeductions = deductions.minimum + deductions.individual;
console.log(totalDeductions);

const myIncomeAfterDeductions = myIncome - totalDeductions;
console.log(myIncomeAfterDeductions);

const tax = {
    income: 0.22,
    nationalInsurance: 0.08,
    
    bracket: {

        stepOne: {
            low: 198350,
            high: 279150,
            tax: 0.017,
            taxedSum() {
                return noDecimals((this.high - this.low) * this.tax);
                },
        },

        stepTwo: {
            low: 279150,
            high: 642590,
            tax: 0.04,
            taxedSum() {
                return noDecimals((this.high - this.low) * this.tax);
                },
        },

        stepThree: {
            low: 642590,
            high: 926800,
            tax: 0.134,
            taxedSum() {
                    return noDecimals((this.high - this.low) * this.tax);
                },
        },

        stepFour: {
            low: 926800,
            high: 1500000,
            tax: 0.164,
            taxedSum() {
                return noDecimals((this.high - this.low) * this.tax);
            },
        },

        stepFive: {
            low: 1500000,
            high: Infinity,
            tax: 0.174,
            taxedSum() {
                return noDecimals((this.high - this.low) * this.tax);
            },
        },
    }
};



// console.log(bracketTax.stepOne.taxedSum());
// console.log(bracketTax.stepTwo.taxedSum());
// console.log(bracketTax.stepThree.taxedSum());
// console.log(bracketTax.stepFour.taxedSum());
// console.log(bracketTax.stepFive.taxedSum());








