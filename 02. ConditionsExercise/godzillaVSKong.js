// · Декорът за филма е на стойност 10% от бюджета.
// · При повече от 150 статиста, има отстъпка за облеклото на стойност 10%.

// 1. Бюджет за филма – реално число в интервала [1.00 … 1000000.00]
// 2. Брой на статистите – цяло число в интервала [1 … 500]
// 3. Цена за облекло на един статист – реално число в интервала [1.00 … 1000.00]

// · Ако парите за декора и дрехите са повече от бюджета:
// o "Not enough money!"
// o "Wingard needs {парите недостигащи за филма} leva more."
// · Ако парите за декора и дрехите са по малко или равни на бюджета:
// o "Action!"
// o "Wingard starts filming with {останалите пари} leva left."
// Резултатът трябва да е форматиран до втория знак след десетичната запетая.

function godzillaKong(input) {
    let movieBudget = Number(input[0]);
    let staffCount = Number(input[1]);
    let oneCostumePrice = Number(input[2]);

    let totalCostumePrice = staffCount * oneCostumePrice;
    let decorPrice = 0.1 * movieBudget;
    
    if (staffCount > 150) {
        totalCostumePrice = 0.9 * totalCostumePrice;
    }

    let totalMoneySpent = totalCostumePrice + decorPrice;

    if (totalMoneySpent > movieBudget) {
        let moneyNeeded = totalMoneySpent - movieBudget;
        console.log("Not enough money!");
        console.log(`Wingard needs ${(moneyNeeded).toFixed(2)} leva more.`);

    } else {
        let moneyLeft = movieBudget - totalMoneySpent;
        console.log("Action!");
        console.log(`Wingard starts filming with ${(moneyLeft).toFixed(2)} leva left.`);
    }
}

godzillaKong(["20000","120","55.5"]);