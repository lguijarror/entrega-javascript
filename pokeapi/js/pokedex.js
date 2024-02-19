const ol = document.getElementById('pokedex');

const getPokemons = async () => {

	let pokemons = [];

	for (let i = 0; i < 150; i++) {
		await fetch("https://pokeapi.co/api/v2/pokemon/" + (i + 1))
			.then((response) => response.json())
			.then((results) => pokemons.push(results))
			.catch((error) => { 
				console.log(error); 
			});
	}

	return pokemons;
};

const mapPokemon = (results) => {
	return results.map((result) => ({
		name: result.name,
		image: result.sprites.other['official-artwork']['front_default'],
		type: result.types.map((type) => type.type.name),
		id: result.id
	}));
};

const formatPokemonId = (id) => {
	let pokemonId = id.toString();

	if (pokemonId.length == 1){
		pokemonId = '00' + pokemonId;
	} else if (pokemonId.length == 2){
		pokemonId = '0' + pokemonId;
	}

	return pokemonId;
}


const drawPokemons = (pokemons) => {

	for (const pokemon of pokemons) {
		let li = document.createElement('li');


		let divCard = document.createElement('div');
		divCard.className = 'card';


		let img = document.createElement('img');
		img.className = 'card-image';
		img.setAttribute("src", pokemon.image);
		
		let divCardBody = document.createElement('div');
		divCardBody.className = 'card-body';
		
		let h5 = document.createElement('h5');
		let h6 = document.createElement('h6');
		h5.className = 'card-id';
		h6.className = 'card-title';
		
		let pokemonId = document.createTextNode('#' + formatPokemonId(pokemon.id));
		let pokemonName = document.createTextNode(pokemon.name);
		let divSubtitle = document.createElement('div');
		divSubtitle.className = 'card-subtitle';
		
		for (const type of pokemon.type){
			let span = document.createElement('span');
			span.classList.add('type', type);
			let pokemonType = document.createTextNode(type);

			span.appendChild(pokemonType);
			divSubtitle.appendChild(span);
		}

		divCard.appendChild(img);
		divCard.appendChild(divCardBody);
		divCardBody.appendChild(h5);
		divCardBody.appendChild(h6);
		h5.appendChild(pokemonId);
		h6.appendChild(pokemonName);
		divCardBody.appendChild(divSubtitle);

		li.appendChild(divCard);
		ol.appendChild(li);
	}
};


const init = async () => {

	const characters = await getPokemons();

	const mapPok = mapPokemon(characters);

	drawPokemons(mapPok);
};
init();