import { createImage, renderImage } from './utils.js';



const currentCanvas = createImage('coolTitle', 10, 10);
renderImage(currentCanvas);
const canvasDivs = document.querySelectorAll('.pixel-div');

const eraserBackgroundCanvas = createImage('eraser background', 10, 10);
const eraserColorArray = eraserBackgroundCanvas.colors;

for (let i = 0; i < canvasDivs.length; i++) {
    canvasDivs[i].addEventListener('click', () => {
        const selectedTool = document.querySelector('input[type=radio]:checked');
        // const originalBackground = canvasDivs[i].style.backgroundColor;
        if (selectedTool.id === 'pencil') {
            canvasDivs[i].style.backgroundColor = 'black';
        } else if (selectedTool.id === 'eraser') {
            canvasDivs[i].style.backgroundColor = `#${eraserColorArray[i]}`;
        }
    });
}