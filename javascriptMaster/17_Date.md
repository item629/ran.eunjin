# 날짜/시간 데이터 조작하기 - Date 객체

data형의 경우 Javascript 표준 데이터형으로는 존재하지 않는다. 그러나 내장형 객체 Date를 이용하면 날짜를 표현/조작할 수 있다.

<br/><br/>

## Date 객체 생성하기
Date 객체는 문자열이나 배열 등과 같이 리터럴 표현이 존재하지 않으므로 객체의 생성에 반드시 생성자를 경유해야 할 필요가 있다. Date 객체의 생성자에는 다음의 네 가지 구문이 있다.

```javascript
var d = new Date(); // 1
var d = new Date('2016/12/04 20:07:23'); // 2
var d = new Date(2016, 11, 4, 20, 07, 23, 500); // 3
var d = new Date(1480849635500); // 4
```

우선 (1)에서는 디폴트의 Date객체를 생성한다. Date 객체는 디폴트로 생성되는 시점의 시스템 날짜와 시각을 세트한다.

(2)는 날짜 문자열 값을 이용하여 Date객체를 생성한다. 여기서는 '2016/12/04 20:07:23'의 형식으로 날짜 문자열을 지정하고 있는데, 이와는 다른 표현인 'Mon Dec 04 2016 20:07:23'와 같이 영문 표현으로도 지정이 가능하다.

년월일/시분초/밀리초의 형식으로 지정하고 싶은 경우에는 (3)의 구문을 이용한다. 이 경우 시분초, 밀리초는 생략 가능하다. 월 지정의 경우에는 (1~12가 아니라) 0~11로 한다는 점에서 주의가 필요하다.

그 외에 1970/01/01 00:00:00부터 결과 밀리초(타임스탬프 값)로 지정하는 방법(4)도 있다. **타임스탬프** 를 취득하는 방법은 나중에 설명하기로 하자.

그때그때 처한 상황에 따라 각가그이 구문을 사용하면 좋을 것이다.

<br/><br/>

Date 객체에서 이용 가능한 멤버는 아래와 같다.


- **로컬(취득)**


|No.| 멤버 | 개요 |
|----|----|----|
|1|getFullYear()|년(4자리 수)|
|2|getMonth()|월(0~11)|
|3|getDate()|일(1~31)|
|4|getDay()|요일(0: 일요일 ~ 6: 토요일)|
|5|getHours()|시(0~23)|
|6|getMinutes()|분(0~59)|
|7|getSeconds()|초(0~59|
|8|getMilliseconds()|밀리 세컨드(0~999)|
|9|getTime()|1970/01/01 00:00:00로부터 경과 밀리 세컨드|
|10|getTimezoneOffset()|협정세계시와의 시차|

- **로컬(설정)**

|No.| 멤버 | 개요 |
|----|----|----|
|1|setFullYear(y)|년(4자리 수)|
|2|setMonth(m)|월(0~11)|
|3|setDate(d)|일(1~31)|
|4|setHours(h)|시(0~23)|
|5|setMinutes(m)|분(0~59)|
|6|setSeconds(s)|초(0~59)|
|7|setMilliseconds(ms)|밀리 세컨드(0~999)|
|8|setTime(ts)|1970/01/01 00:00:00로부터 경과 밀리 세컨드|

- **협정시(취득)**

|No.| 멤버 | 개요 |
|----|----|----|
|1|getUTCFullYear()|년(4자리 수)|
|2|getUTCMonth()|월(0~11)|
|3|getUTCDate()|일(1~31)|
|4|getUTCDay()|요일(0: 일요일 ~ 6: 토요일)|
|5|getUTCHours()|시(0~23)|
|6|getUTCMinutes()|분(0~59)|
|7|getUTCSeconds()|초(0~59)|
|8|getUTCMilliseconds()|밀리 세컨드(0~999)|

- **협정시(설정)**

|No.| 멤버 | 개요 |
|----|----|----|
|1|setUTCFullYear()|년(4자리 수)|
|2|setUTCMonth()|월(0~11)|
|3setUTCDate()|일(1~31)|
|4|setUTCHours()|시(0~23)|
|5|setUTCMinutes()|분(0~59)|
|6|setUTCSeconds()|초(0~59)|
|7|setUTCMilliseconds()|밀리 세컨드(0~999)

- **해석(\*는 정적 메소드)**

|No.| 멤버 | 개요 |
|----|----|----|
|1|\*parse(dat)|날짜 문자열을 해석해 1970/01/01 00:00:00로부터 경과 밀리세컨드를 취득|
|2|\*UTC(y. m. d [,h [,mm [,s [,ms]]]])|날짜 정보를 기초로 1970/01/01 00:00:00로부터 결과 밀리세컨드를 취득(협정시)|
|3|\*now()|협정세계시에서의 현재 날짜를 1970/01/01 00:00:00로부터 결과 밀리초로 획득|

- **문자열 변환**

|No.| 멤버 | 개요 |
|----|----|----|
|1|toUTCString()|협정세계시를 문자열로 취득|
|2|toLocaleString()|로컬시를 문자열로 취득|
|3|toDateString()|일자 부분을 문자열로 취득|
|4|toTimeString()|시각 부분을 문자열로 취득|
|5|toLocaleDateString()| 지역 정보에 따라서 날짜 부분을 문자열로 취득|
|6|toLocaleTimeString()|지역 정보에 따라서 시각 부분을 문자열로 취득|
|7|toString()|일시를 문자열로 취득|
|8|toJSON()|일시를 JSON 문자열로 취득|

<br/>

> **협정세계시(Coordinated Universal Time)** 란 국제적인 협정으로 정해진 공식 시간을 말한다. 통상 그리니치 표준시(Greenwich Mean Time)와 거의 같은 의미라고 생각해도 무방하다(엄밀하게 말하면 협정세계시는 윤초를 가미하고 있는 만큼 그리니치 표준시와는 다르다). 위의 표로부터 알 수 있듯이 Date 객채에는 Date 객체의 내용을 지역 시각과 협정세계시로서 취득/설정하기 위한 메소드가 각각 제공되고 있다.


거의 대부분은 바로 이해할 수 있을 것이라 생각하지만 다음의 예제를 통해 주요 멤버의 동작을 확인해보자.

```javascript
var dat = new Date(2016, 11, 25, 11, 37, 15, 999);
console.log(dat); // 결과 : Sun Dec 25 2016 11:37:15 GMT+0900 (한국 표준시)
console.log(dat.getFullYear()); // 결과 : 2016
console.log(dat.getMonth()); // 결과 : 11
console.log(dat.getDate()); // 결과 : 25
console.log(dat.getDay()); // 결과 : 0
console.log(dat.getHours()); // 결과 : 11
console.log(dat.getSeconds()); // 결과 : 15
console.log(dat.getMilliseconds()); // 결과 : 999
console.log(dat.getTime()); // 결과 : 1482633435999
console.log(dat.getTimezoneOffset()); // 결과 : -540


```