"use strict";

var myInput = document.querySelector('.form__input');
/* myInput.addEventListener('invalid', () => {
    if (myInput.validity.valueMissing) {
        myInput.setCustomValidity('Что, рука отсохла? Хоть три буквы напечатай!')        
    } else if (myInput.validity.tooShort) {
        myInput.setCustomValidity('До трех считать не умеешь? Еще вводи!');        
    } else if (myInput.validity.tooLong) {
        myInput.setCustomValidity('Куда разогнался? Больше не влезет!');
    } else {
        myInput.setCustomValidity('');
    }
}); */

var minLength = 3;
var maxLength = 15;
myInput.addEventListener('input', function () {
  var valueLength = myInput.value.length;

  if (valueLength < minLength) {
    myInput.setCustomValidity("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0435\u0449\u0451 ".concat(minLength - valueLength, " \u0441\u0438\u043C\u0432."));
  } else if (valueLength > maxLength) {
    myInput.setCustomValidity("\u0423\u0434\u0430\u043B\u0438\u0442\u0435 \u043B\u0438\u0448\u043D\u0438\u0435 ".concat(maxLength - valueLength, " \u0441\u0438\u043C\u0432."));
  } else {
    myInput.setCustomValidity('');
  }

  myInput.reportValidity();
});
/* const MIN_NAME_LENGTH = 2;
const MAX_NAME_LENGTH = 15;

const userNameInput = document.querySelector('.form__input');

userNameInput.addEventListener('input', () => {
  const valueLength = userNameInput.value.length;

  if (valueLength < MIN_NAME_LENGTH) {
    userNameInput.setCustomValidity('Ещё ' + (MIN_NAME_LENGTH - valueLength) +' симв.');
  } else if (valueLength > MAX_NAME_LENGTH) {
    userNameInput.setCustomValidity('Удалите лишние ' + (valueLength - MAX_NAME_LENGTH) +' симв.');
  } else {
    userNameInput.setCustomValidity('');
  }

  userNameInput.reportValidity();
}); */

/* fetch('https://22.javascript.pages.academy/code-and-magick/data')
  .then((response) => response.json())
  .then((wizards) => {
    console.log(wizards);
  });
 */

var formData = new FormData();
formData.append('name', 'Nikita');
console.log(formData);