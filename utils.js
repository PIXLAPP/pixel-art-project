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

export function createImage(title) {
    let newImage = {
        title: title,
        height: 10,
        width: 10,
        colors: [],
    };
    return newImage;
}
