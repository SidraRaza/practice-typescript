Type Narrowing
We define a union type MyType that can either be string or number.
The function processType takes an argument input of type MyType.
Inside processType, we use an if statement to check the type of input using typeof.
If input is a string, TypeScript narrows its type to string inside the if block, allowing us to safely call string methods like toUpperCase().
If input is a number, TypeScript narrows its type to number inside the else block, allowing us to safely call number methods like toFixed().
TypeScript uses control flow analysis to narrow down the type of variables within conditional blocks, ensuring type safety and enabling more precise coding practices.
