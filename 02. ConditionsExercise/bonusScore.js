function bonusScore(input) {
    let initialScore = Number(input[0]);
    let bonus = 0;

    if (initialScore <= 100) {
        bonus = 5;
    } else if (initialScore <= 1000) {
        bonus = 0.20 * initialScore;
    } else {
        bonus = 0.10 * initialScore;
    }

    if (initialScore % 2 === 0) {
        bonus = bonus + 1;      
    } else if (initialScore % 10 === 5) {
        bonus = bonus + 2;
    }

    console.log(bonus);
    console.log(initialScore + bonus);
}

bonusScore(["20"]);