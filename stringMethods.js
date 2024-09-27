/*
1 - find string within a string:
indexOf('word', index(optional)) => first occurance from starting
lastIndexOf('word', index(optional)) => first occurance from end
search(/[a-zA-Z]/gm) => it used pattern also

*/

var str = 'Errors can be divided into two';
str.indexOf('can'); // 7

var str = 'Errors can be divided can into can two';
str.lastIndexOf('can'); // 22

/*
2- extract a string from a string:
substring(start, end(optional)) => end - 1
slice(start, end(optional)) => end - 1, it can also have -ve index
*/


var str = 'Errors can be divided into two';
str.slice(4,9)

var str = 'Errors can be divided into two';
str.slice(-9, -4)

/*
3- trim a string:
trim()
trimStart()
trimEnd()

*/

var str = '       divyansh Errors can be        divided into two      ';
str.trimEnd();

var str = '       divyansh Errors can be        divided into two      ';
str.trimStart();

var str = '       divyansh Errors can be        divided into two      ';
str.trim();

/*

4- break string (convert sting to array)
split()

var str = 'divyansh';
str.split(''); // ['d', 'i', 'v', 'y', 'a', 'n', 's', 'h']

var str = 'divyansh';
str.split(); // ['divyansh']

var str = 'https://www.google.com/link';
str.split('/'); // ['https:', 'www.google.com', 'link']

toString()
*/