const width = 400
const height = 400
let clicks = 0

const target = {
    x: getRandomNumber(width),
    y: getRandomNumber(height)
};

function getRandomNumber(size) {
    return Math.floor(Math.random() * size)
};

function getDistance(event, target) {
    let diffX = event.offsetX - target.x
    let diffY = event.offsetY - target.y
    return Math.sqrt((diffX * diffX) + (diffY * diffY))
}

function getDistancePrompt(distance) {
    if (distance < 10) {
        $('#box').removeClass('none')
        return "Урааа! Нашёл!!!"        
    } else if (distance < 20) {
        return "Почти попал!"
    } else if (distance < 40) {
        return "Совсем близко!"
    } else if (distance < 60) {
        return "Близко!"
    } else if (distance < 80) {
        return "Где-то недалеко..."
    } else if (distance < 100) {
        return "Далековато..."
    } else if (distance < 150) {
        return "Отсюда не видать!"
    } else if (distance < 200) {
        return "А карта не врёт?"
    } else if (distance < 250) {
        return "Точно этот остров?"
    } else if (distance < 300) {
        return "Может, зря плыли?"
    } else if (distance < 350) {
        return "Нет тут ничего!"
    } else {
        return "Возвращаемся!"
    }
};


$('.treasure').click(function (event) {
    clicks++
    $('.score').text(10 - clicks)
    let distance = getDistance(event, target)
    let distancePrompt = getDistancePrompt(distance)
    $('.alert').text(distancePrompt)
    if (clicks > 10) {
        $('.score').text("")
        $('#shov').removeClass('none')
        $('.alert').text("Упс! Сломалась лопата...")        
    }
});