const myInput = document.querySelector('.form__input');
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

const minLength = 3;
const maxLength = 15

myInput.addEventListener('input', () => {
    const valueLength = myInput.value.length;
    
    if (valueLength < minLength) {
        myInput.setCustomValidity(`Введите ещё ${minLength - valueLength} симв.`)
    } else if (valueLength > maxLength) {
        myInput.setCustomValidity(`Удалите лишние ${maxLength - valueLength} симв.`)
    } else {
        myInput.setCustomValidity('')
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