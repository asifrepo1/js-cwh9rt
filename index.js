// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

const promise = new Promise((resolve, reject) => {
  if (true) {
    resolve('It Worked');
  } else {
    reject('It broke');
  }
});

//Chain Promise  catch error if it happened before the catch not after catch block
promise.then((result) =>
  console.log(result + '!').then((results2) => console.log(results2 + '?'))
);
//Status of Promise
//Promise -> Pending ->  Settled ==> Resolved

//Promise give one state
