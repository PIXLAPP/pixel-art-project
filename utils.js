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
    for (let i = 0; i < halfArea; i++) {
        colorArray.push('D8D8D9', 'FEFFFE');
    
        
    }
    //console.log(colorArray);

    let newImage = {
        title: title,
        height: 10,
        width: 10,
        colors: [],
    };

    return newImage;
}

export function updateImage(imageObject, colorArray) {
    imageObject.colors = colorArray;
    return imageObject;
}

//export function renderImage()
//inside create img() default array of 100 alternating gray and white colors 

//loop that creates div elements and appends them to canvas
//if no child elements of canvas container then appends a div with gray background
//if the previous sibling element has class of gray div then add classlist.add of white div else add class of gray div 