// • Пакет химикали - 5.80 лв.
// • Пакет маркери - 7.20 лв.
// • Препарат - 1.20 лв (за литър)

// · Брой пакети химикали - цяло число в интервала [0...100]
// · Брой пакети маркери - цяло число в интервала [0...100]
// · Литри препарат за почистване на дъска - цяло число в интервала [0…50]
// · Процент намаление - цяло число в интервала [0...100]

function schoolSupply(input) {
    let pencilCount = Number (input[0]);
    let markerCount = Number (input[1]);
    let cleaning = Number (input[2]);
    let discount = Number (input[3]);
    let discountPercent = discount / 100;

    let  price = (pencilCount * 5.80) + (markerCount * 7.20) + (cleaning * 1.20);
    let priceWithDiscount = price - (price * discountPercent);

    console.log(priceWithDiscount);
}

schoolSupply(["2", "3", "4", "25"]); 