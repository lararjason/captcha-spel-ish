fetch('universum.json')
.then(function(response){
    return response.json()
})
.then(function(data){
    buildplanets(data)
    //DO STUFF
})

function buildplanets(planets){
    planets.forEach(planet => {
        console.log(planet)
        const div = document.createElement('div')
        div.id = planet.name;
        div.classList.add("planet")
        div.style.backgroundImage = "url(planets/" + planet.name + ".jpg)";
        document.querySelector('body').append(div)
    });
}

