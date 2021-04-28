// создаем массив случайных слов
let words = ['береза', 'тополь', 'яблоня'];
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
const form = document.querySelector('.game_form')
const input = document.querySelector('.game_input');
const out = document.querySelector('.game_output');
const wordbox = document.querySelector('.game_wordbox')


out.textContent = 'Введите букву и нажмите "ОК", или нажмите "ОТМЕНА" для выхода из игры!'
let quess = input.value
console.log(input.value)
wordbox.textContent = prompt
form.addEventListener('submit', (evt) => {
    evt.preventDefault()
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