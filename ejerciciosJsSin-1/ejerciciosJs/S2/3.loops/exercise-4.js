const toys = [
    {id: 5, name: 'Buzz MyYear'}, 
    {id: 5, name: 'Mi gato persa'}, 
    {id: 11, name: 'Action Woman'}, 
    {id: 23, name: 'Barbie Man'}, 
    {id: 40, name: 'El gato con Guantes'},
    {id: 40, name: 'El gato felix'},
]

let elementosAEliminar=[];

for (let toy of toys){
    if (toy.name.includes("gato")){
        elementosAEliminar.push(toys.indexOf(toy));
    }
}

elementosAEliminar.reverse();

for (let index of elementosAEliminar){
    toys.splice(index, 1);
}

console.log(toys);