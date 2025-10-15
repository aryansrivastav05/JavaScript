// Primitive Data Types
let num = 42; // number
let str = "Hello, TypeScript!"; // string
let bool = true; // boolean
let n = null; // null             
let u = undefined; // undefined
let sym = Symbol("unique");
let bigIntNum = BigInt(9007199254740991); // bigint

// Non-Primitive Data Types     
let arr[] = [1, 2, 3, 4, 5]; // array of numbers
let tuple = ["Age", 30]; // tuple
let obj = { name: "Alice", age: 25 }; // object
let func= (x, y) => x + y; // function   
let anyType= "Could be anything"; // any type
let unknownType = 10; // unknown type
let voidType = undefined; // void type

// Displaying types using typeof operator
console.log(typeof num); // "number"
console.log(typeof str); // "string"        
console.log(typeof bool); // "boolean"
console.log(typeof n); // "object" (this is a known quirk in JavaScript)
console.log(typeof u); // "undefined"
console.log(typeof sym); // "symbol"
console.log(typeof bigIntNum); // "bigint"
console.log(typeof arr); // "object"
console.log(typeof tuple); // "object"
console.log(typeof obj); // "object"
console.log(typeof func); // "function"
console.log(typeof anyType); // "string"
console.log(typeof unknownType); // "number"
console.log(typeof voidType); // "undefined"    
console.log(Array.isArray(arr)); // true
console.log(Array.isArray(obj)); // false
console.log(obj.name); // "Alice"
console.log(func(5, 10)); // 15 
console.log(tuple[0]); // "Age"
console.log(tuple[1]); // 30
console.log(bigIntNum + BigInt(1)); // 9007199254740992n

// Note: TypeScript types are erased during compilation to JavaScript, so at runtime, all types are as per JavaScript.  
// js is a dynamically typed language, while TypeScript is a statically typed superset of JavaScript that adds optional types.