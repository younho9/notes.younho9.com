---
tags:
  - react
  - react-api
  - react-hooks
publish: true
created: 2022-01-02 16:27
updated: 2022-01-02 16:27
---

# useCallback과 useMemo

- useCallback과 useMemo는 오히려 성능 면에서 더 안좋을 수 있다.

  ```js
  const dispense = (candy) => {
  	setCandies((allCandies) => allCandies.filter((c) => c !== candy));
  };

  const dispenseCallback = React.useCallback(dispense, []);
  ```

  - useCallback을 사용하면, React.useCallback 함수를 추가로 호출하고, 의존성 배열을 정의해주어야 한다.
  - 새로 렌더링이 되면, 메모이징된 함수를 사용하지만, 추가로 dispense 함수의 생성은 일어난다.
  - 사용하지 않는 경우는 함수를 새로 생성하긴 하지만, 이전의 함수는 가비지 컬렉터에 의해 제거된다.

1. 동료가 보기에 코드가 더 복잡해 질 수 있다.
2. 의존성 배열을 잘못 사용할 수 있다.
3. 내부 훅을 호출 함으로써 성능 상 안쓰느니 못할 수 있다.
4. 의존성과 memoized된 값들이 가비지 컬랙터가 안되게 만들수도 있다.

-> 굳이 성능상 이점을 원한다면 위 비용들의 발생을 감수할수도 있지만 **손익분실 계산이 최우선이 되어야 한다.**

## 언제 사용해야 하는가?

1. 참조 동일성이 유지되어야 할 때
2. 비용이 많이 드는 계산이 있을 때

- 비용이 많이 드는 계산을 하는 컴포넌트가 props가 변경되지 않으면 다시 렌더링되지 않도록 [[React.memo]]로 감싸진 컴포넌트에 대해 사용할 수 있다.
- 성능 개선은 항상 비용이 든다.
- 성능 개선을 함으로써 얻어지는 이득이 그 비용을 상쇄할 수 있을 때만 해야 한다.

## Related

## References

- [When to useMemo and[]() useCallback (kentcdodds.com)](https://kentcdodds.com/blog/usememo-and-usecallback)
