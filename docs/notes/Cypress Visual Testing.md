---
tags:
  - tag
aliases:
  - Cypress Visual Testing
publish: true
created: 2022-07-13 10:38
updated: 2022-07-13 10:38
---

# Cypress Visual Testing

- Cypress는 *functional* 테스트 러너다. 즉, 웹 애플리케이션이 유저가 기대한대로 *기능적으로*  동작하는지 테스트하는 도구다.
	- 문구 노출
	- 요소 제거
	- 유저 액션 이후에 CSS 클래스 추가
- Cypress는 페이지가 실제로 어떻게 보이는지는 관여하지 않는다. (비주얼 테스트)
	- 물론, 기술적으로 CSS 속성을 가지고 있는지를 [have.css assertion](https://docs.cypress.io/guides/references/assertions#CSS) 으로 테스트할 수 있지만, 이는 금방 복잡해지고, 유지보수하기 어려워진다.
	- 비주얼 테스트는 CSS 이상에 의존할 수 있다.
		- SVG, 이미지 또는 canvas에 어떤 모양이 올바르게 그려졌는지
- 다행히 Cypress는 플러그인을 통해 비주얼 테스트를 할 수 있다.
	- 특정 요소를 테스트한 다음 이미지를 이전에 승인된 이미지와 비교한다.
	- 이미지가 동일한 경우 (설정된 픽셀 허용 오차 내에서)

## Related

## References

- [Visual Testing | Cypress Documentation](https://docs.cypress.io/guides/tooling/visual-testing#What-you-ll-learn)