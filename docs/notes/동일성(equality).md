---
tags:
  - javascript
aliases:
  - 참조 동일성
  - 비교
publish: true
created: 2022-01-02 17:32
updated: 2022-01-06 17:19
---

JavaScript의 동일성 비교에는 여러 가지 방법이 있다.

- `==` : 추상 비교(Abstract equality), 느슨한 비교(Loose equality)
	- 두 가지를 비교할 때 [[형 변환(Type conversion)|암묵적 형 변환(Type coercion)]]이 발생한다.
- `===` : 엄격 비교(Strict equality), 일치 비교
	- 동등 비교와 비슷하지만 형 변환을 하지 않는다.
- `Object.is` : 등가 비교(Same value equality)
	- 엄격 동등 비교와 두 가지 케이스를 제외하고 동일하다.

		|               | `Object.is` | `===` |
		| ------------- | ----------- | ----- |
		| `NaN === NaN` | true        | false |
		| `-0 === 0`    | false       | true  |

## Related

- [[pass by reference vs pass by value]]

## References

- [JS Comparison Table (dorey.github.io)](https://dorey.github.io/JavaScript-Equality-Table/)
- [동치 비교 및 동일성 - JavaScript | MDN (mozilla.org)](https://developer.mozilla.org/ko/docs/Web/JavaScript/Equality_comparisons_and_sameness)
- [비교 연산자 (javascript.info)](https://ko.javascript.info/comparison)
