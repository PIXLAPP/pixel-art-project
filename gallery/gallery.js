import { getStorage, setStorage, titleKey } from '../utils.js';
import { gallery } from '../assets/our-art.js';

const keysObject = getStorage('KEYS');
const keys = keysObject.keys;
const galleryContainer = document.querySelector('.gallery-container__cards');


function renderGalleryImage(imageObject) {
    const canvas = document.createElement('div');
    canvas.style.gridTemplateColumns = `repeat(${imageObject.width}, 1fr)`;
    canvas.style.gridTemplateRows = `repeat(${imageObject.height}, 1fr)`;
    const colorArray = imageObject.colors;
    const area = imageObject.height * imageObject.width;
    for (let i = 0; i < area; i++) {
        const pixel = document.createElement('div');
        pixel.style.backgroundColor = colorArray[i];
        pixel.classList.add('pixel-div');
        if (imageObject.height === imageObject.width) {
            pixel.style.width = `${Math.round(100 / imageObject.height)}px)`;
            pixel.style.height = `${Math.round(100 / imageObject.height)}px`;
            canvas.style.height = '100px';
            canvas.style.width = '100px';
        } else if (imageObject.height > imageObject.width) {
            pixel.style.width = `${Math.round(100 / imageObject.height)}px`;
            pixel.style.height = `${Math.round(100 / imageObject.height)}px`;
            canvas.style.height = `${Math.round(imageObject.height * (100 / imageObject.height))}px`;
            canvas.style.width = `${Math.round(imageObject.width * (100 / imageObject.height))}px`;
        } else {
            pixel.style.width = `${Math.round(100 / imageObject.width)}px`;
            pixel.style.height = `${Math.round(100 / imageObject.width)}px`;
            canvas.style.width = `${Math.round(imageObject.width * (100 / imageObject.width))}px`;
            canvas.style.height = `${Math.round(imageObject.height * (100 / imageObject.width))}px`;
        }
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

for (let images of gallery) {
    let exists = false;
    for (let key of keys) {
        if (key === titleKey(images.title)) {
            exists = true;
        }
    }
    if (!exists) {
        const galleryCard = document.createElement('div');
        galleryCard.classList.add('gallery-card');
        galleryCard.addEventListener('click', () => {
            setStorage('ACTIVEIMAGE', titleKey(images.title));
            keys.push(titleKey(images.title));
            setStorage('KEYS', keysObject);
            setStorage(titleKey(images.title), images);
            window.location.replace('../index.html');
        });
        const galleryCanvas = renderGalleryImage(images);
        galleryCanvas.classList.add('gallery-canvas');
        const cardTitle = document.createElement('p');
        cardTitle.textContent = images.title;
        galleryCard.append(galleryCanvas, cardTitle);

        galleryContainer.append(galleryCard);
    }}
