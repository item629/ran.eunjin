## 숫자 조작하기
Number 객체는 숫자형(number)의 값을 취급하기 위한 래퍼 객체로, 숫자의 정형화를 실시하기 위한 기능을 제공함과 동시에 무한대/무한소, 숫자의 최대값/최소값 등 특수한 값을 나타내기 위한 읽기 전용의 프로퍼티(상수)를 공개하고 있다.

* Number 객체의 주요 멤버 / 정적 프로퍼티

|멤버|개요|
|:---:|:---:|
|`MAX_VALUE`| Number로 표현할 수 있는 최대값, 1.79E + 308 |
|`MAX_SAFE_INTEGER`| Number로 안전하게 표현할 수 있는 최대의 정수값. 9007199254740991 |
|`MIN_VALUE`| Number로 표현할 수 있는 0에 가까운 값. 5.00E-324 |
|`MIN_SAFE_INTEGER`| Number로 안전하게 표현할 수 있는 최소의 정수값. -9007199254740991 |
|`EPSILON`|1과 Number로 표현할 수 있는 1보다 큰 최소의 값과의 차. 2.2204460492503130808472633361816E-16 |
|`NaN`|수치가 아니다(Not a Number)|
|`NEGATIVE_INFINITY`| 음수의 무한대 |
|`POSITIVE_INFINITY`|	양수의 무한대 |

* 메소드

|멤버|개요|
|:---:|:---:|
|`toString(rad)`|rad 진수값으로 변환(rad는 2~36)|
|`toExponential(dec)`|지수 형식으로 변환(dec는 소수점 이하의 행수)|
|`toFixed(dec)`|소수점 이해의 행수 dec 반올림 |
|`toPrecision(dec)`|지정 행수로 변환(행수가 부족한 경우는 0으로 보충)|
|#`isNaN(num)`| NaN(Not a Number)인지를 판정) |
|#`isFinite(num)`|유한값인지를 판정|
|#`isInteger(num)`|정수값인지를 판정|
|#`isSafeInteger(num)`|safe Integer인지 (올바르게 IEEE-754배 정도 수로 표현할 수 있는가)를 판정 |
|#`parseFloat(str)`| 문자열을 소수점수로 변환|
|#`parseInt(str [,radix])`| 문자열을 정수로 변환(인수 radix는 기수)|

<br/><br/>

### NUmber 객체의 상수
-
`POSITIVE_INFINITY`/`NEGATIVE_INFINITY`, `NaN`은 모두 특수한 수치(상수)를 나타낸다.

`POSITIVE_INFINITY`/`NEGATIVE_INFINITY`(무한대)는 어떤 연산의 결과가 Javascript에서 표현 가능한 수치의 범위를 넘어섰을 경우의 반환값으로 사용된다. 한편 NaN(Not a Number: 수치가 아닌 값)은 예를 들어 '0을 0으로 나누기' 등의 부정한 연산이 실행되었을 경우, 수치로는 표현할 수 없는 결과를 나타내기 위해서 사용된다.

*NaN은 모든 값과 같지 않다.*
>NaN은 불가사의한 값으로, 자기 자신을 포함한 모든 수치와 같지 않다는 성질을 갖고 있다. 따라서 아래와 같이 비교식은 false를 되돌린다. NaN값을 검출하려면 Number.isNaN 함수를 이용할 필요가 없다.

```javascript
console.log(Number.NaN === Number.NaN); // 결과 : false
```

`MAX_SAFE_INTEGER`/`MIN_SAFE_INTEGER`는 Javascript에서 안전하게 연산할 수 있는 범위의 정수값의 상한/하한을 나타낸다. 상한과 하한을 넘는 연산은 결과를 보증할 수 없다.

```javascript
console.log(Number.MAX_SAFE_INTEGER); // 결과 : 9007199254740991
console.log(Number.MAX_SAFE_INTEGER + 1); // 결과 : 9007199254740992
console.log(Number.MAX_SAFE_INTEGER + 2); // 결과 : 9007199254740992 (부정)
```

<br/>

### 숫자형식을 변환하는 toXxxxx 메소드
-
toXxxxx 메소드는 각각 숫자를 지정 형식으로 변환하거나 특정의 행수로 정렬하기 위해서 사용한다. 

```javascript
var num1 = 255;
console.log(num1.toString(16)); // 결과 : ff
console.log(num1.toString(8)); // 결과 : 377

var num2 = 123.45678;
console.log(num2.toExponential(2)); // 결과 : 1.23e+2
console.log(num2.toFixed(3)); // 결과 : 123.457
console.log(num2.toFixed(7)); // 결과 : 123.4567800
console.log(num2.toPrecision(10)); // 결과 : 123.4567800
console.log(num2.toPrecision(6)); // 결과 : 123.457
```

toFixed 메소드는 소수점 이하의 행수를, toPrecision 메소드는 정수부도 포함한 전체 행수를 지정한다는 점을 주의하기 바란다.

<br/><br/>

### 문자열을 숫자로 변환하기
-
Javascript에서는 데이터형을 명시적으로 변환하기 위한 방법을 제공하고 있다. 데이터형을 명확하게 한 후에 처리하고 싶은 경우, 또는 변수의 내용이 본래부터 애매한 경우에는 명시적으로 데이터형을 변환함으로써 스크립트의 예상치 못한 동작을 미연에 방지할 수 있다. <br/>

예를 들어 다음은 주어진 값을 숫자로 변환하는 parseFloat/parseInt 메소드, Number 함수의 예다. <br/>

parseFloat/parseInt 메소드, Number 함수는 모두 '주어진 값을 숫자로 변환한다'는 공통점을 가지고 있다. 그러나 세부적인 동작은 미묘하게 차이가 있으므로 주의가 필요하다.

```javascript
(1)
var n = '123xxx';
console.log(Number(n)); // 결과 : NaN
console.log(Number.parseFloat(n)); // 결과 : 123
console.log(Number.parseInt(n)); // 결과 : 123


(2)
var d = new Date();
console.log(Number(d)); // 결과 : 1486816983384
console.log(Number.parseFloat(d)); // 결과 : NaN
console.log(Number.parseInt(d)); // 결과 : NaN

(3)
var h = '0x10';
console.log(Number(h)); // 결과 : 16
console.log(Number.parseFloat(h)); // 결과 : 0
console.log(Number.parseInt(h)); // 결과 : 16

(4)
var b = '0b11';
console.log(Number(b)); // 결과 : 3
console.log(Number.parseFloat(b)); // 결과 : 0
console.log(Number.parseInt(b)); // 결과 : 0

(5)
var e = '1.01e+2';
console.log(Number(e)); // 결과 : 101
console.log(Number.parseFloat(e)); // 결과 : 101
console.log(Number.parseInt(e)); // 결과 : 1
```

예를 들면 *1* 과 같이 '123xxx'와 같은 문자열 혼재의 숫자가 주어진 경우, parseXxxx 메소드는 '123'으로 해석할 수 있는 부분을 숫자로 가져온다(단 어디까지나 선두부터 연속된 숫자만이며, 'xxx123' 등은 불가능하다.). 그러나 Number 함수는 이러한 숫자열 혼재의 숫자를 해석하지 않고 NaN을 반환한다.

*2*와 같이 Data 객체가 건네졌을 경우, parseXxxxx 메소드는 이것을 해석할 수 없어 NaN를 반환하지만 Number 함수만은 'Data 객체를 경과 밀리초로 환산한 값'을 숫자로 반환한다.

게다가 정수/부동 소수점 리터럴을 해석한 경우의 결과도 다르다. *3* 과 같이 16진수의 경우 정수 리터럴 '0x10'을 해석한 경우 parseInt 메소드와 Number 함수는 이것을 16진수로 간주하여 '16'을 반환하지만 parseFloat 메소드에서는 *1* 과 동일하게 숫자 문자열 혼재의 문자열로 간주하여 'x'보다 앞에 있는 '0'을 반환한다. 

단, ES2015에서 도입된 2진수, 8진수는 현재 Number 함수 이외에는 올바로 인식할 수 없다( *4* ). parseInt 메소드로도 해석할 수 없으므로 주의하길 바란다.

*5* 는 부동 소수점의 지수 표현 '1.01e+2'를 해석한 경우다. 이 경우 parseFloat 메소드/Number 함수는 이것을 바르게 해석하지만 parseInt 메소드는 맨 끝의 문자열 'e+2'를 삭제하고, 소수점 이하를 잘라낸 '1'을 반환한다.

> **Global 객체의 메소드와 등가**
> 
> parseInt/parseFloat 메소드는 실은 ES2015 이전에도 Global 객체에서 동일한 이름의 멤버로 제공되고 있었다. 그러나 숫자 관련 기능은 Number 객체에 정리되는 편이 알기 쉬우므로 ES2015에서 정리된 것이다. 
> 
> ES2015 이후에도 Global 객체의 parseInt/parseFloat 메소드는 계속 이용할 수 있지만(기능적으로는 다르지 않다). 앞으로는 Number 객체의 것을 우선적으로 이용할 것을 추천한다.

<br/><br/>

### 보충 : 산술 연산자에 의한 문자열 <-> 숫자의 변환
-
문자열 <-> 숫자의 변환에서는 산술 연산자 '+'와 '-'를 이용하는 것도 가능하다.

```javascript
console.log(typeof(123 + ' ')); // 결과 : string (1)
console.log(typeof('123' - 0)); // 결과 : number (2)
```

'+'연산자는 주어진 오퍼랜드 중 하나가 문자열일 경우에 다른 한 쪽도 자동적으로 문자열로 변환 후 서로 연결한다. *1* 에서는 그 설징을 이용해서 숫자 123을 강제적으로 문자열로 변환하고 있다.

한편 *2* 에서는 '-'연산자를 이용하여 문자열에서 숫자로 변환하고 있다. '-'연산자느 ㄴ주어진 오퍼랜드 중 하나가 숫자인 경우 다른 한쪽도 자동적으로 숫자로 변환한 후에 뺀다. 여기에서는 그 성질을 이용해서 문자열 123을 강제적으로 숫자로 변환하고 있다. 

참고로 *2* 를 ['123' +0]으로 하면 어떨까? 당연히 산술 계산이 되지 않는다. 여러 차례 다루었듯이 오퍼랜드의 한쪽이 문자열인 경우 '+'연산자는 (가산 연산자가 아니라) 문자열 연결 연산자로 해석된다.

> **논리형으로의 변환**
> 
> 형 변환의 일환으로 논리형으로의 변환에 대해서도 다루어보겠다. 임의의 값을 강제적으로 논리형으로 변환하려고 할 경우, '!' 연산자로 해석된다. 
> 
> ```javascript
> var num = 123;
> console.log(!!num); // 결과 : true
> ```
> '!' 연산자가 오퍼랜드로써 논리형을 요구하는 것을 이용해 이중으로 '!!'라고 표현해 값을 반전시키고 있다.


