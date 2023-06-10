


// function taxBracketstepOne() {
//     if (myIncome > tax.bracket.stepOne.low && myIncome === tax.bracket.stepOne.low) {
//         result = tax.bracket.stepOne.taxedSum
//     }
// }

const myIncome = 650000;

const taxBracket = (low, high, tax) => {
    return {
        low,
        high,
        tax,
        sum() {
            return (this.high - this.low) * this.tax;
        }
    }

};

const stepOne = taxBracket(198350, 279150, 0.017);
const stepTwo = taxBracket(279150, 642590, 0.04);
const stepThree = taxBracket(642590, 926800, 0.134);
const stepFour = taxBracket(926800, 1500000, 0.164);
const stepFive = taxBracket(1500000, Infinity, 0.174);


