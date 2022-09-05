---
title: 실행 컨텍스트(Execution Context)
category: JavaScript
tags:
  - javascript
aliases:
  - 실행 컨텍스트(Execution Context)
related:
  - 스코프(Scope)
  - this
  - 호이스팅(hoisting)
created: 2021-12-31T12:55:00.000Z
updated: 2022-09-05T05:04:22.272Z
---

# {{ $frontmatter.title }}

- **실행 가능한 코드**가 실행되기 위해 **필요한 환경 정보 객체**
  - 실행 가능한 코드
    - 전역 코드
    - Eval 코드
    - 함수 코드
  - 필요한 환경 정보 객체
    - 변수 : 전역 변수, 지역 변수, 매개변수, 객체의 프로퍼티, 함수 선언
    - 변수의 [[스코프(Scope)|유효범위(Scope)]]
    - [[this]]

## 실행 컨텍스트 생성 과정

```js
var x = 'xxx';

function foo() {
	var y = 'yyy';

	function bar() {
		var z = 'zzz';
		console.log(x + y + z);
	}
	bar();
}

foo();
```

1. 전역 코드에의 진입
   1. 전역 객체가 생성된다.
   2. 전역 실행 컨텍스트가 생성된다.
   3. 실행 컨텍스트 스택에 쌓인다.
   4. 스코프 체인이 생성된다.
      - 스코프 체인이 전역 객체의 레퍼런스를 포함하는 리스트로 초기화된다.
   5. 변수 객체(Variable Object)화 실행
      - 매개변수가 VO에 설정된다. (함수인 경우)
      - 함수 선언이 VO에 설정된다. (함수 호이스팅)
      - 변수 선언이 VO에 설정된다. (변수 호이스팅)

## Related

- [[스코프(Scope)]]
- [[호이스팅(hoisting)]]

## References

- [Execution Context | PoiemaWeb](https://poiemaweb.com/js-execution-context#31-%EC%A0%84%EC%97%AD-%EC%BD%94%EB%93%9C%EC%97%90%EC%9D%98-%EC%A7%84%EC%9E%85)
