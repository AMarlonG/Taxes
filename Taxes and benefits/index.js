

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

// Bracket tax (gross income)
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

// Tax percent
const finalTaxPercentOfGrossIncome = noDecimals((allTaxesTotal * 100) / myIncome);
console.log('Tax percent of gross income: ' + finalTaxPercentOfGrossIncome);

// Net income
const myNetIncome = myIncome - allTaxesTotal;
console.log('Net income: ' + myNetIncome);











