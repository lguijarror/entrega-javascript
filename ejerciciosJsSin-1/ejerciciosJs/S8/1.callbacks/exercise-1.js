const numbersList = [];

function sum(a, b){
    return a + b;
}

function substract(a, b){
    return a - b;
}

function father(a, b, callback) {
    const resultado = callback(a, b);
    numbersList.push(resultado);
}

father(8, 2, sum);

father(9, 3, sum);

father(5, 7, sum);

father(3, 4, sum);

father(7, 5, substract);

father(12, 8, substract);

father(6, 3, substract);

father(8, 2, substract);

console.log(numbersList);