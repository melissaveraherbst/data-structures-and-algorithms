// MULTIPLE POINTERS CHALLENGE

// VALIDATE PARENTHESES PAIRS

// Write a function that takes in a string of parentheses and determines if the order of the parentheses is valid.

/*
Examples:
"()"              =>  true
")(()))"          =>  false
"("               =>  false
"(())((()())())"  =>  true
*/

// It’s great that these sort of challenges always come with an example to help us visualize what our solution should be able to do.
// For the above challenge, any "(" + ")" is valid. The left round bracket must be properly closed with a right round bracket.
// In other words, as long as every single "(" has a corresponding ")" that closes it off, the pair is valid.