let a= {street :"lyngbyvej 45"}
let person = {fName :"kurt", lName:"wongut", address:a};
console.log(person);


function changePerson(p){
    p.lName ="Hansen";
    return p;
}

function changeImutable(p){
    //let nemP = object.assign({},p,{IName:"Hansen"})
    let nemP = {...p,IName:"Hansen"};
    nemP.address.street = "changed";
    return nemP;
}

let p2 = changeImutable(person);

console.log("equal??", person === p2)
//let p2 = changePerson(person);
console.log("p2", p2);
console.log("p1", person);