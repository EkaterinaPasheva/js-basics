function project(input) {
    let name = input[0];
    let projectNumber = Number (input[1]);
    let time = Number (input[1] * 3);
    console.log(`The architect ${name} will need ${time} hours to complete ${projectNumber} project/s`);
}

project("George", "4");