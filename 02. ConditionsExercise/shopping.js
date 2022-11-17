// · Видеокарта – 250 лв./бр.
// · Процесор – 35% от цената на закупените видеокарти/бр.
// · Рам памет – 10% от цената на закупените видеокарти/бр.

// 1. Бюджетът на Петър - реално число в интервала [0.0…100000.0]
// 2. Броят видеокарти - цяло число в интервала [0…100]
// 3. Броят процесори - цяло число в интервала [0…100]
// 4. Броят рам памет - цяло число в интервала [0…100]

// · Ако бюджета е достатъчен:
// "You have {остатъчен бюджет} leva left!"
// · Ако сумата надхвърля бюджета:
// "Not enough money! You need {нужна сума} leva more!"

function shopping(input) {
    let budget = Number(input[0]);
    let videoCardCount = Number(input[1]);
    let processorCount = Number(input[2]);
    let ramCount = Number(input[3]);

    let videoCardsPrice = videoCardCount * 250;
    let processorsPrice = (0.35 * videoCardsPrice) * processorCount;
    let ramsPrice = (0.1 * videoCardsPrice) * ramCount;

    let totalPrice = videoCardsPrice + processorsPrice + ramsPrice;

    if (videoCardCount > processorCount) {
        totalPrice = 0.85 * totalPrice;
    }

    if (totalPrice <= budget) {
        let moneyLeft = budget - totalPrice;
        console.log(`You have ${moneyLeft} leva left!`);

    } else {
        let moneyNeeded = totalPrice - budget;
        console.log(`Not enough money! You need ${moneyNeeded} leva more!`);
    }

}

shopping(["900", "2", "1", "3"]);