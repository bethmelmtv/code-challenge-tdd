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

test('this test should pass', (expect) => {
    const expected = 'bunny rabbit!!!';

    const actual = addExclamationPoints('bunny rabbit');

    expect.equal(actual, expected);
});


test('this test should pass', (expect) => {
    const expected = 28;

    const actual = multiplyBySeven(4);

    expect.equal(actual, expected);
});


test('this test should pass', (expect) => {
    const expected = 24;

    const actual = multiplyBy12ThenHalve(4);

    expect.equal(actual, expected);
});




test('function multiplyBy12ThenHalve(num1, num2, num3)', (expect) => {
    const expected = (num1/num2) * num3;

    const actual = true;

    expect.equal(actual, expected);
});

test('function divideThenMultiply(firstNumber, secondNumber, thirdNumber))', (expect) => {
    const expected = [firstNumber,secondNumber,thirdNumber]
    const actual = true;

    expect.deepEqual(actual, expected);
});

