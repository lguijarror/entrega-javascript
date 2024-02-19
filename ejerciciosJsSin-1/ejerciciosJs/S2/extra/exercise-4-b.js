const animals = ['Caracol', 'Mosquito', 'Salamandra', 'Ajolote'];

function findArrayIndex(array, text) {
    return array.indexOf(text);
}


function removeItem(array, text) {
    const index = findArrayIndex(array, text);

    if (index != -1){ //PARA EVITAR QUE SI NO EXISTE EL ELEMENTO PASADO NO ELIMINE EL ÚLTIMO ELEMENTO (INDEX=-1)
        array.splice(index, 1);
    }

    return array;
}

const spliceArray = removeItem(animals, "Caracol");

console.log(spliceArray);