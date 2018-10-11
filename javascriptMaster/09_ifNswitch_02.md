## 식의 값에 따라 분기 처리하기
지금까지의 예를 봐서 알겠지만 if 명령을 이용함으로써 단순한 분기에서 복잡한 다분기까지 유연하게 표현할 수 있다. 하지만 다음의 예에서는 어떨까?

```javascript
var rank = '8';
if ( rank === 'A' ) {
	console.log('A랭크입니다.');
} else if ( rank === 'B' ) {
	console.log('B랭크입니다.');
} else if ( rank === 'C' ) {
	console.log)'C랭크입니다.');
} else {
	console.log('아무 랭크도 아닙니다.');
}
```

`변수 ==- 값`의 형식으로 동일 조건식이 나열되어 있기 때문에 코드 자체가 상당히 장황하게 보인다. 이런 경우에는 **switch** 명령을 이용해야 한다. `switch` 명령은 '동치 연산자에 의한 다중 분기'에 특화된 조건 분기 명령이다. 같은 조건식을 반복해서 기술하지 않아도 되므로 코드가 깔끔하게 정리돼서 읽기 쉽다.

```javascript
switch (식 ) {
 case 값1;
 	'식 = 값1'인 경우에 실행되는 명령(군)
 case 값2:
 	'식 = 값2'인 경우에 실행되는 명령(군)
 
 .
 .
 .
 
 default;
 	식의 값이 모든 값에 조건상 일치하지 않을 경우에 실행되는 명령(군)
 }
```

switch에서는 아래의 순서대로 처리가 실생된다.

1. 선두의 식이 우선 평가된다.
2. 위 1의 값에 일치하는 case 블록을 실행한다.
3. 일치하는 case 블록이 없을 경우에는 ㅏ지막의 default 블록을 호출한다.

`default` 구문은 필수가 아니지만, 어느 case 구문에도 해당하지 않는 경우의 동작을 명확히 처리하기 위해서라도 생략해서는 안 된다.

<br/>
그럼 switch 명령을 사용한 구체적인 코드를 보도록 하자. 가장 상단에 있는 내용을 switch 명령으로 치환한 것이다.

```javascript
var rank = 'B';
switch(rank) {
	case 'A' :
		console.log('A랭크입니다.');
		break;
	case 'B' :
		console.log('B랭크입니다.');
		break;
	case 'C' :
		console.log('C랭크입니다.');
		break;
	defalut :
		console.log('아무 랭크도 아닙니다.');
		break;
} // 결과 : B랭크입니다.
```

