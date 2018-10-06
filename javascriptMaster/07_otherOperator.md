# 그 외의 연산자

다음은 지금까지 소개한 카테고리에서 분류할 수 없었던 연산자이다.

~~~
.(콤마) : 좌우의 식을 계속해서 실행
delete : 객체의 프로퍼티나 배열의 요소를 삭제
instanceof : 객체가 지정된 클래스의 인스턴스인지를 판정
new : 새로운 인스턴스를 생성
typeof : 오퍼랜드의 데이터형을 취득
void : 미정의 값을 되돌림
~~~

<br/><br/>

## delete 연산자
delete 연산자는 오퍼랜드에 지정한 변수나 요소, 객체의 프로퍼티를 파기한다. 삭제에 성공했을 경우 delete 연산자를 true를, 실패한 경우에는 false를 되돌린다.

~~~
(1)

var ary = [ 'JavaScript', 'Ajax', 'ASP.NET' ];
console.log(delete ary[0]); // 결과 : true
console.log(ary); // 결과 : [ 1: "Ajax", 2: "ASP.NET" ]

(2)

var obj = { x: 1, y: 2 };
console.log(delete obj.x); // 결과 : true
console.log(obj.x); // 결과 : undefined

var obj2 = { x: obj, y: 2}
console.log(delete obj2.x); // 결과 : true
console.log(obj2) // 결과 : { y: 2 }

(3)

var data1 = 1;
console.log(delete data1); // 결과 : false
console.log(data1); // 결과 : 1

data2 = 10;
console.log(delete data2); // 결과 : true
console.log(data2); // 결과 : 오류(data2는 존재하지 않는다)
~~~

(1) 배열 요소를 삭제한 경우, 해당하는 요소가 삭제되기만 할 뿐. 뒤의 요소가 앞으로 옮겨지는 것은 아니다(인덱스 번호는 변하지 않는다.).<br/>
(2) 프로퍼티를 삭제한 경우도 프로퍼티 그 자체가 삭제될 뿐, 프로퍼티가 참조하는 객체가 삭제되는 것은 아니다.<br/>
(3) 명시적으로 선언된 변수를 삭제할 수 없다.<br/>
<br/>
또한 내장형 객체나 클라이언트 측 JavaScript 표준 객체에 포함된 멤버 중에는 delete 연산자로 삭제할 수 없는 프로퍼티도 있다.

<br/><br/>

## typeof 연산자
typeof 연산자는 오퍼랜드에 지정한 변수/리터럴의 데이터형을 나타내는 문자열을 반환한다.

~~~
var num = 1;
console.log(typeof num); // 결과 : number

var str = '안녕하세요';
console.log(typeof str); // 결과 : string

var flag = true;
console.log(typeof flag); // 결과 : boolean

var ary = [ 'Javascript', 'Ajax', 'ASP.NET' ];
console.log(typeof ary); // 결과 : object

var obj = { x: 1, y: 2 };
console.log(typeof obj); // 결과 : object
~~~


결과를 보면 알 수 있겠지만 typeof 연산자로는 문자열, 숫자, 논리형과 같은 기본 데이텨형은 식별할 수 있으나 **배열이나 객체는 어느 쪽이든 똑같이 'object'라고 반환된다는 점에 주의해야 한다.** 참고로 문자열, 숫자, 논리형에 대해서도 나중에 언급할 래퍼 객체로서 선언되어 있는 경우 동일하게 'object'라고 인식된다. <br/>
만일 객체 중에서 어떤 종류의 객체인지 좀 더 명확히 알고 싶다면 instanceof 연산자나 constructor 프로퍼티를 사용하기 바란다.

<br/>

**오퍼랜드 수에 따른 분류**

~~~
위에서는 용도에 따라서 연산자를 분류하고 있으나 오퍼랜드 수에 따라서 
단항 연산자, 이항 연산자, 삼항 연산자로 분류할 수도 있다.

가장 종류가 많은 것은 '*', '/' 등 연산자의 전후에 오퍼랜드를 지정하는 이항 연산자다.
단항 연산자는 '-'. '!', 'delete' 등 우측의 오퍼랜드에 대하여 기호나 논리값의 반전 등을 행한다.
('-'은 이항 연산자의 뺄셈 연산자이기도 하므로 주의가 필요하다.) 
그리고 삼항 연산자는 '?:'뿐이다.
~~~


<br/><br/>
