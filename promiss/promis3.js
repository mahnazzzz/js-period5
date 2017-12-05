const fetch = require('node-fetch');

function getAlbumByIDs(ids, words){
const promisArray = ids.map(id=>{
    return getAlbumByID(id, words)
})
return new Promise ((resolve, reject)=>{
    Promise.all(promisArray).then(result=>{console.log(result);
        resolve(result)}).catch(reject)
})

}
function getAlbumByID(id, words){
return new Promise((resolve, reject)=>{
    fetch("https://jsonplaceholder.typicode.com/photos?albumId="+ id)
    .then(res=>res.json())
    .then((json)=>{
        resolve({albumId: id,
            album: json.filter(album =>{
                console.log(words);
        
          return  album.title.split(" ").length==words
        }).map(album=>{
            return {
                id: album.id,
                title : album.title
            }
        })});
    }).catch(err =>reject(err))
})

}

/* getAlbumByIDs([1,3]).then((result) =>{
console.log (result);

});
 */
module.exports = getAlbumByIDs;