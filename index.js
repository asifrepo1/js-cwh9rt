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

promise.then((result) => {
  console.log(result);
});
