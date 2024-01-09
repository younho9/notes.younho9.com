---
title: Programmers 42746. 가장 큰 수
category: Algorithm
tags:
  - algorithm
aliases:
  - Programmers 42746. 가장 큰 수
created: 2020-10-05T15:00:00.000Z
updated: 2022-09-06T14:00:06.859Z
---

[코딩테스트 연습 - 가장 큰 수](https://programmers.co.kr/learn/courses/30/lessons/42746)

| 문제 유형 | 난이도 | 걸린 시간 | 해결 유무(✅/❌) |
| --------- | ------ | --------- | ---------------- |
| 정렬      | lv.2   | 1시간     | ✅               |

### 설계 방법

- numbers 배열을 두 숫자를 앞, 뒤로 이어 붙여 숫자를 만들어 보고, 둘 중 결과가큰순서로 정렬한다.

- 정렬한 결과를 `join` 함수로 문자열로 만든다.

- 정렬 한 후 결과의 첫 번째 글자가 `0` 이라면 모든 숫자가 0인 경우 밖에 없기 때문에, 그대로 0을 리턴하고, 아니라면 결과를 리턴한다.

### 코드

```javascript
function solution(numbers) {
	const result = numbers.sort((a, b) => `${b}${a}` - `${a}${b}`).join('');
	return result[0] === '0' ? '0' : result;
}
```

### 시간 복잡도

- O(NlogN)

### 어려웠던 점

- 처음에는 순열로 접근, 순열은 시간복잡도가 O(2^N), 런타임 에러 및 core dumped 에러 발생

- 두 번째로는 숫자의 마지막 숫자를 늘어뜨리고 정렬하는 방법을 생각함.

  - ex) 1 ⇒ 1111, 10 ⇒ 1000, 9 ⇒ 9999, 98 ⇒ 9888

  - 반례) 40, 403 ⇒ 40403, (40340 x)

### 참고자료
