// function getList(data) {

//     return fetch('http://universities.hipolabs.com/search?country='+data)
//     .then(data => data.json())
// }

function getList() {

    return fetch('https://akabab.github.io/starwars-api/api/all.json')
    .then(data => data.json())
}


export default getList;