/* 
변수와 자료형(Data Type)

[기본타입(Primitive type)]
- undefined
- number
- string
- boolean
[객체]
- object
    1. new 생성자함수() 사용해서 생성 >> 내장된 함수가 있다는 말이다. execntion context 어쩌고에.
        Number()   => object 타입의 객체
        String()   => object 타입의 객체
        Boolean()  => object 타입의 객체
        Object()   => object 타입의 객체
        // Array랑 Object랑 아무 차이 없다. >> 자바스크립트는 다 object구나.라고 알게된다고 하심.
        Array()    => object 타입의 객체
        Date()     => object 타입의 객체
        RegExp()   => object 타입의 객체
        Function() => function 타입의 객체
    2. {}
    3. []
    4. null >> 그냥 객체 안에 null이 있다고 생각해. 그냥 전부 객체라고 보면 된다.
- function
*/

/*
    자바스크립트 객체를 분류하는 또 다른 방법

    1. 내장 객체
        - JavaScript 엔진 내부에 미리 내장(정의)되어 있는 객체
        - Number, Boolean, Date, RegDate, Array, ... : 생성자 함수
        - parseInt, setTimeout, setInterval          : 일반 함수

    2. 호스트 객체
        - JavaScript 엔진이 embeded 되어 있는 호스트 환경에 있는 객체
        - Browser가 호스트인 경우: screen, location, navigator, document(DOM), XmlHttpRequest
        - Node가 호스트인 경우: http, os, fs, path, process, ...

    3. 사용자 객체
        - 자바스크립트 엔진이 실행하면서 생성하는 객체 
*/


console.log("===== 기본타입(undefined, number, string, boolean) ======== ");
var u = undefined; // var u; 와 동일, 선언과 정의를 구분하지 않는다.
var i = 10;
var s = 'Hello World';
var b = true;                   

// 기본 타입은 객체가 아니다.
console.log(u + ":" + typeof(u));
console.log(i + ":" + typeof(i));
console.log(s + ":" + typeof(s));
console.log(b + ":" + typeof(b));

console.log("===== 객체타입(object) ======== ");
var i2 = new Number(10);
var s2 = new String('Hello World');
var b2 = new Boolean(true);
var o = new Object();
var a = new Array();
var d = new Date();
var o2 = {};
var a2 = [];
var n = null;


console.log(i2 + ":" + typeof(i2)+ ":" + (i2 instanceof(Number)) );
console.log(s2 + ":" + typeof(s2)+ ":" + (s2 instanceof(String)) );
console.log(b2 + ":" + typeof(b2)+ ":" + (b2 instanceof(Boolean)) );
console.log(o + ":" + typeof(o)+ ":"+ (o instanceof(Object)) );
console.log(a + ":" + typeof(a)+ ":" +(a instanceof(Array)) );
console.log(d + ":" + typeof(d)+ ":" +(d instanceof(Date)) );
console.log(o2 + ":" + typeof (o2) + ":" + (o2 instanceof (Object)));
console.log(a2 + ":" + typeof (a2) + ":" + (a2 instanceof (Array)));
console.log(n + ":" + typeof (n) + ":" + (n instanceof (Object)));


console.log("===== 객체타입(function) ======== ");
function f1(a,b){
    return a + b;
}

var f2 = function(a, b){
    return a+b;
}

var f3 = new Function("a", "b", "return a+b");

console.log(f1(10, 20), f2(10,20), f3(10,20));
console.log("f1:" + typeof(f1));
console.log("f2:" + typeof(f2));
console.log("f3:" + typeof(f3));

console.log("=== 원시 타입도 메소드를 호출할 수 있다. (유사 객체)========"); 
console.log(b2.valueOf());
console.log(b.valueOf()); // new Boolean(b).valueOf() >> 이렇게 "임시 객체"가 만들어짐. 
                          // console.log(new Boolean(b).valueOf());
var f = function() {}
f.i = 10;  



i=10;

i= function(){

}