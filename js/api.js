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

            <div> <img src=` + results.image + `> </div><br>
            <div class="teste"> </div>
            <strong class="name"> ` + results.name + `</strong><br>
            <div class="teste"> </div>
            <span class="species">Especie:` + results.species + `</span><br>
            <div class="teste1"> </div>
            <i class="status">Status: ` + results.status + `</i><br>
            <div class="teste2"> </div>
            <hr>
            `;
        
    })
})