---
tags:
  - web
  - event
aliases:
  - DOMContentLoaded와 load의 차이점
  - DOMContentLoaded와 load
publish: true
created: 2021-12-30 13:06
updated: 2021-12-30 13:15
---

### DOMContentLoaded

- 브라우저가 HTML을 전부 읽고 DOM을 완성하면 발생한다.
	- 스크립트의 실행까지 완료되어야 한다. [[script 태그의 async와 defer 속성]]
		- `async` 스크립트는 `DOMContentLoaded` 를 막지 않는다.
		- `document.createElement('script')` 로 동적으로 추가된 스크립트 역시 `DOMContentLoaded` 를 막지 않는다
- 이미지 파일이나 스타일시트 등의 기타 자원은 기다리지 않는다.
- DOM이 준비된 것을 확인한 후 원하는 DOM 노드를 찾아 핸들러를 등록해 인터페이스를 초기화할 때 사용할 수 있음.
- [[readyState|document.readyState]] 의 값이 `interactive` 이다.

## load

- HTML로 DOM 트리를 만드는 게 완성되었을 뿐만 아니라 이미지, 스타일시트 같은 외부 자원도 모두 불러오는 것이 끝났을 때 발생한다.
- 이미지 사이즈를 확인할 때 등. 외부 자원이 로드된 후이기 때문에 스타일이 적용된 상태이므로 화면에 뿌려지는 요소의 실제 크기를 확인할 수 있다.
- [[readyState|document.readyState]] 의 값이 `complete` 이다.

## Examples

- [DOMContentLoaded vs load (codepen.io)](https://codepen.io/LukeAskew/full/LnJsE)

## Related

- [[readyState]]
- [[beforeunload vs unload]]