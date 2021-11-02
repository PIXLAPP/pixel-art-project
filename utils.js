export function setStorage(key, imageObject){
    const imageString = JSON.stringify(imageObject);
    localStorage.setItem(key, imageString);
}

export function getStorage(){

}

export function titleKey(){

}