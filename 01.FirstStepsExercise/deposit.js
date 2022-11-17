// сума = депозирана сума + срок на депозита * ((депозирана сума * годишен лихвен процент ) / 12)

// 1. Депозирана сума – реално число в интервала [100.00 … 10000.00]

// 2. Срок на депозита (в месеци) – цяло число в интервала [1…12]

// 3. Годишен лихвен процент – реално число в интервала [0.00 …100.00]

function depositCalculator(input) {
    let depositedSum = Number (input[0]);
    let depositPeriodMonths = Number (input[1]);
    let yearlyIncreasePercent = Number (input[2]);
    let yearlyIncreaseDecimal = yearlyIncreasePercent / 100;

    let sum = depositedSum + depositPeriodMonths * ((depositedSum * yearlyIncreaseDecimal) / 12);

    console.log(sum);
}

depositCalculator(["200", "3", "5.7"]);