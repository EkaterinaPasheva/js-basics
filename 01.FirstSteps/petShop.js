function petShop(input) {
    let dogFoodPrice = 2.5;
    let catFoodPrice = 4;
    let sum = (dogFoodPrice * input[0]) + (catFoodPrice * input[1]);

    console.log(sum + " lv");
}

petShop("5", "4");