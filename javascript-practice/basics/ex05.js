/*
구문(statement)
1. 자바스크립트 실행단위
2. 구성요소 
   값, 연산식: 표현식
   주석: 구문이지만 실행하지 않는다.
   예약어: if, else, for
3. 구문의 예
   if, if~else
   while, do~while, for
   for~in
   switch
   변수 정의
4. 공백: 토큰 구분, 무시 >> 이거 못들음
--
5. 세미콜론
6. 개행(line breaker)
*/

// ;(세미콜론)하는 역할 : 표현식을 표현식구문으로 만들어 바로 실행하게끔 한다. 
s = 'hello world'; console.log(s)

// 1. 개행은 ;(세미콜론)으로 대체된다. 
i = 10
console.log(i)

// 2. 
// 그런데 단순히 개행이 세미콜론을 대체한다고 말할 수 없다... 
// 상황에 따라서는 토큰을 분리하는 역할도 한다.

a
=
2
+
3
console.log(a)

cons
ole.log(a)




