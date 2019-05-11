class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  _hash(key) {
    let hash = 0;

    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length
    }

    return hash;
  }

  set(key, value) {
    const address = this._hash(key);

    if (!this.data[address]) {
      this.data[address] = [];
    }

    this.data[address].push([key, value]);

    return this.data;
  }

  get(key){
    const address = this._hash(key);
    const currentBucket = this.data[address]

    if (currentBucket) {
      for (let x of currentBucket) {
        if (x[0] === key) {
          return x[1]
        }
      }
    }

    return undefined;
  }

  keys() {
    let keys = [];

    if (this.data) {
      for (let x in this.data) {
        keys.push(this.data[x][0][0]);
      }
    }

    return keys;
  }
}

module.exports = HashTable;
