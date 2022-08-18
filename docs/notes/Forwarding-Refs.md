---
title: Forwarding Refs
category: React
tags:
  - react
  - react
aliases:
  - Ref 전달
publish: true
created: 2022-01-09 16:27
updated: 2022-01-09 16:27
---

# {{ $frontmatter.title }}

- 컴포넌트의 자식 중 하나에 ref를 전달하는 기법.
- 재사용 가능한 컴포넌트 라이브러리와 같은 컴포넌트에서는 유용할 수 있다.

```jsx
function FancyButton(props) {
	return <button className="FancyButton">{props.children}</button>;
}

//=>

const FancyButton = React.forwardRef((props, ref) => (
	<button ref={ref} className="FancyButton">
		{props.children}
	</button>
));

// 이제 DOM 버튼으로 ref를 직접 받을 수 있다.
const ref = React.createRef();
<FancyButton ref={ref}>Click me!</FancyButton>;
```

## Related

## References

- [Forwarding Refs – React (reactjs.org)](https://ko.reactjs.org/docs/forwarding-refs.html#gatsby-focus-wrapper)
