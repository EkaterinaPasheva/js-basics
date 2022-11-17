// • Баскетболни кецове – цената им е 40% по-малка от таксата за една година
// • Баскетболен екип – цената му е 20% по-евтина от тази на кецовете
// • Баскетболна топка – цената ѝ е 1 / 4 от цената на баскетболния екип
// • Баскетболни аксесоари – цената им е 1 / 5 от цената на баскетболната топка

function basketballEquipment(input) {
    let yearTax = Number (input[0]);
    let shoesPrice = yearTax - yearTax * 0.4;
    let clothesPrice = shoesPrice - shoesPrice * 0.2;
    let ballPrice = clothesPrice - clothesPrice * (1 / 4);
    let accessoriesPrice = ballPrice - ballPrice * (1 / 5);

    let totalPrice = yearTax + shoesPrice + clothesPrice + ballPrice + accessoriesPrice;

    console.log(totalPrice);
}

basketballEquipment(["365"]);