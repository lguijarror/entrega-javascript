const animals = ['Caracol', 'Mosquito', 'Salamandra', 'Ajolote'];

function findArrayIndex(array, text) {
    return array.indexOf(text);
}

const index = findArrayIndex(animals, "Caracol");

console.log('Index = ', index);

