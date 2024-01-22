// COURSE: JavaScript Algorithms and Data Structures Masterclass from Udemy by Colt Steele

// DATA STRUCTURES

// TRIE (also called a digital tree or prefix tree)
// (pronounced 'TRY') 

// A Trie is a special data structure used to store strings that can be visualized like a graph. It consists of nodes and edges. Each node consists of at max 26 children and edges connect each parent node to its children. These 26 pointers are nothing but pointers for each of the 26 letters of the English alphabet A separate edge is maintained for every edge.

// Strings are stored in a top to bottom manner on the basis of their prefix in a trie. All prefixes of length 1 are stored at until level 1, all prefixes of length 2 are sorted at until level 2 and so on.

class Node {
    constructor() {
        this.children = {};
        // A boolean flag initially set to false. If the letter is the last letter of a word, change to true (same as "isWord" seen in some tutorials)
        this.endOfWord = false;
    }
    setEnd() {
        this.endOfWord = true;
    }
    isEnd() {
        return this.endOfWord;
    }
}

class Trie {
    constructor() {
        this.root = new Node();
    }

    // -------------------------------------------
    // Insert a new word into the Trie
    // Iterative Solution
    // 1) Create a variable, current, and set it to the root node.
    // 2) Loop the characters of the given word
    //      - We need to check if the current node (starting at the root) has a child node equal to the current character of the word. 
    //      - If the child does not exist, we create a node for that character.
    //      - Update our current node to the current character
    //      - when the current node is the last character of the word, we update "end" to "true" to indicate that it is the last character of a word;
    insert(word) {
        let current = this.root;

        for (let i = 0; i < word.length; i++) {
            let char = word[i];
            if (!current.children[char]) {
                current.children[char] = new Node();
            }
            current = current.children[char];
        }

        current.setEnd();
    }

    // -------------------------------------------
    // Recursive Solution
    // insert(word, node = this.root) {
    //     // base case
    //     if (word.length === 0) {
    //         node.setEnd();
    //         return;
    //     }

    //     if (!node.children[word[0]]) {
    //         node.children[word[0]] = new Node();
    //         return this.insert(word.slice(1), node.children[word[0]]);
    //     } else {
    //         return this.insert(word.slice(1), node.children[word[0]]);
    //     }
    // }

    // -------------------------------------------
    // Search for a node that matches a given string exactly. Returns a boolean.
    search(word) {
        let current = this.root;

        for (let i = 0; i < word.length; i++) {
            let char = word[i];
            if (!current.children[char]) {
                return false;
            }
            current = current.children[char];
        }
        
        // returns a boolean based on if this.endOfWord = true / false
        return current.isEnd();
    }

    // -------------------------------------------
    // Returns true if there is a word in the Trie that starts with the given prefix
    startsWith(prefix) {
        let current = this.root;

        for (let i = 0; i < prefix.length; i++) {
            let char = prefix[i];
            if (!current.children[char]) {
                return false
            }
            current = current.children[char];
        }
        return true;
    }

    // -------------------------------------------
    // display all of the words in the Trie inside an array
    print() {
        let words = [];
        function search(node, string = "") {
            for (const char in node.children) {
                search(node.children[char], string.concat(char));
            }
            if (node.isEnd()) {
                words.push(string);
            }
        }
        search(this.root);
        return words;
    }
}

// new Trie instance
let trie = new Trie();

trie.insert("TREE");
trie.insert("MANGO");
trie.insert("ORANGE");
trie.insert("GRAPE");
trie.insert("GRAPH");

console.log(trie.search("GRAPE")); // true
console.log(trie.search("GRAPES")); // false

console.log(trie.startsWith("MAN")) // true

console.log(trie.print()); // ['APPLE', 'MANGO', 'GRAPE']



// =============================================================================
// Another implementation of startsWith() where the function returns a list of words that begin with the given prefix.

// Python code snippet
// * Note that a list() in Python is equal to an Array in JavaScript.

// MAIN FUNCTION
// def starts_with(self, prefix):
//     '''
//     Returns a list of all words beginning with the given prefix, or
//     an empty list if no words begin with that prefix.
//     ''';

//     words = list();

//     current = self.root;

//     for char in prefix:
//         if char not in current.children:
//         # Could also just return words since it's empty by default;
//         return list();
//     current = current.children[char]

//     # Step 2: Include helper function;
//     self.__child_words_for(current, words);

//     return words

// HELPER FUNCTION
// def __child_words_for(self, node, words):
//     '''
//     Private helper function. Cycles through all children
//     of node recursively, adding them to words if they
//     constitute whole words(as opposed to merely prefixes).
//     ''';

//     if node.is_word:
//     words.append(node.text);

//     for letter in node.children:
//     self.__child_words_for(node.children[letter], words)



// =============================================================================
// HASH TABLE VS. TRIE TREE - WHEN TO USE WHICH DATA STRUCTURE?

// Say you were implementing a spell checker. You'll look for each word to see if it appears in Merriam-Webster's dictionary.

// You could put all the dictionary words in a trie. Or, you could put them in a Hash Set (Similar to Hash Tables / Hash Maps, but only stores values instead of key-value pairs)

// Both options have the same average -case lookup complexity: O(n), where n is the number of characters in the lookup string:

// - For the trie, you'd have to walk from the root of the trie through kk nodes, one character at a time.
// - For the hash set, you have to compute a hash value from all kk characters of the string in order to index into the underlying array.

// So, if they have the same complexity, which one should you use ?

// Use a trie if you want to quickly find words starting with the same prefix.In our spell checker, this might be useful for suggesting corrections(i.e.: fixing "chocolatr" to "chocolate"). The only way to do this with a hash set would be to iterate through all the words, in O(n) time.

// Use a hash set if you just need to check if a string is present or you're optimizing for space. In most cases, a hash set will take up fewer bytes than a trie. And, hash set lookups will probably be faster than trie lookups—trie nodes can be scattered throughout memory, which isn't cache friendly.