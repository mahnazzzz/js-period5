var fetch = require("isomorphic-fetch");

function getPlanetforFirstSpeciesInFirstMovieForPerson(id) {
    fetch("https://swapi.co/api/people/" + id).then(result => result.json()).then(json => {
        //console.log(json);
        const name = json.name;
        const filmUrl = json.films[3];
        fetch(filmUrl).then(result => result.json()).then(json => {

            const filmName = json.title;

            const speciesUrl = json.species[3];

            //console.log(speciesUrl);
            fetch(speciesUrl).then(result => result.json()).then(json => {
                const specieName = json.name;
               // console.log(specieName);
                const homeworldUrl = json.homeworld;
                fetch(homeworldUrl).then(result => result.json()).then(json => {
                    const planetname = json.name;
                    console.log("name:", name);
                    console.log("first film:", filmName);
                    console.log("first species:", specieName);
                    console.log("homeworld for species:", planetname);
                })
            })
        })

    })

}
getPlanetforFirstSpeciesInFirstMovieForPerson(1);