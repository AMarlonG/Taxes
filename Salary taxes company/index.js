

const noDecimals = Math.trunc;
// Full company cost of one employee with salary and benefits

const salary = 861030;
console.log('Salary: ' + salary);

const salaryBrokenDown = {

    months: 12,
    monthly() {
        return noDecimals(salary / this.months);
    },

    weeks: 52,
    weekly() {
        return noDecimals(salary / this.weeks);
    },

    days: 260,
    daily() {
        return noDecimals(salary / this.days);
    },

    hours: 1950,
    hourly() {
        return noDecimals(salary / this.hours);
    },
};

let monthlySalary = salaryBrokenDown.monthly();
let weeklySalary = salaryBrokenDown.weekly();
let dailySalary = salaryBrokenDown.daily();
let hourlySalary = salaryBrokenDown.hourly();



const vacation = {
    percentOfIncome: 0.12,
    daysAllowed: 30,
    daysWithPay: 26,

    payment() {
        return noDecimals(monthlySalary + (salary * this.percentOfIncome) - (monthlySalary / this.daysWithPay) * this.daysAllowed)
    }
};
const vacationPayment = vacation.payment();
console.log('Vacation payment: ' + vacationPayment);

const salaryMinusVacationPayment = noDecimals(salary - vacationPayment);
console.log('Salary minus vacation payment: ' + salaryMinusVacationPayment);



const pension = {
    percentOfIncome: 0.02,
    payment() {
        return noDecimals(salary * this.percentOfIncome)
    }
};
const pensionPayment = pension.payment();
console.log('Pension: ' + pensionPayment);



const taxes = {
    employeePercent: 0.141,

    employee() {
        return noDecimals(salary * this.employeePercent)
    },

    pension() {
        return noDecimals(pensionPayment * this.employeePercent)
    }
};
const employeeTax = taxes.employee();
const pensionTax = taxes.pension();
console.log('Employee tax: ' + employeeTax);
console.log('Pension tax: ' + pensionTax);



const totalCosts = noDecimals(vacationPayment + salaryMinusVacationPayment + pensionPayment + employeeTax + pensionTax);
console.log('Total costs for employee: ' + totalCosts);
