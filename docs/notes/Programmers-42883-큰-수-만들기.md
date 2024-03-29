---
title: Programmers 42883. 큰 수 만들기
category: Algorithm
tags:
  - algorithm
aliases:
  - Programmers 42883. 큰 수 만들기
created: 2020-10-12T15:00:00.000Z
updated: 2022-09-06T14:00:06.914Z
---

[코딩테스트 연습 - 큰 수 만들기](https://programmers.co.kr/learn/courses/30/lessons/42883)

| 문제 유형      | 난이도 | 걸린 시간 | 해결 유무(✅/❌) |
| -------------- | ------ | --------- | ---------------- |
| 탐욕법(그리디) | lv.2   | 2시간     | ✅               |

### 설계 방법

- k번 동안

- 숫자 하나를 제거 했을 때 가장 큰 수를 반환함

### 코드

```javascript
function solution(number, k) {
	for (let i = 0; i < k; i++) {
		number = removeOneNumber(number);
	}

	return number;
}

function removeOneNumber(number) {
	return [...number].reduce((largeNumber, _, i, arr) => {
		const createdNumber = [...arr.slice(0, i), ...arr.slice(i + 1)].join('');
		return largeNumber < createdNumber ? createdNumber : largeNumber;
	}, 0);
}
```

### 시간 복잡도

- O(k\*N)

### 어려웠던 점

- 문제를 쉽게 풀었다고 생각했는데, 테스트 케이스에서 시간 초과가 발생했다.

- 시간 초과를 해결하는 방법을 찾지 못했고, 풀었던 방법에서 다른 방법으로 바꾸는것이 어려웠다.

- 다른 사람들의 풀이를 봤는데, 이해가 되지 않았다. 뭔가 오늘 따라 뇌가 잘 안돈다 ..

### 참고자료

[](https://velog.io/@kimtaeeeny/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-%ED%81%B0-%EC%88%98-%EB%A7%8C%EB%93%A4%EA%B8%B0-javascript)

[프로그래머스 Level 2 큰 수 만들기(Greedy) C++](https://mtoc.tistory.com/80)
