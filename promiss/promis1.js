const cypto = require('crypto');

function callbackfunction(size, callback) {

    require('crypto').randomBytes(size, function (err, buffer) {
        let secureHex = buffer.toString('hex');
        callback(secureHex);
    });

}

function promisFunction(size) {
    return new Promise((resolve, reject) => {
        require('crypto').randomBytes(size, function (err, buffer) {
            let secureHex = buffer.toString('hex');
            resolve({ size: size, random: secureHex });
        });
    })
}

const randomAf = {
    title: "6 Secure Randoms",
    randoms: []
}

function function2(size, callback) {
    callbackfunction(size, function (random) {
        randomAf.randoms.push({ lenght: size, random: random })
        callback();
    });
}
/*  
 function2(16, function(){
     function2(24, function(){
         function2(32, function(){
             console.log(randomAf)
           })
       })
   }); */


/*  function2(24);
 function2(32);
 console.log(randomAf);
  */

/* promisFunction(8).then((result)=>{
    
    console.log(result);
}) */

/* const promisesArray =[];
promisesArray.push(promisFunction(24));
promisesArray.push(promisFunction(32));
promisesArray.push(promisFunction(8));
promisesArray.push(promisFunction(16));
promisesArray.push(promisFunction(40));
promisesArray.push(promisFunction(48));

Promise.all(promisesArray).then((result)=>{
    const mapResult = result.sort((a,b)=>{
        return b.size >a.size 
    }).map(p=>{ 
       return{ length:p.size, random: p.random}
    })
    randomAf.randoms= mapResult;
    console.log(randomAf);
}) */

function makeSecureRandoms(sizies) {
    const promisesArray = sizies.map(size => {
        return promisFunction(size);
    });
    return new Promise((resolve, reject) => {

        Promise.all(promisesArray).then((result) => {
            const mapResult = result.sort((a, b) => {
                return b.size > a.size
            }).map(p => {
                return { length: p.size, random: p.random }
            })
            randomAf.randoms = mapResult;
            resolve(randomAf);
        })


    })

}

/* makeSecureRandoms([8,16,24,32,40,48]).then(result =>{
    console.log(result);
}) */



module.exports = makeSecureRandoms;

