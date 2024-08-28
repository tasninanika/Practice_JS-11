// write an arrow function that will take 3 parameters, will multiply the parameters  and will return the result.

const arrow = (num1, num2, num3) => num1 * num2 * num3;
const result = arrow(1,2,3);
console.log(result);


// write the following sentence in three lines and print the result: I am a web developer. I love to code. I love to do it always.

const string = `
 I am a web developer.
 I love to code.
 I love to do it always.
`;
console.log(string);



// write an arrow function that will take 2 parameters: one will come from you and the other will be a default parameter. Add these two parameters and return the result.

const sum = (x, y=4) => x + y;
const result2 = sum(10);
console.log(result2);