const getInitCharacters = async () => {
    const response = await fetch('http://localhost:3000/characters?_page=1&_limit=5');

    const results = await response.json();

    return results;
};

const getMoreCharacters = async () => {

    let page = document.querySelector('input[name="page"]');
    
    page.value++;

    const response = await fetch('http://localhost:3000/characters?_page=' + page.value + '&_limit=5');

    const results = await response.json();

    drawCharacters(results); 
        
    if (page.value == 4){ 
        document.querySelector('.b-btn').remove();  
    }
};

const  drawMoreCharactersButton = () => {
    
    let button = document.createElement('button');
    button.className = 'b-btn';
    let textButton = document.createTextNode('Cargar más');

    button.appendChild(textButton);

    button.addEventListener('click', getMoreCharacters );

    let page = document.createElement('input');
    page.setAttribute('type', 'hidden');
    page.setAttribute('name', 'page');
    page.setAttribute('value', 1);

    document.body.appendChild(button);
    document.body.appendChild(page);
};

const drawCharacters = (characters) => {
    let gallery = document.querySelector('.b-gallery');

    for(let character of characters){
        let item = document.createElement('div');
        item.className = 'b-gallery__item';

        let image = document.createElement('img');
        image.className = 'b-gallery__img';
        image.setAttribute('src', character.image);
    
    
        let name = document.createElement('p');
        name.className = 'b-gallery__text';
        let nameText = document.createTextNode(character.name);

        name.appendChild(nameText);

        item.appendChild(image);
        item.appendChild(name);

        gallery.appendChild(item);
    }
};

const init = async () => {
    const characters = await getInitCharacters();
    drawMoreCharactersButton();
    drawCharacters(characters);
};

init();