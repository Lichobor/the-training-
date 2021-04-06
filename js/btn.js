const button = document.querySelector('#btn-1');
const list = document.querySelector('.list');
const items = list.children;

button.addEventListener('click', function (evt) {
    evt.preventDefault();
    if (list.classList.contains('hidden')) {
        list.classList.remove('hidden');        
    } else {
        list.classList.add('hidden');       
    }
});

const number = 25;
// export {number};