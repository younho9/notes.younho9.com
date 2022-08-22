---
title: Programmers 42840. 모의고사
category: Algorithm
tags:
  - algorithm
created: 2020-10-08T00:00:00.000+09:00
updated: 2021-02-15T00:00:00.000+09:00
---

# {{ $frontmatter.title }}

[코딩테스트 연습 - 모의고사](https://programmers.co.kr/learn/courses/30/lessons/42840)

| 문제 유형 | 난이도 | 걸린 시간 | 해결 유무(✅/❌) |
| --------- | ------ | --------- | ---------------- |
| 완전탐색  | lv.1   | 20분      | ✅               |

### 설계 방법

- 수포자들의 번호 규칙을 기록한다.

- `%` 연산자와 번호 규칙 배열의 길이를 사용하여 `answers` 의 index와 수포자들의번호 규칙과 index를 맞춰 점수를 계산한다.

- 최대 점수를 기록한다.

- 최대 점수와 같은 사람의 번호를 정답 배열에 순서대로 넣는다.

### 코드

- 첫 번째 풀이

```javascript
function solution(answer) {
	const person1 = [1, 2, 3, 4, 5];
	const person2 = [2, 1, 2, 3, 2, 4, 2, 5];
	const person3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

	const score = [0, 0, 0];

	answer.forEach((n, i) => {
		if (person1[i % person1.length] === n) {
			score[0]++;
		}
		if (person2[i % person2.length] === n) {
			score[1]++;
		}
		if (person3[i % person3.length] === n) {
			score[2]++;
		}
	});

	return score.reduce((best, cur, idx) => {
		const bestPerson = best.pop();
		if (!bestPerson || cur > score[bestPerson - 1]) {
			return [idx + 1];
		}
		best.push(bestPerson);
		if (cur === score[bestPerson - 1]) {
			best.push(idx + 1);
		}
		return best;
	}, []);
}
```

- 리팩토링

```javascript
function solution(answers) {
	const answer = [];

	const p1 = [1, 2, 3, 4, 5];
	const p2 = [2, 1, 2, 3, 2, 4, 2, 5];
	const p3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

	const s1 = answers.filter((a, i) => a === p1[i % p1.length]).length;
	const s2 = answers.filter((a, i) => a === p2[i % p2.length]).length;
	const s3 = answers.filter((a, i) => a === p3[i % p3.length]).length;
	const max = Math.max(s1, s2, s3);

	if (s1 === max) {
		answer.push(1);
	}
	if (s2 === max) {
		answer.push(2);
	}
	if (s3 === max) {
		answer.push(3);
	}

	return answer;
}
```

### 시간 복잡도

- 정답 배열 순회 : O(n)

### 어려웠던 점

- 최대값을 가진 사람의 번호를 정답 배열에 넣는 부분이 어려웠다.

- 해결 후 다른 사람의 풀이 중 깔끔한 코드가 있어서, 참고하여 리팩토링했다.

### 참고자료
