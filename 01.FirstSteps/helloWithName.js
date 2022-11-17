function hello(input) {
    let firstName = input[0];
    let lastName = input[1];
    let age = input[2];
    let town = input[3];
    let greet = `You are ${firstName} ${lastName}, a ${age}-year old person from ${town}`;
    console.log(greet);
}

hello(["Ekaterina", "Pasheva", 20, "Ruse"]);