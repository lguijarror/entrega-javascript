const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

let ul = document.createElement('ul');

for (let i=0; i<apps.length; i++){
    let li = document.createElement('li');

    let text = document.createTextNode(apps[i]);

    li.appendChild(text);

    ul.appendChild(li);
}

let body = document.querySelector('body');

body.appendChild(ul);