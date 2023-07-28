

//                      -----------------------Muhammad Ameer Hamza Khan-------
//                      -----------------------ACM FELLOWSHIP PROGRAM 22-23----
//                      ----------------------- TASK - 1 ----------------------


// CHALLENGE # 1 

// 1
const myBoolean = true;

// 2
const myString = 'hello world';

// 3
const firstNumber = 20;

// 4
let secondNumber = 40;

// 5
secondNumber = 80;

// 6
const myArray = [myBoolean, myString];

// 7
const myObject = {
    firstProperty: myArray,
    sumProperty: firstNumber + secondNumber
};

// 8
console.log(myObject);

// 9
console.log(myObject.sumProperty);

// 10
console.log(myObject.firstProperty[1]);


// CHALLENGE # 2


// Errors in the following code:
// 1. The variable is invalid.  It should be `someNumber`, not `some Number`.  because there is an extra space.
// 2. We should be using `let or var` here because const value cannot be changed once assigned

const some Number = 20;

// 3. This line is missing a semi-colon at the end
someNumber = 50



// CHALLENGE # 3

const variable1 = 20;
const variable2 = '40';
const resultVariable = variable1 + variable2;
console.log(resultVariable);
// it will print 2040  and the type of resultVariable will be string
// the reason is that Js will explicitly convert the variable1 to string and then concatenate the strings



// CHALLENGE # 4
const objectVariable = {
    property1: 'i am property 1';
    property2: 'i am property 2';
    property3: [20, 30, 40];
};

console.log(objectVariable.property3[2]);

// Error in the following code is the semi-colon inside the `{}` are in the wrong place beacuse the values in object is separated by a comma(,) rather then in the ;

// The correct code is 
const objectVariable = {
    property1: 'i am property 1',
    property2: 'i am property 2',
    property3: [20, 30, 40]
};

console.log(objectVariable.property3[2]);



//CHALLLENGE # 5
const myArray = [20, 30, 40];
console.log(myArray[3]);

// The array index starts from 0 and ends to array.length-1 
// The above array is of length 3 it means the last index of myArray is 2 
// and you're accessing index 3 which is not in myArray 
// The correct code would be 

const myArray = [20, 30, 40];
console.log(myArray[2])


//CHALLLENGE # 6
const numberVariable = 0;

numberVariable++;
numberVariable++;
numberVariable++;

console.log(numberVariable);

// It will give an error beacuse we have decalred `numberVariable` as a constant 
// And you cannot change the value of const once assigned 
// To make this code work you could use `let` or `var`
// The correct code is :

let numberVariable = 0;

numberVariable++;
numberVariable++;
numberVariable++;

console.log(numberVariable);



//CHALLLENGE # 7

// --- Snippet # 1 
const firstNumber = 20;
const secondNumber = '20';

const result = firstNumber === secondNumber;

console.log(result);

// It will give false because the operator `===`
// checks both the value and datatype of firstNumber and secondNumber 
// since the data type of firstNumber is number and data type of secondNumber is string
// hence the data types are not the same hence it will give false


// --- Snippet # 2
const firstNumber = 20;
const secondNumber = '20';

const result = firstNumber == secondNumber;

console.log(result);
// It will give tre because the operator `==`
// checks both the value and not the datatype of firstNumber and secondNumber 
// since the value of firstNumber  secondNumber is same
// hence it will give true



//CHALLLENGE # 8
const expression1 = 100 % 50;   // 0
const expression2 = 100 / 50;   // 2
const expression3 = expression1 < expression2;  // 0<2 = true
// 300 + 5 === 305 // true
const expression4 = expression3 && 300 + 5 === 305;    // true && true
const expression5 = !expression4;   // !true = false

console.log(expression5);

// Hence it will give false
// This all can be written in a single line like this 
const expression6 = !(((100 % 50) < (200 / 50)) && (300 + 5 === 305))


//CHALLLENGE # 9
const myObj = {
    prop1: 'first value',
    prop2: 20
};

// Index         0   1   2
const myArray = [40, 50, 2];

const result = myObj.prop2 === (myArray[0] / myArray[2]);

//   result will be equal to true
// because type of myObj.prop2 is Number and value is 20
// and type of myArray[0] / myArray[2] is Number and value is 20
// since both have same value and same type hence result will be equla to true


//CHALLLENGE # 10

const myObj = {
    nestedObject1: {
      price: 100,
      quantity: 5
    },
    nestedObject2: {
      price: 150,
      quantity: 2
    }
  };
  
  const myArray = [myObj.nestedObject1, myObj.nestedObject2];
  
  const result = (myArray[0].price * myArray[0].quantity) > (myArray[1].price * myArray[1].quantity); 

//   The value at array index 0 is nestedObject1 
//   The value at array index 1 is nestedObject2
//   Product of nestedObject1 price and quantity is 500
//   Product of nestedObject2 price and quantity is 300
//   So the result 500 > 300 will return true
