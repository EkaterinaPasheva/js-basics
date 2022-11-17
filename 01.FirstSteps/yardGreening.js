function yardGreening(input) {
    let squareM = Number (input);
    let priceSquareM = squareM * 7.61;
    let discountPercent = priceSquareM * 0.18;
    let totalPrice = priceSquareM - discountPercent;
    console.log("The final price is: " + totalPrice + " lv.");
    console.log("The discount is: " + discountPercent + " lv.");
}

yardGreening("550");