/**
 * 자바스크립트 함수: function 타입의 객체
 * 
 */

console.log("=== 함수를 생성하는 방법1: 함수 리터럴 =====");

function f1(a, b) {
    return a + b;
}
console.log(typeof(f1), f1 instanceof Function, f1(10, 20));

console.log("=== 함수를 생성하는 방법2: 함수 리터럴 =====");
var f2 = function a1(a, b) {
    return a + b;
}
console.log(typeof(f2), f2 instanceof Function, f2(10, 20))

console.log("=== 함수를 생성하는 방법3: new 연산자와 함께 Function() 생성자 함수를 사용 =====");
var f3 = new Function("a", "b", "c", "return b+c");
console.log(typeof(f3), f3 instanceof Function, f3(10, 20, 30));

console.log("=== 함수를 생성하는 방법4: 익명(anonymous) 함수 =====");
setTimeout(function(){
    console.log("time out!");
}, 1000);

console.log("=== 익명(anonymous) 함수의 또 다른 예: 한번만(즉시) 실행하는 함수 =====");
var s = (function (a,b){
    var m = 10;
    return a/10 + b/10;
})(10,20);  // 이렇게 만들고 바로 호출 가능..
// f1 -> var s = f1(10, 20)

// function f1(a,b){
//     var m = 10;
//     return a/10 + b/10;
// }


console.log(s);

console.log("=== 가변 파라미터 함수 sum() ==========");
var f4 = function(a, b, c){
    console.log(a, b, c);
}
f4(0, 1, 2, 3, 4, 5, 6, 7, 8);

// 2. 예
console.log("=== 가변 파라미터 함수 sum() ==========");

var sum = function(){
    // console.log(arguments instanceof Array, arguments instanceof Object, arguments.length);

    var sum =0;

     for(var i=0 ; i < arguments.length; i++){
        sum+= arguments[i];
    }
    
    // Error
    // arguments의 __proto__는 Object Prototype에 chain이 되어 있기 때문에...(arguments는 Object의 인스턴스이다.)
    // arguments.forEach(function(e)){
    //   sum += else;
    // });

    Array.prototype.forEach();

    return sum;
}

sum(10, 20, 30);