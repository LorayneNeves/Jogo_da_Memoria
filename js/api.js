const txtCharacter = document.getElementById('txt-character');
const containerCards = document.getElementById('containerCards');
const URL1 = 'https://rickandmortyapi.com/api/character';
const URL2 = 'https://rickandmortyapi.com/api/character/?name='

const getApi = async(URL) =>{
    const response = await fetch(URL);
    const data = await response.json();
    return data.results;
}

const createCards = ( character ) => {
    const card = document.createElement('div');
    card.classList.add('card-character');

    const imgCard = document.createElement('img');
    imgCard.src = character.image;
    imgCard.alt = character.name;


    const containerDescription = document.createElement('div');
    containerDescription.classList.add('description-card');

    const nameCharacter = document.createElement('h2');
    nameCharacter.textContent = character.name;
    const genderCharacter = document.createElement('i');
    genderCharacter.textContent = "Gender: " + character.gender;

    const statusCharacter = document.createElement('i');
    statusCharacter.textContent = "Status: " + character.status;
    
    const locationCharacter = document.createElement('i');
    locationCharacter.textContent = "Localização: " + character.location.name;
    
    const typeCharacter = document.createElement('i');
    typeCharacter.textContent = "Tipo: " + character.type;

    const speciesCharacter = document.createElement('i');
    speciesCharacter.textContent = "Especie: " + character.species;

    containerDescription.appendChild(nameCharacter);
    containerDescription.appendChild(genderCharacter);
    containerDescription.appendChild(statusCharacter);
    containerDescription.appendChild(locationCharacter);
    containerDescription.appendChild(speciesCharacter);

    card.appendChild(imgCard);
    card.appendChild(containerDescription);

    containerCards.appendChild(card);
}

const generateAllCharacters = async() => {
    const data = await getApi(URL1);
    data.map(character => createCards(character) );
}

const getCharacterByName = async (event) =>{
    containerCards.innerHTML = "";
    const data = await getApi(URL2+event.target.value);
    data.map(character => createCards(character));
}

window.addEventListener('DOMContentLoaded', generateAllCharacters);
txtCharacter.addEventListener('keyup' , getCharacterByName);



/*fetch('https://rickandmortyapi.com/api/character' , 
{
    method: 'GET' 
})
.then(response => response.json())
.then(function(json){
    var container = document.querySelector('.container');
    json.results.map(function(results){
        console.log(json)
        container.innerHTML+=`
        <div class="cards">
        <div class="div-img"> </div>
            <div> <img height="200px"src=` + results.image + `> </div><br>
            <div class="div1"> </div>
            <strong class="name"> ` + results.name + `</strong><br>
            <div class="div1"> </div>
            <span class="species">Especie: ` + results.species + `</span><br>
            <div class="div1"> </div>
            
            <span class="status">Dimensão: ` + results.location.name + `</span><br>
            <div class="div1"> </div>
            <span class="status">Dimensão: ` + results.location.type + `</span><br>
            <div class="div1"> </div>
            <span class="status">Status: ` + results.status + `</span><br>
            </div>
            <hr>
            
        `;
        
    })
})*/