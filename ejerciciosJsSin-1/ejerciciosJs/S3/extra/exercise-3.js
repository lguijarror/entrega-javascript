const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];

let ul = document.createElement('ul');

for (let i=0; i < cars.length; i++){
    let li = document.createElement('li');

    let text = document.createTextNode(cars[i]);

    li.appendChild(text);

    ul.appendChild(li);
}

let div = document.querySelector('div[data-function="printHere"]');

div.appendChild(ul);