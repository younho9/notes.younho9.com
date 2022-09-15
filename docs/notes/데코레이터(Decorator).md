---
title: 데코레이터(Decorator)
category: JavaScript
tags:
  - javascript
aliases:
  - 데코레이터(Decorator)
  - 데코레이터
  - Decorator
related:
  - 일급-시민(First-class-citizen)
created: 2022-01-06T04:59:00.000Z
updated: 2022-09-06T14:00:07.146Z
---

> 아직 JS의 정식 기능이 아니다. ECMA TC39의 표준화 절차를 진행하고 있다.
>
> Babel을 사용해서 사용할 수 있다.

- 새 함수를 반환하여 전달된 **함수 또는 메서드의 동작을 수정하는 함수**
- 함수를 [[일급-시민(First-class-citizen)|일급 시민(First-class citizen)]]으로서의 기능을 지원하는 모든 언어는 데코레이터를 구현할 수 있다.
- 파이썬 예제

  > 파이썬의 데코레이터가 JS의 데코레이터 작동 방식보다 단순하여 설명하기 좋다.

  ```python
  def cashify(fn):
    def wrap():
      print("$$$$")
      fn()
      print("$$$$")
    return wrap

  @cashify
  def sayHello():
    print("hello!")

  sayHello()

  # $$$$

  # hello!

  # $$$$
  ```

## 속성 설명자

- JS 객체는 프로퍼티가 있고, 각 프로퍼티는 값 뿐만 아니라 숨겨진 정보들을 갖는다 .

  - `Object.getOwnPropertyDescriptor` / `Object.getOwnPropertyDescriptors` 를 사용해 알 수 있다.

  ```javascript
  const oatmeal = {
  	viscosity: 20,
  	flavor: 'Brown Sugar Cinnamon',
  };

  console.log(Object.getOwnPropertyDescriptor(oatmeal, 'viscosity'));

  /*
  {
    value: 20,
    writable: true,
    enumerable: true,
    configurable: true,
  }
  */
  ```

- 객체의 [접근자 프로퍼티](https://ko.javascript.info/property-accessors)는 `value`와 `writable`이 없는 대신에 `get`과 `set`이라는 함수가 있다.

### 데코레이터 작성법

- JS 데코레이터 함수에는 세 가지 인자가 전달된다.
  1. `target` : 현재 인스턴스 객체의 클래스
  2. `key` : 데코레이터를 적용할 속성 이름(문자열 )
  3. `descriptor` : 해당 속성의 설명자 객체 - 객체의 메서드나 속성을 꾸미려면 새로운 속성 설명자를 반환해야 한다. - 속성을 읽기 전용으로 만드는 데코레이터

```javascript
function readOnly(target, key, descriptor) {
	return {...descriptor, writable: false};
}

class Oatmeal extends Porridge {
	@readOnly viscosity = 20;

	constructor(flavor) {
		super();
		this.flavor = flavor;
	}
}
```

## TypeScript

- `tsconfig.json` 에서 `experimentalDecorators` 컴파일러 옵션을 활성화해야 한다.

## References

- [자바스크립트 데코레이터 이해하기 | TOAST UI :: Make Your Web Delicious](https://ui.toast.com/weekly-pick/ko_20200102)
- [TypeScript: Documentation - Decorators (typescriptlang.org)](https://www.typescriptlang.org/ko/docs/handbook/decorators.html)
