// COURSE: JavaScript Algorithms and Data Structures Masterclass from Udemy by Colt Steele

// DATA STRUCTURES

// HASH TABLE (HASH MAP)

// JavaScript implements Hash Tables with it's Map and Object

// A Hash Table is a data structure which stores data in an associative manner. In a hash table, data is stored in an array format, where each data value has its own unique index value. Access of data becomes very fast if we know the index of the desired data.

// Thus, it becomes a data structure in which insertion and search operations are very fast irrespective of the size of the data. Hash Table uses an array as a storage medium and uses a hash function to generate an index where an element is to be inserted or is to be located from.

// A Hash Function converts a given key (data) to a small practical integer value. The hashed integer value is used as an index value in a Hash Table, thus mapping the given key to that index.

/**
 * Hashing function for hashing string data types
 * @param {string} data The value to hash and then store in a Hash Table (array).
 * @param {number} size The length of the Hash Table used for storing the data. This number must preferably be a prime number to help distribute the stored data in the array more uniformly.
 * @returns The index for where we are storing the data in the Hash Table
 */

function hash(data, size) {
    let total = 0;
    let prime = 31;
    for (let i = 0; i < data.length; ++i) {
        let ASCIIcode = data.charCodeAt(i);
        total = (total * prime + as) % size;
    }
    return total;
}

/*
console.log(hash("cyan", 13)); // 5
console.log(hash("magenta", 13)); // 8
console.log(hash("blue", 13)); // 10
console.log(hash("green", 13)); // 8
*/

// Handling Collisions
// Since a Hash Function gets us a small number for a big key, there is possibility that two keys result in same value. The situation where a newly inserted key maps to an already occupied slot in hash table is called collision and must be handled using some collision handling technique.Following are the ways to handle collisions:

// Seperate Chaining: The idea is to make each cell of hash table point to a linked list (or nested array) of records that have same Hash Function value. Chaining is simple, but requires additional memory outside the table.
// Open Addressing: In open addressing, all elements are stored in the hash table itself. Each table entry contains either a record or NIL. When searching for an element, we examine the table slots one by one until the desired element is found or it is clear that the element is not in the table.

class HashTable {
    constructor(buckets = 27) {
        this.table = new Array(buckets);
        this.size = this.size;
    }
    _hash(key) {
        let total = 0;
        let prime = 31;
        for (const char of key) {
            let value = char.charCodeAt(0);
            total = (total * prime + value) % this.table.length;
        }
        return total;
    }
    get(key) {
        const index = this._hash(key);
        // check if the slot at the index has a value.
        // if yes, loop the nested structure until a key matches our searched key
        let found;
        if (this.table[index].length > 1) {
            // Solution using a while loop
            let i = 0;
            let tableSize = this.table[index].length;
            while (i < tableSize) {
                if (this.table[index][i][0] === key) {
                    found = this.table[index][i][1];
                    break;
                }
                else i++;
            }
            // ----------
            // Solution using the Array.find() method
            // Array.find() returns the first element in the array that satisfies the provided testing function.Otherwise, undefined is returned.
            // found = this.table[index].find((element) => element[0] === key);
        };
        return found || undefined;
    }
    set(key, value) {
        const index = this._hash(key);
        // Note: our set function uses the seperate chaining collision handling technique.
        // if the slot at the index is empty, create a new array in the slot and push the key-value pair as a nested structure into the created array. Otherwise, push the key-value pair into the existing nested structure.
        if (this.table[index]) {
            this.table[index].push([key, value]);
        } else {
            this.table[index] = [];
            this.table[index].push([key, value]);
        }
        return this.table;
        // ----------
        // ADDITIONAL
        // Check that a key cannot be set multiple times as key's should be a unique value in a hash table.
    }
    remove(key) {
        const index = this._hash(key);
        if (this.table[index] && this.table[index].length) {
            for (let i = 0; i < this.table[index].length; i++) {
                if (this.table[index][i][0] === key) {
                    this.table[index].splice(i, 1);
                    return true;
                }
            }
        }
        return false;
    }
    // -------------------------------------------
    // display the keys stored in the Hash Table
    keys() {
        let i = 0;
        let keys = [];
        // loop outer array (hash table)
        while (i < this.table.length) {
            if (this.table[i]) {
                // loop inner array (created from the seperate chaining collision handling)
                let j = 0;
                while (j < this.table[i].length) {
                    let key = this.table[i][j][0];
                    keys.push(key);
                    j++;
                }
            }
            i++;
        }
        return keys;
    }
    // -------------------------------------------
    // display all values stored in the Hash Table
    values() {
        let i = 0;
        let values = [];
        // loop outer array (hash table)
        while (i < this.table.length) {
            if (this.table[i]) {
                // loop inner array (created from the seperate chaining collision handling)
                let j = 0;
                while (j < this.table[i].length) {
                    let val = this.table[i][j][1];
                    values.push(val);
                    j++;
                }
            }
            i++;
        }
        return values;
    }
    // display all key-value pairs stored in the Hash Table
    entries() {
        let i = 0;
        let entries = [];
        // loop outer array (hash table)
        while (i < this.table.length) {
            if (this.table[i]) {
                // loop inner array (created from the seperate chaining collision handling)
                let j = 0;
                while (j < this.table[i].length) {
                    let key = this.table[i][j][0]
                    let val = this.table[i][j][1]
                    entries.push([key, val]);
                    j++;
                }
            }
            i++;
        }
        return entries;
    }
}

// test data
const ht = new HashTable();

ht.set("dc143c", "crimson");
ht.set("ffc0cb", "pink");
ht.set("ffa500", "orange");
ht.set("ffd700", "gold");
ht.set("ee82ee", "violet");
ht.set("800080", "purple");
ht.set("00ff00", "lime");
ht.set("008000", "green");
ht.set("808000", "olive");
ht.set("008080", "teal");
ht.set("00ffff", "cyan");
ht.set("7fffd4", "aquamarine");
ht.set("40e0d0", "turquoise");
ht.set("0000ff", "blue");
ht.set("000080", "navy");
ht.set("800000", "maroon");
ht.set("000000", "white");
ht.set("f0ffff", "azure");
ht.set("faf0e6", "linen");
ht.set("c0c0c0", "silver");

// console.log(ht.get("800000")); // ["800000", "maroon"]
// console.log(ht.get("faf0e6")); // ["faf0e6", "linen"]
// console.log(ht.get("a00003")); // undefined

// console.log(ht.table);

// console.log(ht.keys());
// console.log(ht.values());
// console.log(ht.entries());

// ht.remove("800000");

// console.log(ht.table);