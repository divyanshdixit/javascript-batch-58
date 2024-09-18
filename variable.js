// scope : local/function, block, global
// es 5 var (global), es6 let const (block)
// function => var let const (local)
// window object => global


var a = 10;
var a = 20; // redeclar redfeind
a = 20;  // redefine

console.log(a)

let b = 20;

console.log(b); // 20

{
    let b = 30; // var => block => work globally, use only let const
    console.log(b);// 30
}

console.log(b); // 30

// same scope we can't redecalre let or const

{
    let c = 10;
    c = 20;
}

const Name = 'divyansh';
// Name = 'mohit'; // can't reassign value to const variable
console.log(Name);


// local/function
var h = 20;
function abc(){ // define
    var a = 10; // local scope(var let const)
    h = 30; // js doesn't recommend
    return a;
}


var g = abc();

console.log(h, '**'); // 30