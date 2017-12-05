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
stringManipulator("JavaScript is cool, even when it sucks")
.then(data => {
  console.log("From first promise: " + data.upperCased);
  console.log("From first promise: " + data.msgLength);
  return data.asJson()  //Opposite to when we do res.json() with fetch, since this
             //should return a JSON-string
})
 .then(res => {
  console.log("From second promise: ", res)
});
 