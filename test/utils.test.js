import { setStorage, getStorage, titleKey, updateImage } from '../utils.js';

const test = QUnit.test;

// Test Passing
test('setStorage should stringify the imageObject', (expect) => {
    localStorage.removeItem('TEST');

    const testObject = {
        height: 10,
        width: 10,
        colors: ['457431', '03b213'],
    };

    setStorage('TEST', testObject);

    const actualString = localStorage.getItem('TEST');
    const actual = JSON.parse(actualString);

    expect.deepEqual(testObject, actual);
});

//Test Passing
test('getStorage should return the imageObject', (expect) => {
    localStorage.removeItem('TEST');

    const testObject = {
        height: 10,
        width: 10,
        colors: ['457431', '03b213'],
    };

    const testString = JSON.stringify(testObject);
    localStorage.setItem('test', testString);

    const actual = getStorage('test');
    const expected = testObject;

    expect.deepEqual(actual, expected);
});

//Test Passing
test('titleKey should remove spaces from image title and capitalize string', (expect) => {
    //arrange
    const imageTitle = 'title with spaces';
    const expected = 'TITLEWITHSPACES';

    //act
    const actual = titleKey(imageTitle);

    //expect
    expect.equal(actual, expected);
});

// Test Passing
// test('createImage should initialize a new image object', (expect) => {
//     const newImage = {
//         title: 'Awesome Artwork',
//         height: 10,
//         width: 10,
//         colors: [
//             'D8D8D9',
//             'FEFFFE',
//             'f3f3f4',
//             'D8D8D9',
//             'FEFFFE',
//             'f3f3f4',
//             'D8D8D9',
//             'FEFFFE',
//             'f3f3f4',
//             'D8D8D9',
//             'FEFFFE',
//             'f3f3f4',
//             'D8D8D9',
//             'FEFFFE',
//             'f3f3f4',
//             'D8D8D9',
//             'FEFFFE',
//             'f3f3f4',
//             'D8D8D9',
//             'FEFFFE',
//             'f3f3f4',
//             'D8D8D9',
//             'FEFFFE',
//             'f3f3f4',
//             'D8D8D9',
//             'FEFFFE',
//             'f3f3f4',
//             'D8D8D9',
//             'FEFFFE',
//             'f3f3f4',
//             'D8D8D9',
//             'FEFFFE',
//             'f3f3f4',
//             'D8D8D9',
//             'FEFFFE',
//             'f3f3f4',
//             'D8D8D9',
//             'FEFFFE',
//             'f3f3f4',
//             'D8D8D9',
//             'FEFFFE',
//             'f3f3f4',
//             'D8D8D9',
//             'FEFFFE',
//             'f3f3f4',
//             'D8D8D9',
//             'FEFFFE',
//             'f3f3f4',
//             'D8D8D9',
//             'FEFFFE',
//             'f3f3f4',
//             'D8D8D9',
//             'FEFFFE',
//             'f3f3f4',
//             'D8D8D9',
//             'FEFFFE',
//             'f3f3f4',
//             'D8D8D9',
//             'FEFFFE',
//             'f3f3f4',
//             'D8D8D9',
//             'FEFFFE',
//             'f3f3f4',
//             'D8D8D9',
//             'FEFFFE',
//             'f3f3f4',
//             'D8D8D9',
//             'FEFFFE',
//             'f3f3f4',
//             'D8D8D9',
//             'FEFFFE',
//             'f3f3f4',
//             'D8D8D9',
//             'FEFFFE',
//             'f3f3f4',
//             'D8D8D9',
//             'FEFFFE',
//             'f3f3f4',
//             'D8D8D9',
//             'FEFFFE',
//             'f3f3f4',
//             'D8D8D9',
//             'FEFFFE',
//             'f3f3f4',
//             'D8D8D9',
//             'FEFFFE',
//             'f3f3f4',
//             'D8D8D9',
//             'FEFFFE',
//             'f3f3f4',
//             'D8D8D9',
//             'FEFFFE',
//             'f3f3f4',
//             'D8D8D9',
//             'FEFFFE',
//             'f3f3f4',
//             'D8D8D9',
//             'FEFFFE',
//             'f3f3f4',
//             'D8D8D9',
//             'FEFFFE',
//             'f3f3f4',
//             'D8D8D9',
//             'FEFFFE',
//             'f3f3f4',
//             'D8D8D9',
//             'FEFFFE',
//             'f3f3f4',
//             'D8D8D9',
//             'FEFFFE',
//             'f3f3f4',
//             'D8D8D9',
//             'FEFFFE',
//             'f3f3f4',
//             'D8D8D9',
//             'FEFFFE',
//             'f3f3f4',
//             'D8D8D9',
//             'FEFFFE',
//             'f3f3f4',
//             'D8D8D9',
//             'FEFFFE',
//             'f3f3f4',
//             'D8D8D9',
//             'FEFFFE',
//             'f3f3f4',
//             'D8D8D9',
//             'FEFFFE',
//             'f3f3f4',
//             'D8D8D9',
//             'FEFFFE',
//             'f3f3f4',
//             'D8D8D9',
//             'FEFFFE',
//             'f3f3f4',
//             'D8D8D9',
//             'FEFFFE',
//             'f3f3f4',
//             'D8D8D9',
//             'FEFFFE',
//             'f3f3f4',
//             'D8D8D9',
//             'FEFFFE',
//             'f3f3f4',
//             'D8D8D9',
//             'FEFFFE',
//             'f3f3f4',
//             'D8D8D9',
//             'FEFFFE',
//             'f3f3f4'
//         ],
//     };
//     const newTitle = 'Awesome Artwork';

//     const actual = createImage(newTitle, 10, 10);

//     expect.deepEqual(newImage, actual);
// });

// New Test
test('updateImage should add an array of color values to the image object', (expect) => {

    const colorsArray = [
        'ffffff',
        'aaaaaa',
        '000000',
        '123456',
        'f0f0f0',
    ];

    const newImage = {
        title: 'Awesome Artwork',
        height: 10,
        width: 10,
        colors: [],
    };

    const expected = {
        title: 'Awesome Artwork',
        height: 10,
        width: 10,
        colors: [
            'ffffff',
            'aaaaaa',
            '000000',
            '123456',
            'f0f0f0',
        ],
    };

    const actual = updateImage(newImage, colorsArray);

    expect.deepEqual(actual, expected);
});