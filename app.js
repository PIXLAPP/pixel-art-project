import {
    createImage,
    getStorage,
    renderImage,
    setStorage,
    titleKey,
    updateImage,
} from './utils.js';

let imageObject = {};
let currentCanvas = createImage('coolTitle', 10, 10);
const header = document.querySelector('.header');
const canvasModule = document.getElementById('canvas-container');
const welcomeModule = document.querySelector('.welcome-container');
const displayTitle = document.getElementById('display-title');
const startBtn = document.getElementById('submit-title');
const artworkTitle = document.getElementById('artwork-title');
const clearBtn = document.querySelector('.clear-canvas');
const colorSelect = document.getElementById('color-select');
const saveBtn = document.getElementById('save-image');
const eraserBackgroundCanvas = createImage('eraser background', 10, 10);
const eraserColorArray = eraserBackgroundCanvas.colors;

if (!localStorage.getItem('ACTIVEIMAGE')) {
    renderImage(currentCanvas);
} else {
    const activeImage = getStorage('ACTIVEIMAGE');
    const activeImageObject = getStorage(activeImage);
    imageObject = activeImageObject;
    welcomeModule.classList.add('hidden');
    header.classList.remove('hidden');
    canvasModule.classList.remove('hidden');
    displayTitle.textContent = activeImageObject.title;
    renderImage(activeImageObject);
}

//canvasDivs need to stay below if/else statement
const canvasDivs = document.querySelectorAll('.pixel-div');

startBtn.addEventListener('click', () => {
    let titleString = artworkTitle.value;
    const title = titleKey(titleString);
    const newImage = createImage(titleString, 10, 10);

    setStorage(title, newImage);
    // push title to array in KEYS object
    const keyArrayObject = getStorage('KEYS') || { keys: [] };
    const keyArray = keyArrayObject.keys;
    keyArray.push(title);
    setStorage('KEYS', keyArrayObject);

    welcomeModule.classList.add('hidden');
    header.classList.remove('hidden');
    canvasModule.classList.remove('hidden');
    displayTitle.textContent = titleString;

    const pencil = document.getElementById('pencil');
    pencil.checked = true;
});

clearBtn.addEventListener('click', () => {
    const imageObject = document.querySelectorAll('.pixel-div');
    let objectArray = Array.from(imageObject);
    for (let i = 0; i < objectArray.length; i++) {
        objectArray[i].style.backgroundColor = eraserColorArray[i];
    }
});

saveBtn.addEventListener('click', () => {
    let key = titleKey(displayTitle.textContent);
    imageObject = getStorage(key);
    let colorArray = [];
    for (let i = 0; i < canvasDivs.length; i++) {
        colorArray.push(canvasDivs[i].style.backgroundColor);
    }
    console.log(key);
    const updatedImage = updateImage(imageObject, colorArray);
    setStorage(key, updatedImage);
    window.location.replace('./gallery/index.html');
});

for (let i = 0; i < canvasDivs.length; i++) {
    canvasDivs[i].addEventListener('click', () => {
        const selectedTool = document.querySelector(
            'input[type=radio]:checked'
        );
        if (selectedTool.id === 'pencil') {
            canvasDivs[i].style.backgroundColor = colorSelect.value;
        } else if (selectedTool.id === 'eraser') {
            canvasDivs[i].style.backgroundColor = eraserColorArray[i];
        }
    });
}
 
const rainbowArray = ['#f54242', '#f59642', '#f5e942', '#84f542', '#42ddf5', '#b15beb', '#f779b4'];
let rainbowIndex = 0;
for (let i = 0; i < canvasDivs.length; i++) {
    canvasDivs[i].addEventListener('click', () => {
        const selectedTool = document.querySelector(
            'input[type=radio]:checked'
        );
        if (selectedTool.id === 'rainbow') {
            if (rainbowIndex === 7) {
                rainbowIndex = 0;
            } else {
                canvasDivs[i].style.backgroundColor = rainbowArray[rainbowIndex];
                rainbowIndex++;
            } 
            
        }
    });
}
