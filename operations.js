let value = 3;
let negVal = -value;
console.log(negVal);

//  operations

console.log(3+3); // addition
console.log(3-3); // subtraction
console.log(3*3); // multiplication
console.log(3/3); // division
console.log(3**3); // exponentiation
console.log(10%3); // modulus

// increment and decrement  
let val = 0;
// val = val + 1
val++; // increment by 1
console.log(val);
val--; // decrement by 1
console.log(val);

// += , -= , *= , /=
val += 10; // val = val + 10
console.log(val);
val -= 5; // val = val - 5
console.log(val);
val *= 5; // val = val * 5
console.log(val);
val /= 5;   // val = val / 5
console.log(val);      

// comparison operators
console.log(3==3); // equal to
console.log(3!=3);
console.log(3===3); // equal value and equal type
console.log(3!==3); // not equal value and not equal type
console.log(3>3);
console.log(3<3);
console.log(3>=3);
console.log(3<=3);  

// logical operators 
console.log(true && true); // and
console.log(true && false);
console.log(false && true);
console.log(false && false);
console.log(true || true); // or
console.log(true || false);
console.log(false || true);
console.log(false || false);
console.log(!true); // not
console.log(!false);                        
// precedence of operators  
let precedence = 3 + 4 * 5;
console.log(precedence);        
precedence = (3 + 4) * 5;
console.log(precedence);        
// 3 + (4*5) => 3 + 20 => 23
// (3+4) * 5 => 7 * 5 => 35 
// 3 + 4 * 5 / 2 - 1
precedence = 3 + 4 * 5 / 2 - 1;
console.log(precedence);
// 3 + (4*5) / 2 - 1
// 3 + 20 / 2 - 1
// 3 + 10 - 1


// (3 + 4 * 5) / (2 - 1)
precedence = (3 + 4 * 5) / (2 - 1);
console.log(precedence);        
// (3 + 20) / 1 

// 23 / 1
// 23                       


// some special operations
console.log(3 + "3");
console.log("3" + 3);
console.log("3" + "3");
console.log(3 + 3 + "3");

