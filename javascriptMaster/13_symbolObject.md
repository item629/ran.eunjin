## 심벌 작성하기
ES2015에서는 지금까지의 String/Number/Boolean 등의 데이터형(객체)에 더하여, 새롭게 Symbol 이라는 형을 추가하였다. ==symbol== 이란 그 이름 그대로 심벌(물체의 이름)을 작성하기 위한 형이다. 그냥 보면 문자열과도 비슷한데, 문자열은 아니다. 우선 이 불가사의한 형인 symbol의 특징을 정리한 후 구체적인 용법에 대해 소개하겠다.

### 심벌의 성질 이해하기
---
> 우선 심벌을 실제로 작성하여 생성된 심벌의 내용을 확인해보자.

```javascript
(1)

let sym1 = Symbol('sym');
let sym2 = Symbol('sym');

(2)

console.log(typeof sym1); // 결과 : symbol
console.log(sym1,toString()); // 결과 : Symbol(sym);
console.log(sym1 === sym2); // 결과 : false
```

심벌을 생성하는 것은 Symbol 명령의 역할이다(1). 생성자와 비슷하긴 하지만 new연산자로 "new Symbol('sym')"과 같이 나타낼 수 없다(TypeError가 된다).

```javascript
Symbol ([desc])
	desc : 심벌의 설명
```
> 인수 desc는 심벌의 설멍(이름)이다. 인수 desc가 동일 심벌이라도 개별로 작성된 심벌은 별개의 것으로 간주되다는 점에 주의하길 바란다. 위의 예라면 sym1, sym2의 인수 desc는 둘 다 sym이지만, === 연산자로 비교하면 다른 것으로 간주된다(2).<br/>

또한 심벌의 경우 문자열.숫자로의 암묵적인 형 변환은 할 수 없다. 따라서 다음은 모두가 에러가 된다.

```javascript
console.log(sym1 + ''); // 결과 : Cannot convert a Symbol value to a string
console.log(sym1 - 0); // 결과 : Cannot convert a Symbol value to a number
```

단 Boolean형으로의 변환은 가능하다.

```javascript
console.log(typeof !!sum11); // 결과 : boolean
```

<br/><br/>

### 심벌을 정수의 값으로 이용하기
