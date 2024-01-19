// DATA STRUCTURES AND ALGORITHMS

// RECURSIVE FUNCTIONS

// STRING REVERSAL

function reverse(str) {
    if (str.length === 0) return str;
    return str[str.length - 1].concat(reverse(str.slice(0, str.length - 1)));
}

reverse('awesome');
reverse('Etienne');