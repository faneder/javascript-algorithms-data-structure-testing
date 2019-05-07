const MyArray = require('./index');

describe('MyArray', () => {
  beforeEach(() => {
    return myArray = new MyArray();
  });

  test('MyArray is a constructor', () => {
    expect(typeof MyArray.prototype.constructor).toEqual('function');
  });

  test('MyArray has a data after push', () => {
    myArray.push('a')
    expect(myArray.data[0]).toEqual('a');
    expect(myArray).toHaveLength(1);

    myArray.push('b')
    expect(myArray.data[1]).toEqual('b');
    expect(myArray).toHaveLength(2);
  });

  test('MyArray has a error after push null data', () => {
    myArray.push()
    expect(myArray.data).toEqual({});
  });

  test('pop removes the last item of the array', () => {
    myArray.push('a')
    expect(myArray.pop()).toEqual('a');
    expect(myArray.data).toEqual({});

    myArray.push('b')
    expect(myArray.pop()).toEqual('b');
    expect(myArray.data).toEqual({});

    myArray.push(1)
    myArray.push(2)
    myArray.push(3)
    expect(myArray.pop()).toEqual(3);
    expect(myArray).toHaveLength(2);
  });

  test('deleteAtIndex removes the specific index of the array', () => {
    myArray.push('a')
    myArray.push('b')
    myArray.push('c')
    myArray.deleteAtIndex(1)
    expect(myArray.data[1]).toEqual('c');
    expect(myArray.length).toBe(2);
  });

  test('shiftItems removes the specific index of the array', () => {
    myArray.push('a')
    myArray.push('b')
    myArray.push('c')
    myArray.deleteAtIndex(0)
    expect(myArray.data[0]).toEqual('b');
    expect(myArray.length).toBe(2);
  });
});
