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