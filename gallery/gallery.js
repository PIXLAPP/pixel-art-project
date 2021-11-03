import { getStorage, setStorage } from '../utils.js';

const keysObject = getStorage('KEYS');
const keys = keysObject.keys;
const galleryContainer = document.querySelector('.gallery-container__cards');

function renderGalleryImage(imageObject) {
    const canvas = document.createElement('div');
    const colorArray = imageObject.colors;
    const area = imageObject.height * imageObject.width;
    for (let i = 0; i < area; i++) {
        const pixel = document.createElement('div');
        pixel.style.backgroundColor = colorArray[i];
        pixel.classList.add('pixel-div');
        canvas.append(pixel);
    }
    return canvas;
}

localStorage.removeItem('ACTIVEIMAGE');

for (let key of keys) {
    const galleryImageObject = getStorage(key);
    const galleryCard = document.createElement('div');
    galleryCard.classList.add('gallery-card');
    galleryCard.addEventListener('click', () => {
        setStorage('ACTIVEIMAGE', key);
        window.location.replace('../index.html');
    });
    const galleryCanvas = renderGalleryImage(galleryImageObject);
    galleryCanvas.classList.add('gallery-canvas');
    const cardTitle = document.createElement('p');
    cardTitle.textContent = galleryImageObject.title;
    galleryCard.append(galleryCanvas, cardTitle);

    galleryContainer.append(galleryCard);
}
