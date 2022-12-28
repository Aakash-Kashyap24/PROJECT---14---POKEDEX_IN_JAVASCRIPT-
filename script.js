
const getInTouch = document.querySelector(".get-in-touch");
const floting = document.querySelector(".float");
const closeBtn = document.querySelector(".close");



const container = document.querySelector(".poke-container");
const pokeBox = document.querySelector(".poke-box");
const colorName = document.querySelector(".color-name");
const name = document.querySelector(".name");
const image = document.querySelector(".image-item");
const type = document.querySelector(".type");


const colors = {
    fire: '#FDDFDF',
    grass: '#DEFDE0',
    electric: '#FCF7DE',
    water: '#DEF3FD',
    ground: '#f4e7da',
    rock: '#d5d5d4',
    fairy: '#fceaff',
    poison: '#98d7a5',
    bug: '#f8d5a3',
    dragon: '#97b3e6',
    psychic: '#eaeda1',
    flying: '#F5F5F5',
    fighting: '#E6E0D4',
    normal: '#F5F5F5'
};

const main_types = Object.keys(colors);

const pokemons_number = 150;



const fetchPokemons = async () => {
    for (let i = 1; i <= pokemons_number; i++) {
        await getPokemon(i);
    }
};

const getPokemon = async id => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const res = await fetch(url);
    const pokemon = await res.json();
    createPokemonCard(pokemon);
  
};

function createPokemonCard(pokemon) {
  
    console.log(pokemon)
    const poke_types = pokemon.types.map(type => type.type.name);
    const type = main_types.find(type => poke_types.indexOf(type) > -1);
    const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
    const color = colors[type];

    const img=pokemon.url;

    const poBox = document.createElement("div");
    poBox.classList.add('poke-box');
    const cBox = document.createElement('div');
    cBox.classList.add('circle-box');

    poBox.style.backgroundColor = color;
    poBox.appendChild(cBox);
    const imag = document.createElement("img");
    imag.classList.add("image-item");
    imag.alt = `${name}`;
    cBox.appendChild(imag);
    const cName = document.createElement('p');
    cName.classList.add('color-name');
    cName.innerHTML = `${color}`
    poBox.appendChild(cName);
    const nam = document.createElement('p');
    nam.classList.add('name');
    nam.innerHTML = `${name}`;
    poBox.appendChild(nam);
    const ty = document.createElement("p")
    ty.innerHTML = `Type: ${type}`
    poBox.appendChild(ty);
    ty.classList.add('type');

    container.appendChild(poBox);



}



fetchPokemons()














getInTouch.addEventListener('click', floatMedia);
closeBtn.addEventListener('click', floatMedia)

function floatMedia() {

    if (floting.classList.contains("clicked")) {
        floting.classList.remove('clicked');

    }
    else {
        floting.classList.add('clicked');

    }
}















