const prompt = require('prompt-sync')();

function netSalaryCalculator() {
    const PAYE_RATES = [
        { max: 24000, rate: 0.1 },
        { max: 32333, rate: 0.25 },
        { max: 500000, rate: 0.3 },
        { max: 800000, rate: 0.325 },
        { max: Infinity, rate: 0.35 }
    ];

    let basicSalary = parseFloat(prompt("Enter basic salary: "));
    let benefits = parseFloat(prompt("Enter benefits: "));
    let grossSalary = basicSalary + benefits;
    let paye = calculatePAYE(basicSalary);
    let nhif = 150;
    let nssf = 200;
    let netSalary = grossSalary - (paye + nhif + nssf);

    console.log(`Gross Salary: ${grossSalary}`);
    console.log(`PAYE: ${paye}`);
    console.log(`NHIF: ${nhif}`);
    console.log(`NSSF: ${nssf}`);
    console.log(`Net Salary: ${netSalary}`);
}

function calculatePAYE(salary) {
    let totalTax = 0;
    for (const rate of PAYE_RATES) {
        if (salary > 0) {
            let taxableIncome = Math.min(salary, rate.max);
            totalTax += taxableIncome * rate.rate;
            salary -= taxableIncome;
        }
    }
    return totalTax;
}

netSalaryCalculator();