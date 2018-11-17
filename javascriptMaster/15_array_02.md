
### # 독자적인 규칙으로 배열을 나열하기 - sort 메소드
sort 메소드는 다폴트로 배열을 문자열로 취급하여 사전순으로 정렬한다. 이 규칙을 변경하는데 인수로서 다음과 같은 함수를 정의한다.

- 인수는 2가지(비교할 배열 요소)
- 제1인수가 제2인수보다 작은 경우는 음수, 큰 경우는 양수를 반환한다.

예를 들어 다음은 배열의 내용을 숫자로 정렬하는 예다. 디폴트 동작과 결과의 변화를 비교해 보자.

```javascript
var ary = [5, 25, 10];
console.log(ary.sort()); // 결과 : [10, 15, 5] (문자열로 정렬)
console.log(ary.sort(function(x, y) {
	return x - y;
})); // 결과 : [5, 10, 25] (숫자로 정렬)
```

숫자로 정렬한 경우에는 함수 안에서 인수 x, y를 취하여 양쪽의 차를 구한다. 이로 인해 양쪽의 대소에 따라 양수와 음수의 수가 반환된다. 

또 하나의 예를 살펴보자. 다음은 직급(부장>과장>주임>담당)의 순서로 객체 배열 members를 정렬하는 예제다.

```javascript
var classes = ['부장', '과장', '주임', '담당'];
var members = [
	{ name : '남상미', clazz : '주임' },
	{ name : '김준수', clazz : '부장' },
	{ name : '정인식', clazz : '담당' },
	{ name : '남궁민', clazz : '과장' },
	{ name : '이상주', clazz : '담당' }
];

console.log(members.sort(function(x, y) {
	return classes.indexOf(x.clazz) - classes.indexOf(y.clazz); // 1
}));
```

![Open in browser](./img/members.png)

핵심은 **1** 이다. 우선, 객체 배열 members의 clazz 프로퍼티가 정렬하고자 하는 키다. 정렬 순서인 직급은 미리 준비해둔 배열 classes이므로 이를 검색하여 해당하는 위치를 대소 비교힌다. 이렇게 숫자 이외의 값이라도 대소 비교할 수 있는 형태로 변환할 수 있다면 정렬은 가능하다. 

<br/><br/>

## 연상 배열 조작하기 - Map 객체

Map 객체는 키/값의 세트 - 이른바 연상 배열(해시)을 관리하기 위한 객체다. 종래의 Javascript에서는 우선 객체 리터럴로 연상 배열을 관리하는 것이 기본이었다. 그러나 ES2015에서 마침내 전용의 객체가 제공된 것이다. 

그럼 Map 객체의 기본적인 사용법을 살펴본 후 객체 리터럴과의 차이와 Map 객체 특유의 주의점 등에 대해 알아보도록 하자.

<br/>

### # Map 객체의 기본
---
> Map 객체에서 이용 가능한 멤버는 다음과 같다.

|No.|멤버|개요|
|:---:|----|----|
|1|size|요소 수|
|2|set(key, val)|키 key/값 val의 요소를 추가, 중복될 경우에는 덮어쓴다|
|3|get(key)|지정한 키의 요소를 취득|
|4|has(key)|지정한 키의 요소가 존재하는지 판정|
|5|delete(key)|지정한 키의 요소를 삭제|
|6|clear()|모든 요소를 삭제|
|7|keys()|모든 키를 취득|
|8|values()|모든 값을 취득|
|9|entries()|모든 키/값을 취득|
|10|forEach(fnc [,that])|맵 내의 요소를 함수 fnc로 순서대로 처리|

<br/>

사용법은 모두 간단하므로 다음의 예제로 주요 멤버의 동작을 확인해보자.

```javascript
// Map 객체에 값을 추가
// (1)
let m = new Map();
m.set('dog', '멍멍멍');
m.set('cat', '야옹야옹');
m.set('mouse', '찍찍');

console.log(m.size); // 결과 : 3
console.log(m.get('dog')); // 결과 : 멍멍멍
console.log(m.has('cat')); // 결과 : true

// 키를 순서대로 취득
// (2)
for (let key of m.keys()) {
	console.log(key);
} // 결과 : dog, cat, mouse

// 값을 순서대로 취득
// (3)
for (let value of m.values()) {
	console.log(value);
} // 결과 : 멍멍멍, 야옹야옹, 찍찍

// 키/값을 순서대로 취득
// (4)
for (let [key, value] of m) {
	console.log(value);
} // 결과 : 멍멍멍, 야옹야옹, 찍찍

// 키 dog를 삭제
m.delete('dog');
console.log(m.size); // 결과 : 2

// 모든 키/값을 파기
m.clear();
console.log(m.size); // 결과 : 0
```

**1** 에서는 set 메소드로 키/값을 각각 추가하고 있는데, 배열 내 배열을 이용하여 생성자에서 한꺼번에 초기화하는 것도 가능하다.

```javascript
let m = new Map([['dog', '멍멍멍'], ['cat', '야옹야옹'], ['mouse', '찍찍']]);
```

Map 객체의 알맹이를 순서대로 취득하려면 **2** ~ **4** 의 방법이 있다. **4** 와 같이 Map 객체를 그대로 `for...of` 명령으로 처리할 경우에는 가변수 쪽도 `let [key, value]` 와 같이 키/값의 세트로 받을 필요가 있다.

**4** 는 `let [key, value] of m.entries()` 라고 써도 동일한 의미다.