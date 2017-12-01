const names =["aa","bb","cc","dd"];

//const n2 = names.concat("ee");
//n2.push("ee");
//const n2 =[...names,"ee"];
//const n2 =["ee", ...names];
const n2 =[
    ...names.slice(0,2),
    "ee",
    ...names.slice(2)
];
const n3 =n2.map(n=> n.toUpperCase())


console.log("Eqals???", names === n2);
console.log(n2);
console.log("n3",n3);
console.log(names);