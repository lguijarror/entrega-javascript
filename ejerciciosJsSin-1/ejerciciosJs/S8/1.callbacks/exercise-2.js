const userAnwsers = [];

function confirmExample(description){
   confirm(description);
}

function promptExample(description){
    prompt(description);
}

function father(description, callback){
    const resultado = callback(description);

    userAnwsers.push(resultado);
}

father('Soy un texto', confirmExample);

father('Soy un texto', promptExample);

console.log(userAnwsers);