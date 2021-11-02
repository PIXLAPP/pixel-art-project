import { setStorage } from '../utils.js';

const test = QUnit.test;

test('setStorage should stringify the imageObject', (expect) => {
    localStorage.removeItem('TEST');

    const testObject = {
        height: 10,
        width: 10,
        colors: [
            '457431',
            '03b213'
        ]

    };

    setStorage('TEST', testObject);

    const actualString = localStorage.getItem('TEST');
    const actual = JSON.parse(actualString);

    expect.deepEqual(testObject, actual);
});