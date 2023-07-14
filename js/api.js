fetch('https://rickandmortyapi.com/api/character' ,
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
            <span class="status">Status: ` + results.status + `</span><br>
            </div>
            <hr>
            
        `;
        
    })
})
const getApi = async (URL1) => {
    const response = await fetch(URL1);
    const data = await response.json()
    return data.results;
}
const URL1 = "https://rickandmortyapi.com/api/character/?name=";

const getCharacterByName = async (event) =>{
    container.innerHTML = "";
    const data = await getApi(URL1+event.target.value);
    data.map(results => then(results))

}