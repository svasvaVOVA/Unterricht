'use strict';

// localStorage.setItem('number', 6);
// localStorage.removeItem('number');


// console.log(localStorage.getItem('number'));

// localStorage.clear();


const checkbox = document.querySelector('#checkbox');
const form = document.querySelector('form');
const change = document.querySelector('#color');


if (localStorage.getItem('isChecked', true)) {
	checkbox.checked = true;
}

checkbox.addEventListener('change', () => {
	localStorage.setItem('isChecked', true);

		if (localStorage.getItem('bg') === 'changed') {
      form.style.backgroundColor = 'red';
    } 
});

change.addEventListener('click', () => {
	if (localStorage.getItem('bg') === 'changed') {
		localStorage.removeItem('bg');
		form.style.backgroundColor = 'blue';
	} else {
		localStorage.setItem('bg', 'changed');
		form.style.backgroundColor = 'red';
	}
});
