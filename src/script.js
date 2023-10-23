'use strict';

const form = document.querySelector('.form');
const emailInput = document.querySelector('.input-email');
const submitBtn = document.querySelector('.btn-submit');
const errorMsg = document.querySelector('.errorMsg');
const validationImg = document.querySelector('.imgValid');

const isRequired = value => (value === '' ? false : true);

const isEmailValid = email => {
	const emailRegex = new RegExp(
		/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
	);

	return emailRegex.test(email);
};

//////////////////////////

const showError = function (message = '') {
	emailInput.classList.add('border-red-600', 'text-red-600');
	errorMsg.textContent = message;
	errorMsg.classList.remove('hidden');
	validationImg.classList.remove('hidden');
};

const hideError = function (message = '') {
	emailInput.classList.remove('border-red-600', 'text-red-600');
	errorMsg.textContent = message;
	errorMsg.classList.add('hidden');
	validationImg.classList.add('hidden');
};

const checkEmail = function () {
	let isValid = false;

	const email = emailInput.value.trim();
	const validEmail = isEmailValid(email);

	if (!isRequired(email)) {
		showError('Email cannot be empty');
	} else if (!validEmail) {
		showError('Please provide a valid email');
	} else {
		isValid = true;
	}

	return isValid;
};

const validateForm = () => {
	let isEmailValid = checkEmail();

	let isFormValid = isEmailValid;

	return isFormValid;
};

form.addEventListener('submit', function (e) {
	e.preventDefault();

	let formValid = validateForm();

	if (formValid) {
		console.log('Form validated, can be send to server');
		emailInput.value = '';
	} else {
		console.log('Something is wrong. Check inputs!');
	}
});

emailInput.addEventListener('input', function () {
	hideError();
});
