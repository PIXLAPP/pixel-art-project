export function setStorage(key, imageObject){
    const imageString = JSON.stringify(imageObject);
    localStorage.setItem(key, imageString);
}

export function getStorage(key){
    const imageString = localStorage.getItem(key);
    return JSON.parse(imageString);
}

export function titleKey(){

}