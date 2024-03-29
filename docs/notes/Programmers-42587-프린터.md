---
title: Programmers 42587. 프린터
category: Algorithm
tags:
  - algorithm
aliases:
  - Programmers 42587. 프린터
created: 2020-10-02T15:00:00.000Z
updated: 2022-09-06T14:00:06.856Z
---

[코딩테스트 연습 - 프린터](https://programmers.co.kr/learn/courses/30/lessons/42587)

| 문제 유형 | 난이도 | 걸린 시간 | 해결 유무(✅/❌) |
| --------- | ------ | --------- | ---------------- |
| 스택/큐   | lv.2   | 20분      | ✅               |

### **설계 방법**

- 문서의 `index` 를 담고 있는 큐와 `priorities` 큐를 동시에 관리함.

- 문제에 나와있는 설명 그대로 구현함.

### 코드

```javascript
function solution(priorities, location) {
	const waiting = priorities.map((_, idx) => idx);
	const finished = [];

	while (priorities.length) {
		const cur = priorities.shift();
		const curIdx = waiting.shift();
		if (priorities.some((priority) => priority > cur)) {
			priorities.push(cur);
			waiting.push(curIdx);
			continue;
		}
		finished.push(curIdx);
	}

	return finished.findIndex((el) => el === location) + 1;
}
```

### **시간 복잡도**

- 우선순위 배열을 순회하며 (n) 우선순위 배열 내에 현재 요소보다 우선순위가 더 높은 요소가 있는지 검색 (n) => O(n^2)

- 추가적으로 큐가 최적화되어 있지 않아서 shift 연산 마다 O(n)

=> O(n^2)

### **어려웠던 점**

- 문제 설명을 따라서 쉽게 풀 수 있었음.

- O(n^2) 연산 없이 현재 요소보다 우선순위가 더 높은 요소를 검색할 수 있는지 모르겠음.

### **참고자료**
