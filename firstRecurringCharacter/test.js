const recurringCharacter = require('./index');

describe('recurringCharacter', () => {
  test('function exists', () => {
    expect(recurringCharacter).toBeDefined();
  });

  test('recurringCharacter find recurring character', () => {
    expect(recurringCharacter([2,5,1,2,3,5,1,2,4])).toEqual(2);
    expect(recurringCharacter([2,1,1,2,3,5,1,2,4])).toEqual(1);
    expect(recurringCharacter([0,0,1,0,3,5,1,2,4])).toEqual(0);
    expect(recurringCharacter([8,1,1,8,3,5,1,2,4])).toEqual(1);
    expect(recurringCharacter([2,3,4,5])).toEqual(undefined);
  });
});
