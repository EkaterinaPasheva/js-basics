// 1. Брой страници в текущата книга 
// 2. Страници, които прочита за 1 час 
// 3. Броят на дните, за които трябва да прочете книгата 

function compulsoryLit(input) {
    let currBookPages = Number (input[0]);
    let pagesPerHour = Number (input[1]);
    let daysCount = Number (input[2]);

    let totalHours = currBookPages / pagesPerHour;
    let hoursPerDay = totalHours / daysCount;

    console.log(hoursPerDay);
}

compulsoryLit(["212 ","20 ","2 "])