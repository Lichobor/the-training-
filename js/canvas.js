const canvas = document.querySelector('.canvas');
const ctx = canvas.getContext('2d');
/*  ctx.fillStyle = 'Red';
 ctx.fillRect(10, 10, 40, 80);
 ctx.fillStyle = 'Blue';
 ctx.fillRect(50, 10, 40, 80);
 ctx.fillStyle = 'yellow';
 ctx.fillRect(90, 10, 40, 80);
 ctx.fillStyle = 'green';
 ctx.fillRect(130, 10, 40, 80);
 ctx.strokeStyle = 'Pink'
 ctx.lineWidth = 4;
 ctx.strokeRect(172, 12, 36, 76); */

ctx.strokeStyle = 'brown';
ctx.lineWidth = 4;
ctx.strokeRect(100, 120, 40, 40)
ctx.beginPath();
ctx.moveTo(120, 160);
ctx.lineTo(120, 220);
ctx.moveTo(120, 190);
ctx.lineTo(90, 170);
ctx.moveTo(120, 190);
ctx.lineTo(150, 170);
ctx.moveTo(120, 220);
ctx.lineTo(100, 250);
ctx.moveTo(120, 220);
ctx.lineTo(140, 250);
ctx.stroke()

ctx.fillStyle = 'indigo';
ctx.strokeStyle = 'green';
ctx.lineWidth = 4;
ctx.beginPath()
ctx.moveTo(200, 150);
ctx.lineTo(250, 150);
ctx.lineTo(250, 200);
ctx.lineTo(200, 200);
ctx.lineTo(200, 148)
ctx.stroke();
ctx.fill()
const circle = function (width, color, x, y, radius, fill) {
    ctx.strokeStyle = color;
    ctx.lineWidth = width;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2, false);
    ctx.stroke();
    if (fill) {
        ctx.fillStyle = color;
        ctx.fill()
    }
};

circle(5, 'gold', 300, 200, 25, true);
circle(5, 'gold', 300, 245, 25);
circle(5, 'gold', 300, 290, 25);
circle(5, 'gold', 300, 335, 25);


circle(3, 'black', 300, 60, 50);
circle(3, 'blue', 300, 60, 40);
circle(3, 'green', 300, 60, 30);
circle(3, 'gold', 300, 60, 20);
circle(3, 'orange', 300, 60, 10);
circle(3, 'red', 300, 60, 3, true);

// snowman

circle(3, 'white', 450, 200, 50, true);
circle(3, 'white', 450, 115, 35, true);
circle(3, 'white', 450, 60, 20, true);
circle(3, 'black', 450, 100, 3, true);
circle(3, 'black', 450, 115, 3, true);
circle(3, 'black', 450, 130, 3, true);
circle(3, 'black', 440, 60, 3, true);
circle(3, 'black', 460, 60, 3, true);
circle(3, 'orange', 450, 70, 3, true);

ctx.fillStyle = 'black';
ctx.strokeStyle = 'black';
ctx.lineWidth = 1;
ctx.beginPath();
ctx.moveTo(430, 50);
ctx.lineTo(440, 20);
ctx.lineTo(460, 20);
ctx.lineTo(470, 50);
ctx.lineTo(430, 50);
ctx.stroke();
ctx.fill();

ctx.strokeStyle = 'brown';
ctx.lineWidth = 3;
ctx.beginPath();
ctx.moveTo(415, 100);
ctx.lineTo(380, 90);
ctx.moveTo(380, 90);
ctx.lineTo(370, 80);
ctx.moveTo(380, 90);
ctx.lineTo(370, 90);
ctx.moveTo(380, 90);
ctx.lineTo(370, 100);

ctx.moveTo(485, 100);
ctx.lineTo(520, 90);
ctx.moveTo(520, 90);
ctx.lineTo(530, 80);
ctx.moveTo(520, 90);
ctx.lineTo(530, 90);
ctx.moveTo(520, 90);
ctx.lineTo(530, 100);
ctx.stroke();

// array

let points = [
    [50, 50],
    [50, 100],
    [100, 100],
    [100, 50],
    [50, 50]
];

const drawPoints = function (array) {

    ctx.strokeStyle = 'aquamarine';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(array[0][0], array[0][1]);
    for (let i = 0; i < array.length; i++) {
        ctx.lineTo(array[i][0], array[i][1])
    }

    ctx.stroke();
};

// drawPoints(points);

let manyPoints = [
    [50, 50],
    [50, 100],
    [25, 120],
    [100, 50],
    [70, 90],
    [100, 90],
    [70, 120]
];

drawPoints(manyPoints)

