let div = document.querySelector('div:last-child');

let p = document.createElement('p');

let text = document.createTextNode('Voy en medio!');

p.appendChild(text);

let body = document.querySelector('body');

body.insertBefore(p, div);

