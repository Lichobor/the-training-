/* $('.container').append('<ul class="list list2"></ul>');
for(let i = 0; i < 5; i++) {
    let hobby = prompt('Что ты любишь делать?');
    $('.list2').append('<li class="item">' + hobby + '</li>')
}; */

/* let time = 500 
for (let i = 0; i < 5; i++) {       
    $('.text').fadeOut(time).fadeIn(time)
    time +=500
    console.log(time)    
} */

/* function hi () {
    alert('Hi, Nikita')
};

const time = setTimeout(hi, 3000);

clearTimeout(time) */

const ul = document.createElement('ul')
ul.classList.add('list', 'list2')
$('.container').append(ul)

let start = 200;

const moveHeading = function () {
    $('span').offset({
        left: start
    });

    start++

    if (start > 800) {
        start = 200
    }
};
setInterval(moveHeading, 10);

/* function clickHandler (event) {
    console.log('Click ' + event.pageX + ' ' + event.pageY)
}

$('.text').click(clickHandler)
 */

/* $('html').mousemove(
    function (event) {
        $('.ball').offset({
            left: event.pageX,
            top: event.pageY
        })
    }
); */

