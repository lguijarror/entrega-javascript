const getCharacters = async () => {
    const response = await fetch('http://localhost:3000/characters');

    const results = await response.json();

    return results;
};

const drawCharacters = (characters) => {

    let divCharacters = document.querySelector('.c-characters');

    for (let character of characters) {

        let divCharacter = document.createElement('div');
        divCharacter.classList.add('c-characters__item', 'character-' + character.id);

        divCharacter.addEventListener('click', () => { selectCharacter(divCharacter) });

        let imageCharacter = document.createElement('img');
        imageCharacter.setAttribute('src', character.avatar);

        let characterName = document.createElement('h5');
        let name = document.createTextNode(character.name);
        characterName.appendChild(name);

        let divStatistics = document.createElement('div');

        let critic = document.createElement('p');
        let criticData = document.createTextNode('Critic: ' + character.critic);
        critic.appendChild(criticData);

        let defense = document.createElement('p');
        let defenseData = document.createTextNode('Defense: ' + character.defense);
        defense.appendChild(defenseData);

        let vitality = document.createElement('p');
        let vitalityData = document.createTextNode('Vitality: ' + character.vitality);
        vitality.appendChild(vitalityData);

        let damageP = document.createElement('p');
        let damageText = document.createTextNode('Damage: [' + character.damage + ']');
        damageP.appendChild(damageText);

        divStatistics.appendChild(critic);
        divStatistics.appendChild(defense);
        divStatistics.appendChild(vitality);
        divStatistics.appendChild(damageP);

        divCharacter.appendChild(imageCharacter);
        divCharacter.appendChild(characterName);
        divCharacter.appendChild(divStatistics);
        divCharacters.appendChild(divCharacter);
    }
};

const selectCharacter = (divCharacter) => {

    let selectedCharacters = document.getElementsByClassName('selected');

    if (selectedCharacters.length < 2) {
        divCharacter.classList.toggle('selected');
    }

    if (selectedCharacters.length == 2) {
        fightButton();
    }
};

const fightButton = () => {

    let divButton = document.createElement('div');
    divButton.className = 'bnt-container';
    let button = document.createElement('button');
    button.className = 'btn-fight';
    let textButton = document.createTextNode('FIGHT!');
    button.appendChild(textButton);

    divButton.appendChild(button);
    document.body.appendChild(divButton);
};

const init = async () => {
    const characters = await getCharacters();

    drawCharacters(characters);
};

init();