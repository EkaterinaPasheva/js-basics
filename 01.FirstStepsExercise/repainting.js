// · Предпазен найлон - 1.50 лв. за кв. метър
// · Боя - 14.50 лв. за литър
// · Разредител за боя - 5.00 лв. за литър

// 1. Необходимо количество найлон (в кв.м.) - цяло число в интервала [1... 100]
// 2. Необходимо количество боя (в литри) - цяло число в интервала [1…100]
// 3. Количество разредител (в литри) - цяло число в интервала [1…30]
// 4. Часовете, за които майсторите ще свършат работата - цяло число в интервала [1…9]

function repainting(input) {
    let nylon = Number (input[0]); // + 2sqrt m
    let paint = Number (input[1]); // + 10% paint
    let thinner = Number (input[2]);
    let hours = Number (input[3]);
    let bagPrice = 0.40;

    let price = ((nylon + 2) * 1.50) + ((paint + paint * 0.1) * 14.50) + (thinner * 5) + bagPrice;
    let workersPay = (price * 0.3) * hours;
    let totalPrice = price + workersPay;

    console.log(totalPrice);
}

repainting(["10","11","4","8"]); 