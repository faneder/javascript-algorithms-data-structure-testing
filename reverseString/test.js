const ReverseString = require('./index');

describe('ReverseString', () => {
  test('function exists', () => {
    expect(ReverseString).toBeDefined();
  });

  test('reverse string correctly', () => {
    expect(ReverseString('I am happy')).toEqual('yppah ma I');
    expect(ReverseString('love you')).toEqual('uoy evol');
    expect(ReverseString('  abcd')).toEqual('dcba  ');
  });

  test('must has a param', () => {
    const errMsg = 'param need be string';

    expect(() => {
      ReverseString(null);
    }).toThrow(errMsg);

    expect(() => {
      ReverseString([]);
    }).toThrow(errMsg);
  });

  test('reverse should has a param', () => {
    expect(() => {
      ReverseString();
    }).toThrow();
  });
});
