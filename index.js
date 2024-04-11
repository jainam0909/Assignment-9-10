const canvas = document.getElementById('main');
const canvaContent = canvas.getContext('2d');
let isPainting = false;
let lineWidth = 5;
canvaContent.strokeStyle = '#000000'; 
const brushSizeDisplay = document.getElementById('brushSize');

function updateBrushSize() {
    lineWidth = slider.value;
    brushSizeDisplay.textContent = `Brush Size: ${lineWidth}`;
}

function setStrokeColor(color) {
    canvaContent.strokeStyle = color;
}

canvas.addEventListener('mousedown', (e) => {
    isPainting = true;
    canvaContent.beginPath();
    canvaContent.moveTo(e.offsetX, e.offsetY);
});

canvas.addEventListener('mousemove', (e) => {
    if (isPainting) {
        canvaContent.lineTo(e.offsetX, e.offsetY);
        canvaContent.lineWidth = lineWidth;
        canvaContent.stroke();
        canvaContent.beginPath();
        canvaContent.moveTo(e.offsetX, e.offsetY);
    }
});

canvas.addEventListener('mouseup', () => isPainting = false);
canvas.addEventListener('mouseout', () => isPainting = false);

document.getElementById('new').addEventListener('click', () => canvaContent.clearRect(0, 0, canvas.width, canvas.height));
document.getElementById('erase').addEventListener('click', () => setStrokeColor('#ffffff'));
document.getElementById('black').addEventListener('click', () => setStrokeColor('#000000'));
document.getElementById('pink').addEventListener('click', () => setStrokeColor('#F50057'));
document.getElementById('blue').addEventListener('click', () => setStrokeColor('#2979FF'));
document.getElementById('yellow').addEventListener('click', () => setStrokeColor('#FFD600'));

const slider = document.getElementById('slider');
slider.addEventListener('input', updateBrushSize);
