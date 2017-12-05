function stringManipulator(msg){
    return new Promise((resolve, reject)=>{
        resolve({
            asJson: function(){
                return new Promise((resolve,reject)=>
            {
                resolve({
                    words: msg.split(" ")
                })
            })
            },
            upperCased :msg.toUpperCase(),
            msgLength: msg.length
        })
    }
    
    )}

    async function nyString ()
    {
        const data = await stringManipulator ("JavaScript is cool, even when it sucks");
        const json = await data.asJson();
        console.log(json);
    }
    nyString();