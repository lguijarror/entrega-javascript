const getPlanets = async () => {
    const response = await fetch('http://localhost:3000/planets');

    const results = await response.json();

    return results;
};

const getAllCharacters = async (index) => {

    const response = await fetch('http://localhost:3000/characters?idPlanet=' + index);

    const results = await response.json();

    drawPlanetContainer(index, results);
};

const getFilterCharacters = (index, characters) => {

    const search = document.querySelector('input[data-search="' + index + '"]');

    const filtered = characters.filter((character) => search.value == character.name);

    drawCharacters(index, filtered);
};

const drawPlanets = async (planets) => {

    let div = document.createElement('div');
    div.className = 'planets';

    for (let planet of planets) {

        let divPlanet = document.createElement('div');
        divPlanet.classList.add('planet', 'planet-' + planet.id);
        let h3 = document.createElement('h3');

        let planetName = document.createTextNode(planet.name);
        let planetImage = document.createElement('img');
        planetImage.setAttribute('src', planet.image);

        h3.appendChild(planetName);
        divPlanet.appendChild(h3);
        divPlanet.appendChild(planetImage);

        planetImage.addEventListener('click', () => getAllCharacters(planet.id));

        div.appendChild(divPlanet);

    }

    document.body.appendChild(div);
};


const drawPlanetContainer = async (index, characters) => {

    let divContainer = document.querySelector('.container-' + index);

    if (divContainer == null) {
        divContainer = document.createElement('div');
        divContainer.className = 'container-' + index;

        document.querySelector('.planet-' + index).appendChild(divContainer);

        drawSearch(index, characters);
    }

    drawCharacters(index, characters);
};


const drawCharacters = async (index, characters) => {

    let divCharacters = document.querySelector('.characters-' + index);

    if (divCharacters != null) {
        divCharacters.remove();
    }

    divCharacters = document.createElement('div');
    divCharacters.className = 'characters-' + index;

    for (let character of characters) {

        let divCharacter = document.createElement('div');
        divCharacter.classList.add('character', character.name.toLowerCase().replace(' ', '_'));

        let characterName = document.createElement('h5');
        let textName = document.createTextNode(character.name);
        let characterImage = document.createElement('img');
        characterImage.setAttribute('src', character.avatar);

        let characterDescription = document.createElement('p');
        characterDescription.classList.add('description-' + character.name.toLowerCase().replace(' ', '_'), 'hide');

        let descriptionText = document.createTextNode(character.description);
        characterDescription.appendChild(descriptionText);

        characterName.appendChild(textName);
        divCharacter.appendChild(characterName);
        divCharacter.appendChild(characterImage);
        divCharacter.appendChild(characterDescription);

        divCharacters.appendChild(divCharacter);

        characterImage.addEventListener('click', () => toggleDescription(characterDescription));

    }
    document.querySelector('.container-' + index).appendChild(divCharacters);

};

const toggleDescription = (characterDescription) => {

    characterDescription.classList.toggle('hide');

};

const drawSearch = (index, characters) => {

    let searchContainer = document.querySelector('.searchContainer-' + index);

    if (searchContainer == null) {
        searchContainer = document.createElement('div');

        searchContainer.className = 'searchContainer-' + index;

        let inputLabel = document.createElement('p');
        let labelText = document.createTextNode('Introduce el nombre: ');
        inputLabel.appendChild(labelText);

        let input = document.createElement('input');
        input.setAttribute('type', 'text');
        input.setAttribute('placeholder', 'Buscar personaje');
        input.setAttribute('data-search', index);
        let button = document.createElement('button');
        let buttonText = document.createTextNode('Buscar');
        button.appendChild(buttonText);

        searchContainer.appendChild(inputLabel);
        searchContainer.appendChild(input);
        searchContainer.appendChild(button);

        button.addEventListener('click', () => getFilterCharacters(index, characters));

        document.querySelector('.container-' + index).appendChild(searchContainer);
    }
};



const init = async () => {
    const planets = await getPlanets();
    drawPlanets(planets);
};

init();