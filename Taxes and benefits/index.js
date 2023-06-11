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

// National insurance data
const oneG = 118620 // Base calculation income
const maxIncomeFullPension = oneG * 7.1 // Maximum income for full pension
const maxIncomeFullBenefits = oneG * 6 // No benefit for income above this number
const minIncomeForBenefits = oneG * 0.75 // Minimum income for receiveing benefits
const myIncome = maxIncomeFullPension; // Max sum taken as income
console.log('Gross income: ' + myIncome);

const myIncomeBrokenDown = {

    months: 12,
    monthly() {
        return noDecimals(myIncome / this.months); 
    },

    weeks: 52,
    weekly() {
        return noDecimals(myIncome / this.weeks);
    },

    days: 260,
    daily() {
        return noDecimals(myIncome / this.days);
    },

    hours: 1950,
    hourly() {
        return noDecimals(myIncome / this.hours);
    },
};
let monthlyIncome = myIncomeBrokenDown.monthly();
let weeklyIncome = myIncomeBrokenDown.weekly();
let dailyIncome = myIncomeBrokenDown.daily();
let hourlyIncome = myIncomeBrokenDown.hourly();

// Vacation pay
const vacationInfo = {
    percentOfIncome: 0.12,
    daysAllowed: 30,
    daysWithPay: 26,

    payment() {
        return noDecimals(monthlyIncome + (myIncome * this.percentOfIncome) - (monthlyIncome / this.daysWithPay) * this.daysAllowed)
    }
};
const vacationPayment = vacationInfo.payment();
console.log('Vacation pay: ' + vacationPayment);

// Tax deductions
const taxDeductions = {
    minimum: 109950,
    individual: 58250
};
const totalTaxDeductions = taxDeductions.minimum + taxDeductions.individual;
console.log('Total deductions: ' + totalTaxDeductions);

const myIncomeAfterTaxDeductions = myIncome - totalTaxDeductions;
console.log('Income after deductions: ' + myIncomeAfterTaxDeductions);

// Income tax (net income)
const incomeTaxPercent = 0.22;
incomeTax = () => {
    return noDecimals(myIncomeAfterTaxDeductions * incomeTaxPercent);
};
console.log('Income tax: ' + incomeTax());

// National insurance tax (gross income)
const nationalInsuranceTaxPercent = 0.08;
nationalInsuranceTax = () => {
    return noDecimals(myIncome * nationalInsuranceTaxPercent);
};
console.log('National insurance tax: ' + nationalInsuranceTax());

// Backet tax (gross income)
// Calculations used https://stackoverflow.com/questions/63231845/how-to-calculate-effective-tax-rate-in-javascript/76447211#76447211
const allTaxBrackets = [
    [198350, 279150, 0.017],
    [279150, 642590, 0.04],
    [642590, 926800, 0.134],
    [926800, 1500000, 0.164],
    [1500000, Infinity, 0.174],
];

let totalBracketTaxes = 0;
for (const brackets of allTaxBrackets) {
    if (myIncome < brackets[1]) {
        totalBracketTaxes += noDecimals((myIncome - brackets[0]) * brackets[2]);
        break;
    }
    else {
        totalBracketTaxes += noDecimals((brackets[1] - brackets[0]) * brackets[2]);
    };
};
console.log('Bracket tax: ' + totalBracketTaxes);

// Total taxes
const allTaxesTotal = incomeTax() + nationalInsuranceTax() + totalBracketTaxes;
console.log('Total taxes paid: ' + allTaxesTotal);

// Net income
const myNetIncome = myIncome - allTaxesTotal;
console.log('Net income: ' + myNetIncome);

// Tax percent
const finalTaxPercentOfGrossIncome = noDecimals((allTaxesTotal * 100) / myIncome);
console.log('Tax percent of gross income: ' + finalTaxPercentOfGrossIncome);









