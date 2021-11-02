import { createImage, renderImage, setStorage, titleKey } from './utils.js';

const currentCanvas = createImage('coolTitle', 10, 10);
renderImage(currentCanvas);
const canvasDivs = document.querySelectorAll('.pixel-div');
const submitBtn = document.getElementById('submit-title');
const artworkTitle = document.getElementById('artwork-title');
const header = document.querySelector('.header');
const canvasModule = document.getElementById('canvas-container');
const welcomeModule = document.querySelector('.welcome-container');
const displayTitle = document.getElementById('display-title');

const eraserBackgroundCanvas = createImage('eraser background', 10, 10);
const eraserColorArray = eraserBackgroundCanvas.colors;

submitBtn.addEventListener('click', ()=>{
    let titleString = artworkTitle.value;
    const title = titleKey(titleString);
    const newImage = createImage(titleString, 10, 10);

    setStorage(title, newImage);

    welcomeModule.classList.add('hidden');
    header.classList.remove('hidden');
    canvasModule.classList.remove('hidden');
    displayTitle.textContent = titleString;
});

for (let i = 0; i < canvasDivs.length; i++) {
    canvasDivs[i].addEventListener('click', () => {
        const selectedTool = document.querySelector('input[type=radio]:checked');
        if (selectedTool.id === 'pencil') {
            canvasDivs[i].style.backgroundColor = 'black';
        } else if (selectedTool.id === 'eraser') {
            canvasDivs[i].style.backgroundColor = `#${eraserColorArray[i]}`;
        }
    });
}
