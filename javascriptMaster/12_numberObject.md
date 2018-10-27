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
---
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

