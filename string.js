var str = '' // ""
var str1 = "divyansh";  
str1.length // 8

console.log(str1[3]) // readonly 

str1[3] = 'a';
console.log(str1);

//  + 

10 + 10 => 20

10 + '10' => '1010'

10 + 10 + 20 + '30' => '4030'

var name ="divyansh";
var age = 28;

'my \'name\' is ' + name + 'and my age is ' + age 28 //=> es5

// template literals:

`my 'name' is ${name} and my "age" is ${age}` => es6

// babel js lib => es6 => convert es5

var x = 10;
var x = new Number(10)

var o = {};
var o = new Object();
