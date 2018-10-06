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

