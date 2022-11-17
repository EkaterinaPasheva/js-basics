// 1. Цена на екскурзията - реално число в интервала [1.00 … 10000.00]
// 2. Брой пъзели - цяло число в интервала [0… 1000]
// 3. Брой говорещи кукли - цяло число в интервала [0 … 1000]
// 4. Брой плюшени мечета - цяло число в интервала [0 … 1000]
// 5. Брой миньони - цяло число в интервала [0 … 1000]
// 6. Брой камиончета - цяло число в интервала [0 … 1000]

// · Пъзел - 2.60 лв.
// · Говореща кукла - 3 лв.
// · Плюшено мече - 4.10 лв.
// · Миньон - 8.20 лв.
// · Камионче - 2 лв.

function toyShop(input) {
    let tirpPrice = Number(input[0]);
    let puzzleCount = Number(input[1]);
    let dollCount = Number(input[2]);
    let bearCount = Number(input[3]);
    let minionCount = Number(input[4]);
    let truckCount = Number(input[5]);

    let moneyEarned = puzzleCount * 2.60 + dollCount * 3 + bearCount * 4.10 + minionCount * 8.20 + truckCount * 2;
    let toysCount = puzzleCount + dollCount + bearCount + minionCount + truckCount;

    if (toysCount >= 50) {
        moneyEarned = moneyEarned * 0.75;
    }

    let moneyAfterRent = moneyEarned * 0.90;

    if (moneyAfterRent >= tirpPrice) {
        let moneyLeft = moneyAfterRent - tirpPrice;
        console.log(`Yes! ${moneyLeft.toFixed(2)} lv left.`);
    } else {
        let insufficientMoney = tirpPrice - moneyAfterRent
        console.log(`Not enough money! ${insufficientMoney.toFixed(2)} lv needed.`);
    }
}

toyShop(["40.8","20","25","30","50","10"]);