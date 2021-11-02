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
    let noSpaceTitle = upperCaseTitle.replace(/ /g, '');
    return noSpaceTitle;
}

export function createImage(title, height, width) {
    let area = height * width;
    let halfArea = area / 2;
    let colorArray = [];
    // if (area % 2 === 0) {
    //     colorArray.push('000000');
    //     for (let i = 0; i < halfArea; i++) {
    //         colorArray.push('D8D8D9', 'FEFFFE',);  
    //     } 
    // } else { 
    for (let i = 0; i < halfArea; i++) {  
        colorArray.push('D8D8D9', 'FEFFFE', 'f3f3f4'); 
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
        pixel.style.backgroundColor = `#${colorArray[i]}`;
        canvas.append(pixel);
        
    }
}