const names = ['Mesirve', 'Cristiano Romualdo', 'Fernando Muralla', 'Ronalguiño'];

function swap(array, i, j){

    if (i < array.length && j < array.length){
        const aux = array[i];
        array[i] = array[j];
        array[j] = aux;
    }

    return array;
}

console.log(swap(names, 1, 7));