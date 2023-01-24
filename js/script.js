"use strict"

const iconMenu = document.querySelector('.menu__icon');
var slider = document.getElementById("myRange");
var output = document.getElementById("slide-value");
const selectSingle = document.querySelector('.__select');
const selectSingle_title = selectSingle.querySelector('.__select__title');
const selectSingle_labels = selectSingle.querySelectorAll('.__select__label');

if(iconMenu){
	const menuBody = document.querySelector('.menu__body')
	iconMenu.addEventListener("click",function(e) {
		document.body.classList.toggle('_lock')
		iconMenu.classList.toggle('_active');
		menuBody.classList.toggle('_active');
	})
}

// Toggle menu
selectSingle_title.addEventListener('click', () => {
  if ('active' === selectSingle.getAttribute('data-state')) {
    selectSingle.setAttribute('data-state', '');
  } else {
    selectSingle.setAttribute('data-state', 'active');
  }
});

// Close when click to option
for (let i = 0; i < selectSingle_labels.length; i++) {
  selectSingle_labels[i].addEventListener('click', (evt) => {
    selectSingle_title.textContent = evt.target.textContent;
    selectSingle.setAttribute('data-state', '');
  });
}


output.innerHTML = `${slider.value} %`;

slider.oninput = function() {
  output.innerHTML = `${this.value} %`;
}