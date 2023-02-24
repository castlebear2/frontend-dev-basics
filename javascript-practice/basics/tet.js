// var num = 123;
// // int -> Number
// console.log(typeof(num));

// var num = "123";
// // int -> Number
// console.log(typeof(num));



var calc1 = function(a, b) {
    return a+b;
  }
//console.log(calc1(20,30));

function square(x, callback) {
    setTimeout(callback, 200, x*x);
}
 
square(2, function(number) {
    console.log(number);
});