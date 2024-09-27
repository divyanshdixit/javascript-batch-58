var str = '' // "function(){}" // 1000 - refrence/address
var str1 = "divyansh";   // 1001

var arr = [1,2,3];
arr[0] = 4
console.log(arr); // [4,2,3]
str1 = 'new' // 1002
console.log(str1) // new 
str1[0] // n
str1[0] = 'd'; //can't change the value


str1.length // 8, lastIndex = length-1

console.log(str1[3]) // readonly 

str1[3] = 'a';
console.log(str1);

//  + (airthmatic, concat)

10 + 10 => 20

10 + '10' => '1010' // string

10 + 10 + 20 + '30' => '4030'
20 + 20
40 + '30' => '4030';


var name = "divyansh";
var age = 28;

'my name is ' + name + 'and my age is ' + age 28 //=> es5

// template literals: es6 
string + varaible 
`my name is ${name} and my age is ${age}`

`my 'name' is ${name} and my "age" is ${age}` => es6

// babel js lib => es6 => convert es5

var str = 'divyansh'; // es6 string
var str = new String('divyansh'); // es5 object


var x = 10;
var x = new Number(10)

var o = {};
var o = new Object();
