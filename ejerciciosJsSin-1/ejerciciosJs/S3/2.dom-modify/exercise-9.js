let divs = document.querySelectorAll('.fn-insert-here');

for (let div of divs){
    let p = document.createElement('p');
    let text = document.createTextNode('Voy dentro!');
    
    p.appendChild(text);
    div.appendChild(p);
}