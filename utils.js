export function setStorage(key, imageObject) {
    const imageString = JSON.stringify(imageObject);
    localStorage.setItem(key, imageString);
}

export function getStorage(key) {
    const imageString = localStorage.getItem(key);
    return JSON.parse(imageString);
}

export function titleKey(imageTitle) {
    let upperCaseTitle = imageTitle.toUpperCase();
    let noSpaceTitle = upperCaseTitle.replace(/[^a-zA-Z0-9]/g, '');
    return noSpaceTitle;
}

export function createImage(title, height, width) {
    let area = height * width;
    // let halfArea = area / 2;
    let thirdArea = Math.ceil(area / 3);
    let colorArray = [];

    for (let i = 0; i < thirdArea; i++) {  
        colorArray.push('rgb(216, 216, 217)', 'rgb(254, 255, 254)', 'rgb(243, 243, 244)',); 
    }
    
    let newImage = {
        title: title,
        height: 10,
        width: 10,
        colors: colorArray,
    };
    return newImage;    
}

export function updateImage(imageObject, colorArray) {
    imageObject.colors = colorArray;
    return imageObject;
}

export function renderImage(imageObject) {
    const canvas = document.getElementById('canvas');
    const colorArray = imageObject.colors;
    const area = imageObject.height * imageObject.width;
    for (let i = 0; i < area; i++) {
        const pixel = document.createElement('div');
        pixel.style.backgroundColor = colorArray[i];
        pixel.classList.add('pixel-div');
        canvas.append(pixel);  
    }
}
