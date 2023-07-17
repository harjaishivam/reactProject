function getList() {
    return fetch('https://rickandmortyapi.com/api/character/1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20')
    .then(data => data.json())
}

export default getList;