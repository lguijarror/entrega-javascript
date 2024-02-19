//Vi que el boton estaba en el html del ejercicio 9, por eso lo cree
const getCats = async () => {
    const response = await fetch('https://api.thecatapi.com/v1/images/search');

    const result = await response.json();

    drawCat(result);
};


const createButton = () => {
    let button = document.createElement('button');
    let textButton = document.createTextNode('Call a cat');

    button.appendChild(textButton);

    button.addEventListener('click', getCats);

    document.body.appendChild(button);
};

drawCat = (cat) => {
    let catDiv = document.createElement('div');
    catDiv.setAttribute('data-remove', cat[0].id);

    let image = document.createElement('img');
    image.setAttribute('src', cat[0].url);

    let deleteButton = document.createElement('button');
    let deleteText = document.createTextNode('Delete cat');

    deleteButton.appendChild(deleteText);

    deleteButton.addEventListener('click', () => {
        let removeDiv = document.querySelector('div[data-remove="' + cat[0].id + '"]');
        
        if (removeDiv != null) {
            removeDiv.remove();
        }

    });

    catDiv.appendChild(image);
    catDiv.appendChild(deleteButton);

    document.body.appendChild(catDiv);
};

const init = () => {
    createButton();
};


init();