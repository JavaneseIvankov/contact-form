// const btnSubmit = document.getElementById('form-submit');
const optionsButton = document.getElementsByClassName('option-item');
const form = document.getElementById('form');
const popUp = document.getElementById('alert');

for (let i = 0; i < optionsButton.length; i++) {
   optionsButton[i].addEventListener('click', (e) => {
      let radio = e.target.querySelector('input');
      radio.checked = radio.checked || true;
   });
}


form.addEventListener('submit', (e) => {
   e.preventDefault();
   if (e.target.checkValidity()) {
      popUp.classList.add('popover');
      form.reset();
   }
});

popUp.addEventListener('animationend', () => {
   popUp.classList.remove('popover');
})
