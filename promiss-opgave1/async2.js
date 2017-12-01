const fetch = require("node-fetch");

async function fetchHelper(url) {
 const res = await fetch(url);
 return await res.json();
}
const URL = "http://api.icndb.com/jokes/random"

async function parallelTester() {
 try {
   const p1 = fetchHelper(URL);
   const p2 = fetchHelper(URL);
   const res1 = await p1;
   const res2 = await p2;
   console.log(res1.value.joke);
   console.log(res2.value.joke)
 } catch (err) {
   //jskajdflsj
 }
};

async function serialTester() {
 const res1 = await fetchHelper(URL);
 const res2 = await fetchHelper(URL);
 console.log(res1.value.joke);
 console.log(res2.value.joke);
};
parallelTester();