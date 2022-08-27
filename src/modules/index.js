// import { RickMorty } from "./app/services/rickmorti.service.js"; // ESTE SERVICIO NO EXISTE || ES UN EJEMPLO

const promesas = [
    fetch("https://rickandmortyapi.com/api/character")
    .then((resp) => resp.json()),
    // .then((data) => console.log(data)),

    fetch("https://rickandmortyapi.com/api/characterFallara/")
    .then((resp) => resp.json()),
    // .then((data) => console.log(data)),

    fetch("https://rickandmortyapi.com/api/character/?page=19")
    .then((resp) => resp.json()),
    // .then((data) => console.log(data))
]

Promise.allSettled(promesas).then(data => console.log(data))



/*:::::::::::::::::::::::::::: EJEMPLO DE ARREGLO VARIAS PROMESAS CON SERVICIOS FUNIÓN CALLBACK ::::::::::::::::::::::::::::*/

//Arreglo de promesas
const promesas2 = [
    //DESDE SERVICIOS || NO EXISTEN || SON UN EJEMPLO
    rickMorty.rickMortyAPI1(),
    rickMorty.rickMortiAPI2()
]

//Función Callback con control de promesas allSettled
const getData = (callback) => {
    Promise.allSettled(promesas2)
        .then(data => callback(data))
        .catch(error => console.log(error))
        .finally(() => console.log("Arreglo de promesas terminado"))
}

//Encendido función obtención de data
getData(data => {
    console.log(data)
})