const redBall = document.createElement('div');
redBall.classList.add('ball');
$('.wrapper').append(redBall)

let go = 200;
let direction = 'right';
$('.ball').offset({
    left: go,
    top: go
})

const drive = function () {
    if (direction === 'right') {
        $('.ball').offset({
            left: go
        })
        go++
        if (go > 1120) {
            go = 200
            direction = 'down'
        }
    } else if (direction === 'down') {
        $('.ball').offset({
            top: go
        })
        go++
        if (go > 500) {
            go = 1120
            direction = 'left'
        }
    } else if (direction === 'left') {
        $('.ball').offset({
            left: go
        })
        go--
        if (go < 200) {
            go = 500
            direction = 'up'
        }
    } else if (direction === 'up') {
        $('.ball').offset({
            top: go
        })
        go--
        if (go < 200) {
            go = 200
            direction = 'right'
        }
    }
};

let time = 20
let int = setInterval(drive, time)
$('input').val(20 - time)

function stopDrive() {
    clearInterval(int)
} 

function speedUp() {    
    stopDrive()
    time--     
    let int = setInterval(drive, time)
    $('input').val(20 - time)
    
}

$('.ball').click(speedUp)