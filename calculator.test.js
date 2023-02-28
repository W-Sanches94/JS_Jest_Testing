const {
  sum,
  subtract,
  multiply,
  divide,
  modulus,
  even,
  odd,
} = require("./calculator");

describe('sum', () => { 
  
  test('can add two small positive numbers', () => {
    expected = 5;
    actual = sum(2, 3);
    expect(actual).toBe(expected);
  });

  test('can add two large positive numbers', () => { 
    expected = 42000;
    actual = sum(20000, 22000);
    expect(actual).toBe(expected); 
  });

  test('can add two negative numbers', () => {
    expected = -5;
    actual = sum(-2, -3);
    expect(actual).toBe(expected); 
  });

  test('can add zero', () => {
    expected = 5;
    actual = sum(5,0);
    expect(actual).toBe(expected); 
    
  });

});

describe('subtract', () => {

  test('can subtract two small positive numbers', () => {
    expected = 6;
    actual = subtract(9, 3);
    expect(actual).toBe(expected);
  });

  test('can subtract two large positive numbers', () => { 
    expected = 60000;
    actual = subtract(80000, 20000);
    expect(actual).toBe(expected); 
  });

});

describe('multiply', () => {

  test('can multiply two small positive numbers', () => {
    expected = 49;
    actual = multiply(7, 7);
    expect(actual).toBe(expected);
  });

  test('can multiply two large positive numbers', () => { 
    expected = 43680;
    actual = multiply(160, 273);
    expect(actual).toBe(expected); 
  });

});

describe('divide', () => {
  test('can divide two small positive numbers', () => {
    expected = 3;
    actual = divide(9, 3);
    expect(actual).toBe(expected);
  });

  test('can divide two large positive numbers', () => { 
    expected = 31;
    actual = divide(62000, 2000);
    expect(actual).toBe(expected); 
  });

});

describe('modulus', () => {
  test('can modulo two small positive numbers', () => {
    expected = 2;
    actual = modulus(2, 3);
    expect(actual).toBe(expected);
  });

  test('can modulo two large positive numbers', () => { 
    expected = 20000;
    actual = modulus(20000, 22000);
    expect(actual).toBe(expected); 
  });
});

describe('even', () => {
  test('number is even', () => {
    expected = true;
    actual = even(8);
    expect(actual).toBe(expected);
  });

  test('negative number is even', () => { 
    expected = true;
    actual = even(-826482);
    expect(actual).toBe(expected); 
  });

  test('number is not even', () => {
    expected = false;
    actual = even(7);
    expect(actual).toBe(expected);
  });

  test('negative number is not even', () => { 
    expected = false;
    actual = even(-137973);
    expect(actual).toBe(expected); 
  });

});

describe('odd', () => {
  test('number is odd', () => {
    expected = true;
    actual = odd(7);
    expect(actual).toBe(expected);
  });

  test('negative number is odd', () => { 
    expected = true;
    actual = odd(-937519);
    expect(actual).toBe(expected); 
  });

  test('number is not odd', () => {
    expected = false;
    actual = odd(2);
    expect(actual).toBe(expected);
  });

  test('negative number is not odd', () => { 
    expected = false;
    actual = odd(-86428);
    expect(actual).toBe(expected); 
  });

});
