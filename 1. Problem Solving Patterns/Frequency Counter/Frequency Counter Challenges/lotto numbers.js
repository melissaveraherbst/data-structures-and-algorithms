let frequency = new Map(); let n;

for (let i = 0; i <= 1000; i++) {
    for (let j = 0; j <= 6; j++) {
        n = Math.floor(Math.random() * 52 + 1);
        frequency.set(n, frequency.get(n) + 1 || 1);
    }
}

// create an array from the Map data structure entries so that we can use the built-in sort method to sort the data by value
let arr = Array.from(frequency.entries()).sort((a, b) => b[1] - a[1]);

// create a map from the sorted array 
let sortedFrequency = new Map(arr);
console.log(sortedFrequency);

// Why a Map and not an Object?
// I am using a Map data structure because a normal Object data structure sorts the keys in ascending order when it is numeric. I want to sort the keys by their value (frequency). A Map's keys and values are sorted in insertion order.
// (Basically, the order of the keys of an object is not determined by insertion order and it is sorted automatically by the JS language)