const cryptoR = require('crypto');

function makeSecureRandom(size) {
    
        return new Promise((resolve, reject) => {
            cryptoR.randomBytes(size, function (err, buffer) {
                if (err) {
                    reject();
                } else {
                    let secureHex = buffer.toString('hex');
                    resolve(secureHex);
                }
            })
        })
    }

async function waitAsync() {
    const result = await makeSecureRandoms(4);
    console.log(result);
}

waitAsync();
