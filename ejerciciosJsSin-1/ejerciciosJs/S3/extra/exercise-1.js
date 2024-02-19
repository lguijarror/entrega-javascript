const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

let ul = document.createElement('ul');

for (let i=0; i < countries.length; i++){
    let li = document.createElement('li');

    let text = document.createTextNode(countries[i]);

    li.appendChild(text);

    ul.appendChild(li);
}

let body = document.querySelector('body');

body.appendChild(ul);