// var arr = [1,2,3,4,5,6,7];
// var res = [];

// for(let i=arr.length-1; i>=0; i--){ // i=6
//     res.push(arr[i]);
// }
// console.log(res);

var arr = [1,2,3,4,5,6,7];
start = arr[0];
end = arr[arr.length - 1] // arr[6]

// push pop shift unshift

// push : insert value in last

var count = arr.push(10); // return new count, and it changes the original array

console.log(count);
console.log(arr);

// pop: remove last value

var res = arr.pop(); // return the poped out value and it also change the original array
console.log(res);
console.log(arr);

// shift : remove first value

var res1 = arr.shift(); // return the poped out value and it also change the original array
console.log(res1);
console.log(arr);

// unshift: insert value in first index

var res2 = arr.unshift(11); // return new count, and it changes the original array
console.log(res2);
console.log(arr);

// slice splice reverse join
// [11, 2, 3, 4, 5, 6, 7]
// slice =

var res4 = arr.slice(2,5); // it will not change the original array 
console.log(res4);
console.log(arr);

// splice => add/remove any element from array
// it change the original array.
var res5 = arr.splice(1, arr.length - 1, 20,30,40,50,60,70) // return the array of removed elements
console.log(res5);
console.log(arr);

// reverse: reverse the array and it change the original array

var res6 = arr.reverse();
console.log(res6);
console.log(arr);

// join: to covnert array to string:
var res7 = arr.join('**');
console.log(res7);
console.log(arr)

// forEach, map, filter, find, findIndex, reduce, every