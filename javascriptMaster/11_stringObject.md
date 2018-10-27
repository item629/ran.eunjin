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

