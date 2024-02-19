let p = document.createElement('p');

let text = document.createTextNode('Soy dinámico!');

p.appendChild(text)

let body = document.querySelector('body');

body.appendChild(p);