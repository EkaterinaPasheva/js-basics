// · Брой пилешки менюта – цяло число в интервала [0 … 99]
// · Брой менюта с риба – цяло число в интервала [0 … 99]
// · Брой вегетариански менюта – цяло число в интервала [0 … 99]
// • Пилешко меню – 10.35 лв.
// • Меню с риба – 12.40 лв.
// • Вегетарианско меню – 8.15 лв.

function foodDelivery(input) {
    let chickenCount = Number (input[0]);
    let fishCount = Number (input[1]);
    let vegCount = Number (input[2]);

    let totalMenuPrice = (chickenCount * 10.35) + (fishCount * 12.40) + (vegCount * 8.15);
    let dessertPrice = totalMenuPrice * 0.20;
    let totalPrice = totalMenuPrice + dessertPrice + 2.50;

    console.log(totalPrice);
}

foodDelivery(["2", "4", "3"]);