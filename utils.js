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

function isEven(num) {
    return num % 2 === 0;
}

export function createImage(title, heightInput, widthInput) {
    let area = heightInput * widthInput;
    let halfArea = Math.ceil(area / 2);
    let colorArray = [];
    let x = widthInput / 2;
    let y = 1;
    if (isEven(widthInput) === true) {
        for (let i = 0; i < halfArea; i++) {  
            if (isEven(y) === true) {
                colorArray.push('rgb(243, 243, 244)', 'rgb(216, 216, 217)');
                x--;
                if (x === 0){
                    y++;
                    x = widthInput / 2;
                }
            } else {
                colorArray.push('rgb(216, 216, 217)', 'rgb(243, 243, 244)');
                x--;
                if (x === 0){
                    y++;
                    x = widthInput / 2;
                }
            }
        }
    } else { 
        for (let i = 0; i < halfArea; i++) {  
            colorArray.push('rgb(216, 216, 217)', 'rgb(243, 243, 244)'); 
        }

    }
    while (colorArray.length > area) {
        colorArray.pop();
    }

    let newImage = {
        title: title,
        height: heightInput,
        width: widthInput,
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
    canvas.style.gridTemplateColumns = `repeat(${imageObject.width}, 1fr)`;
    canvas.style.gridTemplateRows = `repeat(${imageObject.height}, 1fr)`;
    const colorArray = imageObject.colors;
    const area = imageObject.height * imageObject.width;
    for (let i = 0; i < area; i++) {
        const pixel = document.createElement('div');
        pixel.style.backgroundColor = colorArray[i];
        pixel.classList.add('pixel-div');
        if (imageObject.height === imageObject.width) {
            pixel.style.width = `${Math.round(500 / imageObject.height)}px)`;
            pixel.style.height = `${Math.round(500 / imageObject.height)}px`;
            canvas.style.height = '500px';
            canvas.style.width = '500px';
        } else if (imageObject.height > imageObject.width) {
            pixel.style.width = `${Math.round(500 / imageObject.height)}px`;
            pixel.style.height = `${Math.round(500 / imageObject.height)}px`;
            canvas.style.height = `${Math.round(imageObject.height * (500 / imageObject.height))}px`;
            canvas.style.width = `${Math.round(imageObject.width * (500 / imageObject.height))}px`;
        } else {
            pixel.style.width = `${Math.round(500 / imageObject.width)}px`;
            pixel.style.height = `${Math.round(500 / imageObject.width)}px`;
            canvas.style.width = `${Math.round(imageObject.width * (500 / imageObject.width))}px`;
            canvas.style.height = `${Math.round(imageObject.height * (500 / imageObject.width))}px`;
        }
        
        canvas.append(pixel);  
    }
}
