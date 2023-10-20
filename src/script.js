'use strict';

const form = document.querySelector('.form');
const emailInput = document.querySelector('.input-email');
const submitBtn = document.querySelector('.btn-submit');
const errMsg = document.querySelector('.errorMsg');

const isRequired = value => (value === '' ? false : true);

const isEmailValid = email => {
	const emailRegex = new RegExp(
		/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
	);

	return emailRegex.test(email);
};

const showError = (input, msg = '') => {
	const formInput = input.closest('.input-container');
	const img = formInput.querySelector('.imgValid');

	// show error icon
	img.src = './images/icon-error.svg';
	img.classList.remove('hidden');

	// show error msg
	const error = formInput.querySelector('.errorMsg');
	error.classList.remove('.hidden');
	error.textContent = msg;

	// border color
	emailInput.classList.remove(
		'border-customPink',
		'placeholder:text-customPink',
		'outline-customPink',
		'[&:not(:focus)]:text-green-500',
		'focus:text-green-500',
		'[&:not(:focus)]:outline-green-500',
		'focus:outline-green-500',
		'text-green-500',
		'[&:not(:focus)]:text-customPink'
	);

	email.classList.add(
		'focus:text-red-500',
		'text-red-500',
		'[&:not(:focus)]:text-red-500',
		'border-red-500',
		'[&:not(:focus)]:outline-red-500',
		'focus:outline-red-500'
	);
};

const showSucces = input => {
	const formInput = input.closest('.input-container');
	const img = formInput.querySelector('.imgValid');

	// show error icon
	img.src = './images/icon-success.svg';
	img.classList.remove('hidden');

	// show error msg
	const error = formInput.querySelector('.errorMsg');
	error.textContent = '';
	error.classList.add('.hidden');
};

//////////////////////////

let validEmail;

const checkEmail = () => {
	// Init value
	let valid = false;

	// Get input value
	const email = emailInput.value.trim();

	// Validation
	if (!isRequired(email)) {
		showError(emailInput, 'Email cannot be empty');
	} else if (!isEmailValid(email)) {
		errMsg.classList.remove('hidden');
		errMsg.textContent = 'Please provide a valid email';
	} else {
		validEmail = true;
		errMsg.textContent = '';
		errMsg.classList.add('hidden');
	}
};

form.addEventListener('submit', function (e) {
	e.preventDefault();
	console.log(e);
	checkEmail();
});

form.addEventListener('input', function (e) {
	checkEmail();
});
console.log(emailInput.closest('.input-container').querySelector('.errorMsg'));
