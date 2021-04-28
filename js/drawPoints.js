const canvas = document.querySelector('.canvas');
const ctx = canvas.getContext('2d');
const drawCircle = function (x, y, radius, color, width, fillCircle) {
    ctx.fillStyle = color;
    ctx.strokeStyle = color;
    ctx.lineWidth = width;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2, false)
    if (fillCircle) {
        ctx.fill()
    } else {
        ctx.stroke()
    }
};

$('.canvas').mousemove(function (Event) {
    drawCircle(Event.offsetX, Event.offsetY, 5, 'orange', 2, true)
});