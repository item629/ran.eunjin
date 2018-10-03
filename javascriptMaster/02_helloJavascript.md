
Javascript로 "안녕하세요, 자바스크립트!" 표기하기
---
~~~
<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8" />
	<title>자바스크립트 마스터북</title>
</head>
<body>
	<script type="text/javascript">
		// window.alert은 지정된 문자열을 대화상자로 표시하기 위한 명령이다.
		window.alert('안녕하세요, 자바스크립트!');
	</script>
	<noscript>Javascript를 이용할 수 없습니다.</noscript>
	//Javascript를 이용할 수 없는 경우
</body>
</html>
~~~
<br/><br/>
## 외부 스크립트 임포트하기

~~~
<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8" />
	<title>자바스크립트 마스터북</title>
</head>
<body>
	<script type="text/Javascript" src="script/hello_ex.js"></script>
	<noscript>Javascript를 사용할 수 없습니다.</noscript>
</body>
</html>
~~~

~~~
// window.alert는 지정한 문자열을 대화상자로 표시하는 명령이다.
window.alert('안녕하세요, 자바스크립트!');
~~~


### *외부 스크립트와 인라인 스크립트를 병용하는 경우에 주의할 점
src 속성을 지정한 경우 <`script`> 요소 안의 콘텐츠는 무시되기 때문이다. 만일 외부 스크립트와 인라인 스크립트를 병용할 경우에는 아래와 같이 <`script`>요소를 분리할 필요가 있다.

~~~
<script type="text/Javascript" src="lib.js">
window.alert('안녕하세요, 자바스크립트!'); //무시된다
</script>
~~~

~~~
<script type="text/Javascript" src="lib.js"></script>
<script type="text/Javascript">
window.alert('안녕하세요, 자바스크립트!');
</script>
~~~

<br/><br/>
## Anchor 태그에 스크립트 집어넣기
<`script`> 요소에 기술을 더하는 것 이외에도 Anchor 태그의 href 속성에 'Javascript:~'의 형식으로 스크립트를 집어넣을 수도 있다. 이런 기법을 JavaScript 의사 프로토콜이라고 한다.

~~~
<a href-"Javascript:스크립트 코드"> 링크 텍스트 </a>
~~~

예를 들어 '링크 클릭 시, 대화상자를 표기하고 싶은' 경우에는 아래와 같이 기술하면 된다.

~~~
<a href="Javascript:window.alert('안녕하세요, 자바스크립트!');">
대화상자 표시</a>
~~~

<br/><br/>
## Jacascript의 주석 구문
주석(Comment)이란, 말 그대로 스크립트의 동작에는 상관없는 메모와 같은 정보를 말한다.

~~~
// comment	: 단일행 주석, '//'부터 해당 행의 끝까지를 주석으로 본다.
/* comment */ 	: 복수행 주석, '/*~*/'으로 둘러싸인 블록을 주석으로 본다.
/** comment */ 	: 문서화 주석, '/**~*/'으로 둘러싸인 블록을 주석으로 본다.
~~~
