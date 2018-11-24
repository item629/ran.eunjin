## 중복되지 않은 값의 집합 조작하기 - set 객체

Set 객체는 중복되지 않은 값의 집합을 관리하기 위한 객체다. 중복된 값이 추가된 경우에는 이것을 무시한다.

Set은 ES2015부터 새롭게 도입된 객체로, 그 이전의 Javascript에서는 직접 대체할 수 있는 수단이 없었다. ES2015의 이용이 허가된 환경에서는 적극적으로 이용할 것을 권유한다.

<br/><br/>

### #Set 객체의 기본
---
Set 객체에서 이용 가능한 멤버는 다음과 같다.

- Set 객체의 주요 멤버

|No.|멤버|멤버|
|----|:---:|:---:|
|1|size| 요소 수 |
|2|add(val)|지정한 값을 추가|
|3|has(val)|지정한 값이 존재하는지 판정|
|4|delete(val)|지정한 값의 요소를 삭제|
|5|clear()|모든 요소를 삭제|
|6|entries()|모든 키/값을 취득|
|7|values()|모든 값을 취득(엘리어스로써 keys 메소드도 이용 가능)|
|8|forEach(fnc [,that])|지정한 함수를 Set의 각 값마다 처리|

`Array/Map` 객체와는 달리, 인덱스 번호/키 등으로 요소에 액세스하는 수단은 **갖고 있지 않다** 는 점에 주의하길 바란다. Set 객체로 할 수 있는 것은 `has 메소드`로 값의 유무를 판정하거나 `for...of` 루프/`values` 프로퍼티로 내부 요소를 열거하는 것뿐이다.

그럼 기본적인 멤버를 이요한 예제를 살펴보자.

```javascript
//(1)
// Set 객체에 값을 추가
let s = new Set();
s.add(10);
s.add(5);
s.add(100);
s.add(50);
//동일 값은 무시
s.add(5);

console.log(s.has(100)); // 결과 : true
console.log(s.size); // 결과 : 4

//값을 순서대로 취득
for (let val of s.values()) {
	console.log(val); // 결과 : 10, 5, 100, 50
}

//값을 순서대로 취득(위와 동일한 의미)
for (let val of s) {
	console.log(val); // 결과 : 10, 5, 100, 50
}

//값 100을 파기
s.delete(100);
console.log(s.size); // 결과 : 3
//값을 모두 파기
s.clear();
console.log(s.size); // 결과 : 0
```
<br/>

(1)에서는 add 메소드를 사용하여 Set 객체에 값을 추가하고 있는데, 생성자로 한꺼번에 정리해서 초기화하는 것도 가능하다.

```javascript
let s = new Set([10, 5, 100, 50, 5]);
```

<br/><br/>

### #NaN/객체의 비교 규칙
---
Set 객체도 NaN/객체의 비교 규칙은 Map 객체와 동일하다.

```javascript
let s = new Set();
s.add(NaN);
s.add(NaN);
console.log(s.siez); // 결과 : 1 (동일한 값은 무시) (1)

s.add({});
s.add({});
console.log(s.size); // 결과 : 3 (서로 다른 객체로 추가) (2)
```

