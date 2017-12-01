let promiseFactory = function (msg, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => { //To demonstrate an async call
      var ok = false;  // simulates the result of the operation
      if (ok) {
        resolve(msg);
      }
      else {
        reject("UPPPPs");
      }
    }, delay);
  });
};
 
async function ParalleDemo() {
  console.log("Before");
  let p1 = promiseFactory("Msg from Promise 1", 2000);
  let p2 = promiseFactory("Msg from Promise 2", 2000);
  let p3 = promiseFactory("Msg from Promise 3", 2000);
  let p4 = promiseFactory("Msg from Promise 4", 2000);
  try {
    const allResults = await Promise.all([p1, p2, p3, p4])
    console.log(allResults.join("\n"))
  } catch (err) {
    console.log("Handle error: " + err);
  }
  console.log("After")
}
 
async function serialDemo() {
  console.log("Before");
  let p = await promiseFactory("Msg from Promise", 2000);
  console.log(p);
  let p1 = await promiseFactory("Msg from Promise", 2000);
  console.log(p1);
  let p2 = await promiseFactory("Msg from Promise", 2000);
  console.log(p2);
  let p3 = await promiseFactory("Msg from Promise", 2000);
  console.log("After: " + p3);
}
ParalleDemo();
