import { setStorage, getStorage, titleKey } from '../utils.js';

const test = QUnit.test;

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

test('titleKey should remove spaces from image title and capitalize string', (expect) => {
    //arrange
    const imageTitle = 'title with spaces';
    const expected = 'TITLEWITHSPACES';

    //act
    const actual = titleKey(imageTitle);

    //expect
    expect.equal(actual, expected);
});
