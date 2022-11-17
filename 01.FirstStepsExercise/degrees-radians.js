// градус = радиан * 180 / π
function radiansToDegrees(input) {
    let radians = Number (input[0]);
    let degrees = input[0] * (180 / Math.PI);
    console.log(degrees);
}

radiansToDegrees([3.1416]);