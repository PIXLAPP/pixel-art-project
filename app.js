/* eslint-disable no-undef */
import {
    createImage,
    getStorage,
    renderImage,
    setStorage,
    titleKey,
    updateImage,
} from './utils.js';

let imageObject = {};
// let currentCanvas = createImage('coolTitle', 10, 10);
const header = document.querySelector('.header');
const canvasModule = document.getElementById('canvas-container');
const welcomeModule = document.querySelector('.welcome-container');
const displayTitle = document.getElementById('display-title');
const startBtn = document.getElementById('submit-title');
const artworkTitle = document.getElementById('artwork-title');
const clearBtn = document.querySelector('.clear-canvas');
const colorSelect = document.getElementById('color-select');
const saveBtn = document.getElementById('save-image');
const pencil = document.getElementById('pencil');
const heightInput = document.getElementById('height-input');
const widthInput = document.getElementById('width-input');
const homePageLogo = document.getElementById('logo');
const rainbowArray = ['#f54242', '#f59642', '#f5e942', '#84f542', '#42ddf5', '#b15beb', '#f779b4'];
const paletteBtn = document.getElementById('color-select-img');
let rainbowIndex = 0;
let eraserBackgroundCanvas = {};
let mousedown = 0;
document.body.onmousedown = function(){
    mousedown++;
};
document.body.onmouseup = function(){
    mousedown = 0;
};
document.body.oncontextmenu = function(){
    mousedown = 0;
};

if (!localStorage.getItem('ACTIVEIMAGE')) {
    localStorage.removeItem('ACTIVEIMAGE');
    // the above action is redundant, but needed to put something in this if statement
} else {
    const activeImage = getStorage('ACTIVEIMAGE');
    const activeImageObject = getStorage(activeImage);
    // imageObject = activeImageObject;
    eraserBackgroundCanvas = createImage('eraser background', activeImageObject.height, activeImageObject.width);
    welcomeModule.classList.add('hidden');
    header.classList.remove('hidden');
    canvasModule.classList.remove('hidden');
    displayTitle.textContent = activeImageObject.title;
    renderImage(activeImageObject);
    let canvasDivs = document.querySelectorAll('.pixel-div');
    rainbowIndex = 0;
    
    let mousedown = 0;
    document.body.onmousedown = function(){
        mousedown++;
    };
    document.body.onmouseup = function(){
        mousedown = 0;
    };

    document.body.oncontextmenu = function(){
        mousedown = 0;
    };
    
    for (let i = 0; i < canvasDivs.length; i++) {
        canvasDivs[i].addEventListener('mouseenter', () => {
            const selectedTool = document.querySelector(
                'input[type=radio]:checked'
            );
            if (mousedown) {
                if (selectedTool.id === 'pencil') {
                    canvasDivs[i].style.backgroundColor = colorSelect.value;
                } else if (selectedTool.id === 'eraser') {
                    canvasDivs[i].style.backgroundColor = eraserBackgroundCanvas.colors[i];
                } else if (selectedTool.id === 'rainbow') {
                    if (rainbowIndex === 7) {
                        rainbowIndex = 0;
                        canvasDivs[i].style.backgroundColor = rainbowArray[rainbowIndex];
                        rainbowIndex++;
                    } else {
                        canvasDivs[i].style.backgroundColor = rainbowArray[rainbowIndex];
                        rainbowIndex++;
                    } } 
            }});
        canvasDivs[i].addEventListener('click', () => {
            const selectedTool = document.querySelector(
                'input[type=radio]:checked'
            );
            if (selectedTool.id === 'pencil') {
                canvasDivs[i].style.backgroundColor = colorSelect.value;
            } else if (selectedTool.id === 'eraser') {
                canvasDivs[i].style.backgroundColor = eraserBackgroundCanvas.colors[i];
            } else if (selectedTool.id === 'rainbow') {
                if (rainbowIndex === 7) {
                    rainbowIndex = 0;
                    canvasDivs[i].style.backgroundColor = rainbowArray[rainbowIndex];
                    rainbowIndex++;
                } else {
                    canvasDivs[i].style.backgroundColor = rainbowArray[rainbowIndex];
                    rainbowIndex++;
                } } 
        });
    }
    pencil.checked = true;

}
let canvasDivs = document.querySelectorAll('.pixel-div');

homePageLogo.addEventListener('click', () => {
    localStorage.removeItem('ACTIVEIMAGE');
    location.reload();
});

startBtn.addEventListener('click', () => {
    let alreadyExists = false;
    let keysObject = getStorage('KEYS') || { keys: [] };
    let keys = keysObject.keys;
    let titleString = artworkTitle.value;
    const title = titleKey(titleString);
    for (let key of keys) {
        if (title === key) {
            alreadyExists = true;
        }
    }
    if (alreadyExists) {
        alert('Image title already in use. Please choose a new image title.');
    } else if (title === '') {
        alert('Please enter an image title.');
    } else if (heightInput.value > 50) {
        alert('Please enter a height and width below 50.');
    } else if (widthInput.value > 50) {
        alert('Please enter a height and width below 50.');
    } else {
        eraserBackgroundCanvas = createImage('eraser background', Number(heightInput.value), Number(widthInput.value));
        const newImage = createImage(titleString, Number(heightInput.value), Number(widthInput.value));
        renderImage(newImage);
    
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
    
        canvasDivs = document.querySelectorAll('.pixel-div');
        for (let i = 0; i < canvasDivs.length; i++) {
            canvasDivs[i].addEventListener('mouseenter', () => {
                const selectedTool = document.querySelector(
                    'input[type=radio]:checked'
                );
                if (mousedown) {
                    if (selectedTool.id === 'pencil') {
                        canvasDivs[i].style.backgroundColor = colorSelect.value;
                    } else if (selectedTool.id === 'eraser') {
                        canvasDivs[i].style.backgroundColor = eraserBackgroundCanvas.colors[i];
                    } else if (selectedTool.id === 'rainbow') {
                        if (rainbowIndex === 7) {
                            rainbowIndex = 0;
                            canvasDivs[i].style.backgroundColor = rainbowArray[rainbowIndex];
                            rainbowIndex++;
                        } else {
                            canvasDivs[i].style.backgroundColor = rainbowArray[rainbowIndex];
                            rainbowIndex++;
                        } } 
                }});
            canvasDivs[i].addEventListener('click', () => {
                const selectedTool = document.querySelector(
                    'input[type=radio]:checked'
                );
                if (selectedTool.id === 'pencil') {
                    canvasDivs[i].style.backgroundColor = colorSelect.value;
                } else if (selectedTool.id === 'eraser') {
                    canvasDivs[i].style.backgroundColor = eraserBackgroundCanvas.colors[i];
                } else if (selectedTool.id === 'rainbow') {
                    if (rainbowIndex === 7) {
                        rainbowIndex = 0;
                        canvasDivs[i].style.backgroundColor = rainbowArray[rainbowIndex];
                        rainbowIndex++;
                    } else {
                        canvasDivs[i].style.backgroundColor = rainbowArray[rainbowIndex];
                        rainbowIndex++;
                    } } 
            });
        }
        pencil.checked = true;
    }});

clearBtn.addEventListener('click', () => {
    const imageObject = document.querySelectorAll('.pixel-div');
    let objectArray = Array.from(imageObject);
    for (let i = 0; i < objectArray.length; i++) {
        objectArray[i].style.backgroundColor = eraserBackgroundCanvas.colors[i];
    }
});

saveBtn.addEventListener('click', () => {
    let key = titleKey(displayTitle.textContent);
    imageObject = getStorage(key);
    let colorArray = [];
    for (let i = 0; i < canvasDivs.length; i++) {
        colorArray.push(canvasDivs[i].style.backgroundColor);
    }
    const updatedImage = updateImage(imageObject, colorArray);
    setStorage(key, updatedImage);
    window.location.replace('./gallery/index.html');
});

paletteBtn.addEventListener('click', ()=>{
    pencil.checked = true;
});

const options = { scale: 1 };
const div = document.getElementById('canvas');
function takeshot() {
    window.scrollTo(0, 0);
    html2canvas(div, options).then(
        function(canvas) {
            document
                .getElementById('png-container')
                .appendChild(canvas);
            canvas.classList.add('test');
        });
}

const downloadBtn = document.getElementById('download-image');

downloadBtn.addEventListener('click', takeshot);
