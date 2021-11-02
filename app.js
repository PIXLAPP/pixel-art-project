import { createImage, renderImage } from './utils.js';

const selectedTool = document.querySelector('input[type=radio]:checked');

const currentCanvas = createImage('coolTitle', 10, 10);
renderImage(currentCanvas);
const canvasDivs = document.querySelectorAll('.pixel-div');
console.log(canvasDivs);

for (let div of canvasDivs) {
    div.addEventListener('click', () => {
        div.style.backgroundColor = 'pink';
    });
}