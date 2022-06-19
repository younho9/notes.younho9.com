---
tags:
  - react
aliases:
  - 재조정
  - Reconcilication
publish: true
created: 2022-01-02 13:01
updated: 2022-01-02 13:01
---

- 리액트에서 "렌더링"은 [[가상 돔(Virtual DOM)]]을 만드는 것(`render` 함수를 호출하는 것)을 말한다.
	- 렌더링이 완료되고, 리액트가 DOM을 업데이트하면 [[브라우저 렌더링 원리|브라우저 렌더링]] 프로세스가 시작되는데, 혼동을 피하기 위해 리액트에서 "페인팅"이라는 용어로 사용하기도 한다.
- 컴포넌트의 props나 state가 변경되었을 때, React는 [[가상 돔(Virtual DOM)|새로 반환된 엘리먼트(스냅샷)]]를 이전에 렌더링된 엘리먼트와 비교해서 [[DOM(Document Object Model)|실제 DOM]] 업데이트가 필요한지 여부를 결정한다.
- DOM 업데이트가 필요하다면, DOM을 업데이트하는데, 이 때 효과적으로 갱신하기 위한 방법이 재조정(Reconcilication)이다.

## 비교 알고리즘(Diffing Algorithm)

- 하나의 트리를 가지고 다른 트리로 변환하는 알고리즘이다.

### 엘리먼트 타입이 다른 경우

> DOM 엘리먼트와 React 엘리먼트 모두 해당

- 루트 엘리먼트의 타입이 다르면 이전 트리를 버리고 완전히 새로운 트리를 구축한다.
	- 파괴(Destroy)
		- 트리를 버릴 때 이전 DOM 노드들은 모두 파괴된다.
		- 컴포넌트 인스턴스는 `componentWillUnmount` 가 실행된다.
	- 마운트(Mount)
		- 새로운 DOM 노드들이 DOM에 삽입된다.
		- 컴포넌트 인스턴스는 `componentDidMount` 가 실행된다.
		- 이전 트리와 연관된 상태(state)는 사라진다.

```jsx
<div>
  <Counter />
</div>

<span>
  <Counter />
</span>
```

### DOM 엘리먼트 타입이 같은 경우

- DOM 엘리먼트의 타입이 같으면, 두 엘리먼트의 속성을 확인하여 변경된 속성들만 갱신한다.

```jsx
<div className="before" title="stuff" />

<div className="after" title="stuff" />
```

### React 엘리먼트 타입이 같은 경우

- 컴포넌트의 타입이 같은 경우에도, 두 엘리먼트의 변경된 [[props vs state|속성(props)]]들만 갱신한다.

```jsx
<Counter count={10} />

<Counter count={11} />
```

- 컴포넌트의 [[props vs state|속성(props)]]이 갱신되면, 
	- 인스턴스는 동일하게 유지되어 렌더링 간 [[props vs state|상태(state)]]가 유지된다.
	- [[props vs state|속성(props)]]이 업데이트 되면, 해당 인스턴스의 `componentDidUpdate` 를 호출한다.

- 비교 알고리즘은 재귀적으로 처리된다.

### 자식에 대한 재귀적 처리
- 노드의 자식들을 재귀적으로 처리할 때, 두 리스트를 순회하고 차이점이 있으면 변경을 생성한다.

```jsx
<ul>
  <li>first</li>
  <li>second</li>
</ul>

<ul>
  <li>first</li>
  <li>second</li>
  <li>third</li> {/* 차이 발생 */}
</ul>
```

- 하지만 위와 같이 순차적으로 추가된 변경이 아닌 경우 성능이 좋지 않다.

```jsx
<ul>
  <li>Duke</li>
  <li>Villanova</li>
</ul>

<ul>
  <li>Connecticut</li> {/* 차이 발생 */}
  <li>Duke</li> {/* 차이 발생 */}
  <li>Villanova</li> {/* 차이 발생 */}
</ul>
```

- 이 문제를 해결하기 위해 React는 key를 통해 기존 트리와 이후 트리의 자식들이 일치하는지 확인한다.

```jsx
<ul>
  <li key="2015">Duke</li>
  <li key="2016">Villanova</li>
</ul>

<ul>
  <li key="2014">Connecticut</li> {/* 차이 발생 */}
  <li key="2015">Duke</li>
  <li key="2016">Villanova</li>
</ul>
```

## Related

## References

- [성능 최적화 – React (reactjs.org)](https://ko.reactjs.org/docs/optimizing-performance.html#avoid-reconciliation)
- [재조정 (Reconciliation) – React (reactjs.org)](https://ko.reactjs.org/docs/reconciliation.html)
