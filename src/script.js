'use strict';

const form = document.querySelector('.form');
const emailInput = document.querySelector('.input-email');
const submitBtn = document.querySelector('.btn-submit');
const errMsg = document.querySelector('.errorMsg');

const isRequired = (value) => (value === '' ? false : true);

const isEmailValid = (email) => {
  const emailRegex = new RegExp(
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );

  return emailRegex.test(email);
};

//////////////////////////

form.addEventListener('submit', function (e) {
  e.preventDefault();
});
