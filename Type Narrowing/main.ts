// Type Narrowing Example
// Example1
type MyType = string | number;

// Function with type narrowing
function processType(input: MyType) {
    if (typeof input === 'string') {
        // Inside this block, TypeScript knows input is a string
        console.log(input.toUpperCase());
    } else {
        // Inside this block, TypeScript knows input is a number
        console.log(input.toFixed(2));
    }
}

// Example usage
processType("hello"); // Output: HELLO
processType(3.14159); // Output: 3.14

// Example2
function getLength(input: string | number): number {
    if (typeof input === 'string') {
        // Inside this block, TypeScript knows input is a string
        return input.length;
    } else {
        // Inside this block, TypeScript knows input is a number
        return input.toString().length;
    }
}

getLength("hello"); // Output: 5
getLength(3.14159); // Output: 7    
