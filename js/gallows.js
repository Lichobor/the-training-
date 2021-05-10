// создаем массив случайных слов
let words = ['береза', 'дуб', 'липа'];
let word = words[Math.floor(Math.random() * words.length)];
let prompt = 'Подсказка: дерево (5 букв)'



// создаем пустой массив для будущего слова
let answerArray = [];
for (let i = 0; i < word.length; i++) {
    answerArray[i] = '_';
};

// создаем переменную, ограничивающую длину слова
let remainingLetters = word.length;
let attempts = remainingLetters * 2;

// создаем поля ввода-вывода
const form = document.querySelector('.game_form');
const input = document.querySelector('.game_input');
const out = document.querySelector('.game_output');
const wordbox = document.querySelector('.game_wordbox');
const cancel = document.querySelector('.game_cancel');
const modal = document.querySelector('.modal');

/* console.log(modal.textContent)
let fa = modal.textContent.split('')
console.log(fa)
fa[2] = 'ю'
let fu = fa.join('')
console.log(fu) */

wordbox.textContent = answerArray.join('')

out.textContent = 'Введите букву и нажмите "ОК", или нажмите "ОТМЕНА" для выхода из игры!'
// modal.textContent = prompt
const time = setTimeout(() => {
    modal.classList.add('show')
}, 3000)




form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    let quess = input.value
    if (quess.length < 1) {
        out.textContent = 'Пожалуйста, введите букву!'
    } else if (quess.length > 1) {
        out.textContent = 'Пожалуйста, введите только одну букву!'
    } else {
        out.textContent = 'Введите букву и нажмите "ОК", или нажмите "ОТМЕНА" для выхода из игры!'
    };

    for (let j = 0; j < word.length; j++) {
        if (word[j] === quess) {
            let literal = wordbox.textContent.split('')
            console.log(literal)
            literal[j] = quess
            console.log(literal)
        }
    };


    input.value = ""
    input.focus()

});

cancel.addEventListener('click', () => {
    location.reload()
})



// создаем игровой цикл
/* while (remainingLetters > 0 && attempts > 0) {
   alert(answerArray.join(' '));
   let quess = prompt('Введите букву или нажмите Отмена для выхода из игры.');
   if (quess === null) {
       break;
   } else if (quess.length !== 1) {
       alert('Пожалуйста, введите только одну букву!');
   } else {
       quess = quess.toLowerCase();
       attempts--;
       for (let j = 0; j < word.length; j++) {
           if (word[j] === quess && answerArray[j] === '_') {
               answerArray[j] = quess;
               remainingLetters--;
           }
       }
   }
}

// заканчиваем игру
alert(answerArray.join(' '));
if (attempts > 0) {
   alert('Отлично, вы победили! Было загадано слово ' + word);
} else {
   alert('Очень жаль, вы проиграли! Было загадано слово ' + word);
} */