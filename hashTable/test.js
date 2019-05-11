const HashTable = require('./index');

describe('HashTable', () => {
  beforeEach(() => {
    return phoneHashTable = new HashTable(50);
  });

  test('HashTable is a constructor', () => {
    expect(typeof HashTable.prototype.constructor).toEqual('function');
  });

  test('add data to hash table and get value by key', () => {
    phoneHashTable.set('eder', '0800123');
    expect(phoneHashTable.get('eder')).toBe('0800123');
    phoneHashTable.set('john', '0800124');
    expect(phoneHashTable.get('john')).toBe('0800124');
    phoneHashTable.set('sam', '0800125');
    expect(phoneHashTable.get('sam')).toBe('0800125');
  });

  test('get keys from hashtable', () => {
    phoneHashTable.set('eder', '0800123');
    phoneHashTable.set('john', '0800124');
    expect(phoneHashTable.keys()).toEqual(['eder', 'john']);
  });
});
