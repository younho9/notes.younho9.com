---
title: react import 스타일
category: React
tags:
  - react
publish: true
created: 2022-01-04 01:22
updated: 2022-01-04 01:22
---

# {{ $frontmatter.title }}

- 기본 가져오기 대신 destructured named imports를 사용하는 것이 앞으로 더 선호된다.

## Example

```jsx
import React from 'react';

function App() {
	return <h1>Hello World</h1>;
}

// =>

function App() {
	return <h1>Hello World</h1>;
}
```

```jsx
import React from 'react';

function App() {
	const [text, setText] = React.useState('Hello World');
	return <h1>{text}</h1>;
}

// =>

import {useState} from 'react';

function App() {
	const [text, setText] = useState('Hello World');
	return <h1>{text}</h1>;
}
```

## Related

## References

- [Introducing the New JSX Transform – React Blog (reactjs.org)](https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html#removing-unused-react-imports)
- [ES Modules: Default imports are not namespace imports! - DEV Community](https://dev.to/mapleleaf/es6-modules-and-default-imports-p0)
- [Dan's comment](https://twitter.com/dan_abramov/status/1308739731551858689)
