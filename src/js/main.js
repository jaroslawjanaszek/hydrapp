"use strict";

// service worker registration - remove if you're not going to use it

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function () {
    navigator.serviceWorker.register('serviceworker.js').then(function (registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function (err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}

// place your code below

const counter = document.querySelector('.glass__counter--js');
const add = document.querySelector('.glass__buttons--add-js');
const remove = document.querySelector('.glass__buttons--remove-js');
const key = new Date().toISOString().slice(0, 10);
let glasses = localStorage.getItem(key);


if (localStorage.getItem(key)) {
  counter.innerHTML = localStorage.getItem(key);
} else {
  localStorage.setItem(key, '0');
};

add.addEventListener('click', (e) => {
  localStorage.setItem(key, ++glasses);
  counter.innerHTML = glasses;
}
);

remove.addEventListener('click', (e) => {
  if (glasses > 0) {
    localStorage.setItem(key, --glasses);
    counter.innerHTML = glasses;
  }
}
);

