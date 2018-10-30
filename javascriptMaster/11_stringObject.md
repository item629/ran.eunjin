# 기본 데이터를 취급하기 위한 객체

<br/>

## 문자열 조작하기 - String 객체
String 객체는 문자열형(string)의 값을 취급하기 위한 래퍼 객체다. 문자열의 유출이나 가공, 검색 등을 실시하기 위한 기능을 제공한다.

String 객체에서 이용 가능한 주요 멤버는 다음의 표와 같다.

* 검색

|멤버|개요|
|:---:|:---:|
|indexOf(substr, [,start])| 문자열 전방(start + 1번째 문자)부터 부분 문자열 substr을 검색 |
|lastIndexOf(substr, [,start])| 문자열 후방(start + 1번쨰 문자)부터 부분 문자열 substr을 검색 |
|startsWith(search [,pos])| 문자열이 지정된 부분 문자열 search로 시작하는가(인수 pos는 검색 시작 위치) |
|endsWith(search [,pos])| 문자열이 지정된 부분 문자열 search로 종료하는가 |
|includes(search [,pos])| 문자열이 저징된 부분 문자열 search를 포함하는가 |

* 부분 문자열

|멤버|개요|
|:---:|:---:|
|charAt(n)| n + 1번째의 문자를 추출 |
|slice(start [,end])| 문자열부터 start + 1~end번째 문자를 추출 |
|substring(start [,end])| 문자열부터 start + 1~end번째 문자를 추출 |
|substr(start [,cnt])| 문자열부터 start + 1번째 문자부터 cnt 수만큼의 문자를 추출 |
|split(str [,limit])| 문자열을 분할 문자열 str로 분할하여 그 결과를 배열로 취득(인수 limit는 최대 분할수)|

* 정규 표현

|멤버|개요|
|:---:|:---:|
|match(reg)| 정규 표현 reg로 문자열을 검색, 일치한 부분 문자열을 취득 |
|replace(reg, rep)| 정규 표현 reg로 문자열을 검색, 일치한 부분을 부분 문자열 rep로 치환 |
|search(reg)| 정규 표현 reg로 문자열을 검색, 일치한 맨 처음 문자 위치를 취득 |

* 대문자 <=> 소문자

|멤버|개요|
|:---:|:---:|
|toLowerCase()| 소문자로 치환 |
|toUpperCase()| 대문자로 치환 |

* 코드 변환(#은 정적 메소드)

|멤버|개요|
|:---:|:---:|
|charCodeAt(n)| n + 1번째 문자를 Latin-1 코드로 변환 |
| #fromCharCode(c1, c2...)| Latin-1 코드 c1, c2... 를 문자로 변환 |
|codePointAt(n)| n + 1번째의 문자를 UTF-16 인코딩된 코드 포인트값으로 변환 |
| #fromCodePoint(num, ...)| 코드 포인트값으로부터 문자열을 생성 |

* 그 외

|멤버|개요|
|:---:|:---:|
|concat(str)| 문자열 뒤쪽에 문자열 str을 연결 |
|repeat(num)| 문자열을 num 숫자만큼 반복한 것을 취득 |
|trim()| 문자열의 전후에서 공백을 삭제 |
|length| 문자열의 길이를 취득 |

![Open in browser](./img/strings.jpeg)

<br/><br/>
다음은 구체적인 운용 예를 살펴보자.

```javascript
var srt1 = '뜰에 뜰에 뜰에는 닭이 있다.';
console.log(str1.indexOf('뜰')); // 결과 : 0 (선두에서부터 검색)
console.log(str1.lastIndexOf('뜰')); // 결과 : 6 (뒤에서부터 검색)
console.log(str1.indexOf('뜰', 3)); // 결과 : 3 (4번째 문자부터 오른쪽 방향 검색)
console.log(str1.lastIndexOf('에', 5)); // 결과 : 4 (6번째 문자부터 왼쪽 방향 검색)
console.log(str1.indexOf('가든')); // 결과 : -1 (불일치)
console.log(str1.startsWith('뜰')); // 결과 : true
console.log(str1.endsWith('뜰')); // 결과 : false
console.log(str1.includes('뜰')); // 결과 : true

var.str2 = 'Wings프로젝트';
var str3 = '💩싸서'; 
var str4 = '	wings	';

console.log(str2.charAt(4)); // 결과 : s (5번째 문자를 추출)
console.log(str2.slice(5, 8)); // 결과 : 프로젝 (6-8번째 문자를 추출)
console.log(str2.substring(5, 8)); // 결과 : 프로젝 (6-8번째 문자를 추출)
console.log(str2.substr(5, 3)); // 결과 : 프로젝 (6번째 문자부터 3문자를 추출)
console.log(str2.split('s')); // 결과 : ["Wing", "프로젝트"]
console.log(str1.split('에', 3)); // 결과 : ["뜰", " 뜰", " 뜰"] (3개로 분할)
console.log(str2.charCodeAt(0)); // 결과 : 87
console.log(String.fromCharCode(87, 105, 110, 103)); // 결과 : Wing
console.log(str3.codePointAt(0)); // 결과 : 128169
console.log(String.fromCodePoint(128169)); // 결과 : 💩
console.log(str2.concat(' 유한회사')); // 결과 : Wings프로젝트 유한회사
console.log(str2.repeat(2)); // 결과 : Wings프로젝트 Wings프로젝트
console.log(str2.trim()); // 결과 : wings
console.log(str2.length); // 결과 : 9(한국어도 1문자로 계산)
```
이렇듯 String 객체의 멤버는 거의 대부분 이해할 수 있는 것들이다.

<br/>

### 부분 문자열을 추출할 때 두 가지 주의점
---
String 메소드는 원본 문자열로부터 부분적인 문자열을 추출하기 위한 메소드로, substring/slice/substr의 세 가지 메소드를 제공하고 있다. 그 중 substring/slice 메소드와 substr 메소드의 차이점은 아래와 같이 명료하다.

* substring/slice 메소드 > 시작 위치 ~ 종료 위치의 범위로 추출 장소를 지정
* substr 메소드 > 시작 위치로부터의 문자수 지정으로 추출 장소를 지정

단, 위의 예제만으로는 이해하기 어려운 것이 substring과 slice 메소드의 차이점이다. 결과만을 봤을 때 둘 다 같은 기능을 제공하고 있는 듯 보이지만, 아래와 같은 조건 하에서는 서로 다른 동작을 하므로 주의하기 바란다.

1. 인수 strat > 인수 end인 경우

>이 경우 substring 메소드는 인수 strat와 인수 end와의 관계를 바꿔서 `end + 1 ~ start번째 문자`까지를 추출한다.
>이에 반해 slice 메소드는 이러한 인수의 교환 없이 그대로 공백 문자열을 반환한다.

```javascript
var str = 'WINGS프로젝트';
console.log(str.substring(8, 5)); // 프로젝 (6-8번째 문자열을 추출)
console.log(str.slice(8, 5)); // 공백 문자열
```

2. 인수 start/end에 음수를 지정한 경우

>이 경우에 substring 메소드는 무조건 0으로 인식하지만 slice 메소드는 '문자열 끝에서부터의 문자수'로 인식한다.

```javascript
var str = 'WINGS프로젝트';
console.log(str.substring(5, -2)); // WINGS (1-5번째 문자열을 추출)
console.log(str.slice(5, -2); //  프로 (6-7번쨰 문자열을 추출)
```
>이 경우에 substring 메소드는 -2를 0으로 간주하므로 'str.substring(5, -2)'는 'ste.substring(5, 0)'과 동일하다. 게다가 1에서의 규칙을 따라 인수 start>end의 경우는 인수를 바꾸는 것으로 판단하므로 'str.substring(0, 5)'로 인지된다.<br/>
>반면에 slice 메소드는 음수를 뒤로부터의 문자수로 인지한다. 즉 -2는 뒤로부터 3번째(즉, 7번째 문자)로 판단하여 'str.slice(5, -2)'는 'str.slice(5, 7)'와 같은 동작을 하게 된다.


<br/><br/>

## 서로게이트 페어(surrogate Pair) 문자의 길이 카운트하기
**서로 게이트 페어** (Surrogate Pair) 문자의 경우, 16비트 코드 두 개를 사용하여 문자 하나를 표현하며
앞의 것을 High Surrogate, 뒤의 것을 Low Surrogate라 한다.
<br/>
length 프로퍼티는 한국어(멀티 바이트 문자)도 한 문자로 카운트한다. 단, 특수한 예외가 있다는 점에 주의해야 한다.

```javascript
var msg = '💩싸';
console.log(msg.length); // 결과 : 3
```

그냥 보기에는 문자가 두 문자지만 결과는 3이다. 여기서 한 문자가 증가한 것일까?<br/>

결론부터 말하자면 이것은 '💩'이라는 그림 문자가 서로게이트 페어이기 때문에 발생하는 문제다. 일반적으로 Unicode(UTF-8)는 한 문자를 2바이트로 표현한다. 그러나 Unicode로 취급해야할 문자가 증가함에 따라 지금까지 2바이트로 표현할 수 있는 문자수(65535문자)로는 부족한 상황이 되었다. 그래서 일부의 문자를 4바이트로 표현함으로써 취급하는 문자수를 확장하게 되었다. 이것이 바로 서로게이트 페어다.<br/>

단, length 프로퍼티는 서로게이트 페어를 식별할 수 없으므로 4바이트 = 2문자로 간주해 버린다. 앞의 예라면 '💩'이 2문자, '싸'가 1문자로 총 3문자가 된다. <br/>

서로게이트 페어를 포함한 문자열을 올바로 카운트하려면 다음과 같은 코드를 작성한다.

```javascript
var msg = '💩싸';
var len = msg.length;
var num = msg.split(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g).length - 1;
console.log(msg.length - num); // 결과 : 2
```

[\uD800-\uDBFF], [\uDC00-\uDFFF]는 각각 서로데이트 페어를 구성하는 상위 서로게이트(앞의 2바이트), 하위 서로게이트(뒤의 2바이트)를 나타낸다. 이것에 해당하는 문자열을 분리함으로써 서로게이트 페어의 문자수를 구할 수 있다. <br/>
그 후에 처리는 그 값을 length 프로퍼티에서 빼서 원래 구하고자 하는 문자수를 얻을 수 있다.
