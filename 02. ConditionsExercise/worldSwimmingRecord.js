// 1. Рекордът в секунди – реално число в интервала [0.00 … 100000.00]
// 2. Разстоянието в метри – реално число в интервала [0.00 … 100000.00]
// 3. Времето в секунди, за което плува разстояние от 1 м. - реално число в интервала [0.00 … 1000.00]

// съпротивлението на водата го забавя на всеки 15 м. с 12.5 секунди

// · Ако Иван е подобрил Световния рекорд (времето му е по-малко от рекорда) отпечатваме:
// o " Yes, he succeeded! The new world record is {времето на Иван} seconds."
// · Ако НЕ е подобрил рекорда (времето му е по-голямо или равно на рекорда) отпечатваме:
// o "No, he failed! He was {недостигащите секунди} seconds slower."

function record(input) {
    let recordInSeconds = Number(input[0]);
    let distanceInMeters = Number(input[1]);
    let timeForMeter = Number(input[2]);

    let waterResistance = Math.floor((distanceInMeters / 15)) * 12.50;

    let timeForSwimming = distanceInMeters * timeForMeter;

    let totalTime = timeForSwimming + waterResistance;

    if (totalTime < recordInSeconds) {
        console.log(`Yes, he succeeded! The new world record is ${(totalTime).toFixed(2)} seconds.`);
    
    } else {
        let timeNeeded = totalTime - recordInSeconds;
        console.log(`No, he failed! He was ${(timeNeeded).toFixed(2)} seconds slower.`);
    }

}

record(["10464","1500","20"]);