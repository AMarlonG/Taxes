




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

const steps = {
    stepOne: taxBracket(198350, 279150, 0.017),
    stepTwo: taxBracket(279150, 642590, 0.04),
    stepThree: taxBracket(642590, 926800, 0.134),
    stepFour: taxBracket(926800, 1500000, 0.164),
    stepFive: taxBracket(1500000, Infinity, 0.174),
};

for (key in steps) {
    const elm = steps[key];
    console.log(
        key +
        ": " +
        (() => {
            if (myIncome === elm.high) {
                return elm.sum();
            } else if (myIncome > elm.low && myIncome < elm.high) {
                return (myIncome - elm.low) * elm.tax;
            } else if (myIncome < elm.low) {
                return "Income is to low for bracket";
            }
        })()
    );
}





