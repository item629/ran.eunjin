## 심벌 작성하기
ES2015에서는 지금까지의 String/Number/Boolean 등의 데이터형(객체)에 더하여, 새롭게 Symbol 이라는 형을 추가하였다. symbol 이란 그 이름 그대로 심벌(물체의 이름)을 작성하기 위한 형이다. 그냥 보면 문자열과도 비슷한데, 문자열은 아니다. 우선 이 불가사의한 형인 symbol의 특징을 정리한 후 구체적인 용법에 대해 소개하겠다.

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
이렇게 독특한 성질을 가진 심벌이지만, 이것만으로는 구체적으로 어떻게 사용하는지 잘 모를 것이다. 그래서 한 가지 전형적인 사용 예를 들어보겠다. 열거 상수를 나타내는 경우다.

다음과 같은 코드를 보면 아마도 지금까지 값 그 자체에는 의미 없이 그 이름에만 의미를 두었던 전형적인 상수 표현이라고 생각할 것이다.

```javascript
const MONDAY = 0;
const TUESDAY = 1;
... 중략...
const SUNDAY = 6;
```

일반적으로 이러한 상수에는 0, 1, ...과 같은 값에는 의미가 없고 MONDAY, TUESDAY... 와 같은 이름에 식별자로서의 의미가 있을 뿐이다. 그러나 이런 상수를 이용해야 하는 문맥에서 상수/숫자를 모두 이용해도 에러가 되지 않는다.

```javascript
if (week === MONDAY) {...}
if (week === 0) {...}
```

코드의 가독성을 생각하면 '0'으로 비교하는 것은 바람직한 상태가 아니다. 그리고 애초부터 'const JANUARY = 0;'과 같은 상수가 존재할 경우에는 동일한 값의 상수가 존재하게 되어 버그가 발생하게 되는 원인이 된다(역할이 비슷할 경우에는 더욱 그렇다).

이런 문제를 해결하기 위해 상수의 값으로써 심벌을 이용하는 것이다.

```javascript
const MONDAY = Symbol();
const TUESDAY = Symbol();
... 중략...
const SUNDAY = Symbol();
```

서로 다른 Symbol 명령으로 생성된 심벌은 동일한 이름이라고 유니크(고유)한 것이 된다. 이것은 Symbol 명령의 인수를 생략한 경우에도 동일하다. 

생성된 심벌의 값은 고유한 것이 되므로, 예를 들어 MONDAY와 동일한 것은 상수 MONDAY 뿐이다.

<br/><br/>

## 기본적인 숫자 연산 실행하기 - Math 객체
Number 객체는 어디까지나 '수치형의 값을 직접 조작하기 위한 객체'이며, 이른바 지수 계산이나 제곱근, 대수 관련 함수 등 수학과 관련된 연산 기능은 가지고 있지 않다. 수학 연산의 기능을 제공하는 것은 Math 객체의 역할이다.

Math 객체에서 이용 가능한 멤버는 아래와 같다.


- (1) 기본

| 멤버 | 개요 |
|----|-----|
| abs(num) | 절대치 |
| clz31(num) | 32비트 바이너리로 표현했을 때 앞부분에 채워진 0의 개수 |
| max(num1, num2) | num1, num2 중에서 큰 쪽의 값 |
| min(num1, num2) | num1, num2 중에서 작은 쪽의 값 |
| pow(base, p) | 거듭제곱(base값의 p승) |
| random() | 0~1 미만의 난수 |
| sign(num) | 지정한 값이 양수인 경우는 1, 음수인 경우는 -1, 0인 경우는 0 |


- (2) 자리올림/자리버림

| 멤버 | 개요 |
|----|-----|
| ceil(num) | 소수점 이하 올림(num 이상의 최소 정수) |
| floor(num) | 소수점 이하 버림(num 이하의 최대 정수) |
| round(num) | 반올림 |
| trunc(num) | 소수 부분을 단순히 버림(정수 부분을 취득) |

- (3) 제곱근 ( \*는 읽기 전용)

| 멤버 | 개요 |
|----|-----|
| \*SQRT1_2 | 1/2의 제곱근 |
| \*SQRT2 | 2의 제곱근 |
| sqrt(num) | 제곱근 |
| cbrt(num) | 세제곱근 |
| hypot(x1, x2, ...) | 인수의 제곱합의 제곱근 |

- (4) 삼각함수

| 멤버 | 개요 |
|----|-----|
| \*PI | 원주율 |
| cos(num) | 코사인 |
| sin(num) | 사인 |
| tan(num) | 탄젠트 |
| acos(num) | 아크 코사인 |
| asin(num) | 아크 사인 |
| atan(num) | 아크 탄젠트 |
| atan2(y, x) | 2변수의 아크 탄젠트 |
| cosh(num) | 쌍곡 코사인 |
| sinh(num) | 쌍곡 사인 |
| tanh(num) | 쌍곡 탄젠트 |
| acosh(num) | 역쌍곡 코사인 |
| asinh(num) | 역쌍곡 사인 |
| atanh(num) | 역쌍곡 탄젠트 |

- (5) 로그/지수함수

| 멤버 | 개요 |
|----|-----|
| \*E |  자연 로그의 밍ㅌ에 해당하는 수학 상수. 2.718281828459045 |
| \*LN2 | 2의 자연 로그 값 0.6931471805599453 |
| \*LN10 | 10의 지연 로그 값. 2.302585092994046 |
| \*LOG10E | 10을 밑으로 한 e의 로그. 0.4342944819032518 |
| log(num) | 자연 로그 |
| log10(num) | 밑을 10으로 하는 로그 |
| log2(num) | 밑을 2으로 하는 로그 |
| log1p(num) | 인수 x에 1을 더한 것의 자연 로그 |
| exp(num) |  지수 함수(e의 거듭제곱) |
| expm1(num) | e의 num제곱 - 1 |

아래는 Math 객체의 주요 멤버를 이용한 예제다.

```javascript
console.log(Math.abs(-100)); // 결과 : 100
console.log(Math.clz32(1)); // 결과 : 31
console.log(Math.min(20, 40, 60)); // 결과 : 20
console.log(Math.max(20, 40, 60)); // 결과 : 60
console.log(Math.pow(5, 3)); // 결과 : 125
console.log(Math.random)); // 결과 : 0.139327... (임의의 값)
console.log(Math.sign(-100)); // 결과 : -1
console.log(Math.ceil(-1234.56)); // 결과 : 1234
console.log(Math.ceil(-1234.56)); // 결과 : -1234
console.log(Math.floor(1234.56)); // 결과 : 1234
console.log(Math.floor(-1234.56)); // 결과 : -1235
console.log(Math.round(1234.56)); // 결과 : 1235
console.log(Math.round(-1234.56)); // 결과 : -1235
console.log(Math.trunc(1234.56)); // 결과 : 1234
console.log(Math.trunc(-1234.56)); // 결과 : -1234
console.log(Math.sqrt(81)); // 결과 : 9
console.log(Math.cbrt(81)); // 결과 : 4.326748710922225
console.log(Math.hypot(3, 4)); // 결과 : 5
console.log(Math.cos(1)); // 결과 : 0.5403023058...
console.log(Math.sin(1)); // 결과 : 0.841470984...
console.log(Math.tan(1)); // 결과 : 1.557407724...
console.log(Math.atan2(1, 3)); // 결과 : 0.321750554...
console.log(Math.log(10)); // 결과 : 2.3025850929...
console.log(Math.exp(3)); // 결과 : 20.0855369231...
console.log(Math.expm1(1)); // 결과 : 1.718281828...
```

Math 객체가 제공하는 멤버는 모두 정적 프로퍼티/메소드인 점에 주의하도록 하자. 즉 아래의 형식으로 Math 객체가 제공하는 모든 멤버에 접근 가능하다.

```javascript
Math.프로퍼티명
Math.메소드명(인수, ...)
```

또한 원래 Math 객체는 new 연산자로 인스턴스화 할 수 없다. 예를 들어 아래와 같은 기술은 실행 시 에러를 발생시킨다.

```javascript
var m = new Math();
```
> **with 명령**
> 동일 객체를 반복해서 호출할 때 아래와 같은 with 명령을 이용하면, 객체명을 생략할 수 있어 코드가 심플하게 된다.
> 
> ```javascript
> with(console) {
> 	log(Math.abs(-100));
> 	log(Math.max(20, 40, 60));
> 	log(Math.min(20, 40, 60));
> 	... 중략...
> }
> ```
> 단 with 명령은 편리한 반면, 아래와 같은 문제 등이 발생할 수 있다.
> 
> - 블록 내의 처리 속도가 저하된다.
> - 코드가 읽기 어렵게 된다(=with에 의해 수식되는 메소드가 애매모호하게 되기 쉽다)
> 
> 그러므로 적은 분량의 샘플 코드로 이용하는 것은 상관없으나 실제 애플리케이션에서는 이용하지 않는 편이 좋다.


