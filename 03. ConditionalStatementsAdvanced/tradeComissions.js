// Град 0 ≤ s ≤ 500 500 < s ≤ 1 000 1 000 < s ≤ 10 000 s > 10 000
// Sofia 5% 7% 8% 12%
// Varna 4.5% 7.5% 10% 13%
// Plovdiv 5.5% 8% 12% 14.5%

function tradeComissions(input) {
    let town = input[0];
    let sales = Number(input[1]);

    switch (town) {
        case "Sofia":
            if (sales >= 0 && sales <= 500) {
                console.log((0.05 * sales).toFixed(2));
            } else if (sales > 500 && sales <= 1000) {
                console.log((0.07 * sales).toFixed(2));
            } else if (sales > 1000 && sales <= 10000) {
                console.log((0.08 * sales).toFixed(2));
            } else if (sales > 10000) {
                console.log((0.12 * sales).toFixed(2));
            } else if (sales < 0) {
                console.log("error");
            }
            break;
        case "Varna":
            if (sales >= 0 && sales <= 500) {
                console.log((0.045 * sales).toFixed(2));
            } else if (sales > 500 && sales <= 1000) {
                console.log((0.075 * sales).toFixed(2));
            } else if (sales > 1000 && sales <= 10000) {
                console.log((0.10 * sales).toFixed(2));
            } else if (sales > 10000) {
                console.log((0.13 * sales).toFixed(2));
            } else if (sales < 0) {
                console.log("error");
            }
            break;
        case "Plovdiv":
            if (sales >= 0 && sales <= 500) {
                console.log((0.055 * sales).toFixed(2));
            } else if (sales > 500 && sales <= 1000) {
                console.log((0.08 * sales).toFixed(2));
            } else if (sales > 1000 && sales <= 10000) {
                console.log((0.12 * sales).toFixed(2));
            } else if (sales > 10000) {
                console.log((0.145 * sales).toFixed(2));
            } else if (sales < 0) {
                console.log("error");
            }
            break;
        default: console.log("error");
    }
}

tradeComissions(["Sofia", 1500]);