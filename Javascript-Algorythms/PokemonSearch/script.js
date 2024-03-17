const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");

const dataLoader = (pokemon) => {
	const pokemonName = ((
		document.getElementById("pokemon-name") || {}
	).textContent = pokemon.name.toUpperCase());
	const pokemonId = ((document.getElementById("pokemon-id") || {}).textContent =
		pokemon.id);
	let img = document.createElement("img");
	img.id = "sprite";
	img.height = 100;
	img.width = 100;
	img.src = pokemon.sprites.front_default;
	document.getElementById("sprite-container").appendChild(img);
	const weight = ((document.getElementById("weight") || {}).textContent =
		pokemon.weight);
	const height = ((document.getElementById("height") || {}).textContent =
		pokemon.height);
	pokemon.types.forEach((type) => {
		let div = document.createElement("div");
		div.innerHTML = type.type.name.toUpperCase();
		div.id = "type";
		document.getElementById("types").append(div);
	});
	const stats = pokemon.stats.map((stat) => stat.base_stat);
	const hp = ((document.getElementById("hp") || {}).textContent = stats[0]);
	const attack = ((document.getElementById("attack") || {}).textContent =
		stats[1]);
	const defense = ((document.getElementById("defense") || {}).textContent =
		stats[2]);
	const specialAttack = ((
		document.getElementById("special-attack") || {}
	).textContent = stats[3]);
	const specialDefense = ((
		document.getElementById("special-defense") || {}
	).textContent = stats[4]);
	const speed = ((document.getElementById("speed") || {}).textContent =
		stats[5]);
};

const dataClear = () => {
	document.getElementById("pokemon-name").textContent = "";
	document.getElementById("pokemon-id").textContent = "";
	document.getElementById("height").textContent = "";
	document.getElementById("weight").textContent = "";
	document.getElementById("hp").textContent = "";
	document.getElementById("attack").textContent = "";
	document.getElementById("defense").textContent = "";
	document.getElementById("special-attack").textContent = "";
	document.getElementById("special-defense").textContent = "";
	document.getElementById("speed").textContent = "";
	const spriteContainer = document.getElementById("sprite-container");
	while (spriteContainer.firstChild) {
		spriteContainer.removeChild(spriteContainer.firstChild);
	}
	const typesElement = document.getElementById("types");
	while (typesElement.firstChild) {
		typesElement.removeChild(typesElement.firstChild);
	}
};

searchButton.addEventListener("click", () => {
	dataClear();

	const searchValue = searchInput.value.toLowerCase();
	fetch(`https://pokeapi.co/api/v2/pokemon/${searchValue}`)
		.then((response) => {
			if (response.status === 200) {
				return response.json();
			}
			throw new Error("Pokémon not found");
		})
		.then((data) => {
			dataLoader(data);
		})
		.catch((error) => {
			alert(error.message);
		});
});
