---
title: Programmers 42860. 조이스틱
category: Algorithm
tags:
  - algorithm
aliases:
  - Programmers 42860. 조이스틱
created: 2020-10-13T15:00:00.000Z
updated: 2022-09-06T14:00:06.889Z
---

[코딩테스트 연습 - 조이스틱](https://programmers.co.kr/learn/courses/30/lessons/42860)

| 문제 유형      | 난이도 | 걸린 시간  | 해결 유무(✅/❌) |
| -------------- | ------ | ---------- | ---------------- |
| 탐욕법(그리디) | lv.2   | 1시간 30분 | ✅               |

### 설계 방법

- A가 아닌 위치(방문해야할 위치)의 index 들을 Map 자료구조에 담는다. `positions`

- 반복문

  - 방문할 위치의 최소 알파벳 이동 거리를 구해서 `move` 에 더한다. (range 함수를만들어 썼는데, 다시보니 불필요한 코드인 듯)

  - 현재 위치를 방문한 것으로 처리. `positions.delete`

  - 방문할 위치가 남아있지 않으면 반복문 종료

  - `positions` 를 순회하며 최단 거리로 이동할 수 있는 위치를 찾는다.

  - 해당 위치로 이동하고 이동한 만큼 `move` 에 더한다.

### 코드

```javascript
function solution(name) {
	const dirties = [...name].map((ch) => ch !== 'A');
	const positions = dirties.reduce(
		(map, cur, i) => (cur ? new Map([...map, [i, i]]) : map),
		new Map(),
	);

	const length = name.length;
	let curPosition = 0;
	let move = 0;

	while (true) {
		move += findLeastAlphabetMove(name[curPosition]);
		positions.delete(curPosition);

		if (!positions.size) {
			break;
		}

		let leastDistance = length;
		let nextPosition = curPosition;

		positions.forEach((position) => {
			const distance = Math.min(
				Math.abs(curPosition + length - position),
				Math.abs(position - curPosition),
			);

			if (distance < leastDistance) {
				leastDistance = distance;
				nextPosition = position;
			}
		});

		curPosition = nextPosition;
		move += leastDistance;
	}

	return move;
}

const range = (start, stop, step) =>
	Array.from({length: (stop - start) / step + 1}, (_, i) => start + i * step);

const findLeastAlphabetMove = (target) => {
	const alphabets = new Map(
		range('A'.charCodeAt(0), 'Z'.charCodeAt(0), 1)
			.map((x) => String.fromCharCode(x))
			.map((v, i) => [v, i]),
	);

	const targetPosition = alphabets.get(target);

	return alphabets.size / 2 > targetPosition
		? targetPosition
		: alphabets.size - targetPosition;
};
```

### 시간 복잡도

- A가 아닌 위치 개수 (N)

- O(N!)

### 어려웠던 점

- 그리디 알고리즘을 아직 잘 모르겠다..

- 다른 풀이를 보니 오른쪽으로만 가는 경우, 왼쪽으로만 가는 경우, 오른쪽으로 갔다가 왼쪽으로 가는 경우, 왼쪽으로 갔다가 오른쪽으로 가는 경우로 나누어서 풀었는데, 이 풀이를 떠올리기는 어려웠다.

### 참고자료

[LIBRARY : 네이버 블로그](https://blog.naver.com/teen14y/222109469253)
