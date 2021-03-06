# 변수와 상수


## var
```javascript
var msg = '안녕하세요, Javascript';
var x = 10;
```

`=`는 '우변의 값을 좌변의 변수에 대입하시오'라는 의미의 명령(연산자)이다. 여기에서는 변수 msg에 '안녕하세요, Javascript'라는 문자열을, 변수 x에 10이라는 정숫값을 각각 대입한다는 의미이다.

<br/><br/>
## 변수를 선언하는 다른 하나의 구문
let 명령은 var 명령과 동일한 구문으로 이용할 수 있다.

```javascropt
//기본적인 선언
let msg;
//복수의 변수를 선언
let x, y;
//초깃값을 설정
let greeting = '안녕하세요, 자바스크립트';
```

그럼 var/let 명령에는 어떠한 **차이** 가 있을까?


1. 블록 스코프를 인식한다.
2. 변수의 중복을 허가하지 않는다.

	>let 명령은 동일한 명칭의 변수를 **허가하지 않는다.** 따라서 아래와 같은 코드는 `Identifier 'msg' has already been declared`(변수 msg는 이미 선언되었다)와 같은 오류가 발생한다. 한편, var 명령은 중복을 허용하므로 문제없이 동작한다. (나중의 '후후후'로 덮어 쓰인다.)

```javascrpt
let msg = '뭐냐뭐냐';
let meg = '후후후';
```
<br/><br/>
## 식별자 명명 규칙

1. 첫 번째 문자는 **영문자/언더스코어(_)/달러표시($)** 중 하나여야 한다.
2. 두 번째 문자 이후에는 첫 번째에서 사용할 수 있는 문자 또는 숫자이어야 한다.
3. 변수명에 포함된 영문자의 **대문자/소문자는 구별되어야 한다.**
4. JavaScript에서 의미를 갖는 예약어가 아니어야 한다.

>JavaScript에서의 예약어는 다음과 같다.

~~~
break, case, catch, class, const, continue
debugger, default, delete, do
else, export, extends
finally, for, function
if, import, implements*, in, instanceof, interface*
new, pakage*, private*, protected*, public*, return
super, switch, this, throw, try, typeof, var, void, while, with, yield
~~~

또 아래와 같은 상황에서도 식별자로 사용하는 것을 피해야한다.

* 앞으로 예약어로 채택될 가능성이 있는 키워드(enum, await 등)
* JavaScript에서 이미 정의된 객체나 그 멤버명(String, eval 등)
<br/><br/>

### * 읽기 쉬운 코드를 위해
명명 규칙에는 없으나 더욱 읽기 쉬운 코드를 작성하기 위한 관섬에서 다음의 여섯 가자 사항을 유의해두면 좋을 것이다.

1. 이름으로부터 데이터의 내용을 유추하기 쉬울 것
2. 너무 길거나 또는 짧지 않을 것
3. 보기에 혼동하기 쉽지 않아야 할 것
4. 첫 번재 문자의 언더스코어는 특별한 의미를 갖는 경우가 있으므로 사용하지 않을 것
5. 미리 정해진 기술 방법으로 통일되게 기술할 것
6. 기본적으로 영단어로 할 것


- **식별자의 주요 기술 방법**
	1. camelCase 기법 : 앞 단어 첫 문자는 소문자, 그 이후의 단어의 첫 문자는 대문자
	2. Pascal 기법 : 모든 단어의 첫 문자는 대문자
	3. 언더스코어 기법 : 모든 단어의 첫 문자는 소문자, 단어 간은 '_'로 연결

- 일반적으로 아래와 같이 나누어 사용한다.
	- 변수명이나 함수명 => camelCase 기법
	- 상수명 => 언더스코어 기법
	- 클래스(생성자)명 => Pascal 기법
<br/><br/>

## 상수 선언하기
변수란 '데이터를 넣어두는 그릇'이다. 그러므로 스크립트의 중간에서 내용을 바꾸어도 상관없다. 한편 그릇과 내용물이 한 세트로 도중에 내용물을 변경할 수 없는 것을 상수라고 한다. 상수란, 코드 안에 나타나틑 의미 있는 값으로 미리 이름을 붙여둔 것을 말한다.

상수를 선언하려면 var/let 명령 대신에 const 명령을 이용하면 된다. 

~~~
const 상수명 = 값;
~~~

상수의 명령 규칙은 변수의 규칙과 거의 비슷하지만 상수인 것을 식별하기 쉽게 모든 문자를 대문자로, 단어를 언더스코어로 구분하는 것이 일반적이다. 예를 들면 `CONSUMPTION_TAX`,`USER_NAME`과 같은 식이다. 

```javascript
const TAX = 1.08;
var price = 100;
console.log(price * TAX); //결과 : 108
```