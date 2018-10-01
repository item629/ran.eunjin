Javascript의 주요 데이터형
---

- 기본형

~~~
숫자형(number)
문자열형(string) : 큰따옴표/작은따옴표로 감싸인 0개 이상의 문자 집합
논리형(boolean) : 참(true)/거짓(false)
심벌형(symbol)
특수형(null/undefined) : 값이 미정의된 것을 나타냄
~~~

- 참조형

~~~
배열(array) : 데이터의 집합(각 요소에는 인덱스 번호로 접근 가능)
객체(object) : 데이터의 집합(각 요소에는 이름으로 접근 가능)
함수(function) : 일련의 처리(절차)의 집합
~~~
<br/><br/>
## 문자열 리터럴 주요 이스케이프 시퀀스

- \b : 백스페이스
- \f : 새로운 페이지
- \n : 개행(LF: Line Feed)
- \r : 복귀(CR: Carriage Return)
- \t : 탭문자
- \\ : \마크
- \' : 작은따옴표
- \" : 큰따옴표
- \xXX : Latin-1 문자(XX는 진수) 예: \x61 (a)
- \uXXXX : Unicode 문자(XXXX는 16진수) 예 \uC815 (정)
- \u{XXXXX} : 0xffff (4개의 16진수)을 넘는 Unicode 문자. 예: \u{20b9f}


