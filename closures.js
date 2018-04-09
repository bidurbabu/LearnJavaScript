//If you want the counter to be increased only by the method plus.
//this is somehting you may try.

function add() {
    var counter = 0;
    function plus() {counter += 1;}
    plus();    
    return counter; 
}
console.log(add());
console.log(add());
//However the above call will still print 1 and 1. The counter is inititated every time.

var add = (function () {
    var counter = 0;
    return function () {return counter += 1;}
})();

console.log(add());
console.log(add());
console.log(add());

//A closure is a function having access to the parent scope, even after the parent function has closed.
//this provides way for fuctions to have private data.
