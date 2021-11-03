import { getStorage } from '../utils.js';

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

for (let key of keys) {
    const galleryImageObject = getStorage(key);
    const galleryCard = document.createElement('div');
    const galleryCanvas = renderGalleryImage(galleryImageObject);
    galleryCanvas.classList.add('gallery-canvas');
    const cardTitle = document.createElement('p');
    cardTitle.textContent = galleryImageObject.title;
    galleryCard.append(galleryCanvas, cardTitle);

    galleryContainer.append(galleryCard);
}
// loop through array of KEYS to access all imageObjects in local storage
// call a refactored renderImage function on each object
//     - Create smaller canvas div, 
//           - to contain colored divs

// Template for gallery card
{/* <div class="gallery-card">
<img
    src="../assets/pixel-img.png"
    class="gallery-thumb"
/>
<p class="title">My Kitty</p>
</div> */}
