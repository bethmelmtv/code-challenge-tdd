// IMPORT MODULES under test here:
import { 
    addExclamationPoints, 
    divideThenMultiply, 
    getLastItem, 
    getRandomNumber, 
    getSecondItem, 
    makeLuckyGreeting, 
    multiplyBy12ThenHalve, 
    multiplyBySeven, 
    returnAsAnArray, 
    returnAsAString,
} from '../functions.js';

const { test, skip } = QUnit;

test('testing addExclamationPoints function', (expect) => {
    const expected = 'bunny rabbit!!!';
    const actual = addExclamationPoints('bunny rabbit');

    const expected2 = 'chocolate bunny!!!';
    const actual2 = addExclamationPoints('chocolate bunny');

    const expected3 = 'pink bunny!!!';
    const actual3 = addExclamationPoints('pink bunny');

    expect.equal(actual, expected);
});


test('testing multiplyBySeven function', (expect) => {
    const expected = 28;
    const actual = multiplyBySeven(4);

    const expected2 = 21;
    const actual2 = multiplyBySeven(3);

    const expected3 = 30;
    const actual3 = multiplyBySeven(5);

    expect.equal(actual, expected);
});


test('testing multiplyBy12ThenHalve function', (expect) => {
    const expected = 24;
    const actual = multiplyBy12ThenHalve(4);

    const expected2 = 40;
    const actual2 = multiplyBy12ThenHalve(5);

    const expected3 = 36;
    const actual3 = multiplyBy12ThenHalve(6);

    expect.equal(actual, expected);
});


test('testing divideThenMultiplyfunction function', (expect) => {
    const expected = 10;
    const actual = divideThenMultiply(8, 4, 5);

    const expected2 = 1;
    const actual2 = divideThenMultiply(10, 10, 10);

    const expected3 = 1;
    const actual3 = divideThenMultiply(20, 20, 20);

    expect.equal(actual, expected);
});



test('testing returnAsAnArray function', (expect) => {
    const expected = [8, 4, 5];
    const actual = returnAsAnArray(8, 4, 5);

    const expected2 = [10, 20, 10];
    const actual2 = returnAsAnArray(10, 20, 10);

    const expected3 = [12, 13, 14];
    const actual3 = returnAsAnArray(12, 13, 14);

    expect.deepEqual(actual, expected);
});


test('testing returnAsAString function', (expect) => {
    const expected = '845';
    const actual = returnAsAString(8, 4, 5);

    const expected2 = '201';
    const actual2 = returnAsAString(2, 0, 1);

    const expected3 = '510';
    const actual3 = returnAsAString(5, 1, 0);

    expect.equal(actual, expected);
});


test('testing makeLuckyGreeting function', (expect) => {
    const expected = 'Hello! Your lucky number for the day is 12.';
    const actual = makeLuckyGreeting(8, 4);
  
    const expected2 = 'Hello! Your lucky number for the day is 13.';
    const actual2 = makeLuckyGreeting(9, 4);
 
    const expected3 = 'Hello! Your lucky number for the day is 15.';
    const actual3 = makeLuckyGreeting(5, 10);

    expect.equal(actual, expected);
});


test('testing getSecondItem function', (expect) => {
    
    const expected = 'apple';
    const actual = getSecondItem(['kiwi', 'apple', 'orange', 'plum']);

    expect.equal(actual, expected);
});


test('testing getLastItem function', (expect) => {
    
    const expected = 'plum';
    const actual = getLastItem(['kiwi', 'apple', 'orange', 'plum']) ;

    expect.equal(actual, expected);
});


test('testing getRandomNumber', (expect) => {
    
    const actual = getRandomNumber();
    const expected = [1, 2, 3, 4, 5].includes(actual);

    expect.equal(true, expected);
});