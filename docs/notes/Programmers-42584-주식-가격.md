---
title: Programmers 42584. 주식 가격
category: Algorithm
tags:
  - algorithm
aliases:
  - Programmers 42584. 주식 가격
created: 2020-09-23T15:00:00.000Z
updated: 2022-09-06T14:00:06.846Z
---

[코딩테스트 연습 - 주식가격](https://programmers.co.kr/learn/courses/30/lessons/42584)

| 문제 유형 | 난이도 | 걸린 시간 | 해결 유무(✅/❌) |
| --------- | ------ | --------- | ---------------- |
| 스택/큐   | lv.2   | 1시간     | ✅               |

## 설계 방법

- `pirces` 와 같은 길이의 배열을 만든다.

- 초 단위 시점을 담을 스택을 만든다.

  - `s.top()` 은 바로 전 시점이다.

- `prices` 를 순회하며 현재 가격보다 이전 가격보다 떨어졌다면,

  - 이전 시점의 `answer` 는 현재 시간 ( `i` ) - 바로 전 시점 ( `s.top()` )이다.

  - 스택을 반복하며 그 전 시점에 대해서도 반복한다.

- 현재 시점 ( `i` )를 스택에 넣는다.

- 스택에 값이 남았다면 그 시점의 답은 전체 길이 - 시점 - 1 이다.

## 코드

```python
def solution(prices):
    answer = [0] * len(prices)
    stack = []

    for i in range(len(prices)):
        while stack and prices[stack[len(stack) - 1]] > prices[i]:
            answer[stack[len(stack) - 1]] = i - stack[len(stack) - 1]
            stack.pop()
        stack.append(i)

    while stack:
        answer[stack[len(stack) - 1]] = len(prices) - stack[len(stack) - 1] - 1
        stack.pop()

    return answer
```

```javascript
function solution(prices) {
	const answer = Array(prices.length);
	const s = new Stack();

	prices.forEach((price, i) => {
		while (!s.isEmpty() && prices[s.top()] > price) {
			answer[s.top()] = i - s.top();
			s.pop();
		}
		s.push(i);
	});

	while (!s.isEmpty()) {
		answer[s.top()] = prices.length - s.top() - 1;
		s.pop();
	}

	return answer;
}

class Stack {
	constructor() {
		this._arr = [];
	}

	push(value) {
		this._arr.push(value);
	}

	pop() {
		return this._arr.pop();
	}

	top() {
		return this._arr[this._arr.length - 1];
	}

	isEmpty() {
		return this._arr.length === 0;
	}
}

module.exports = solution;
```

## 시간 복잡도

- `prices` 순회 : O(NM)

- 스택 순회 : O(M)

- 잘 모르겠다.

## 어려웠던 점

- 이중 반복문을 쓰는 방법이 먼저 떠올랐지만 역시 시간 초과 에러가 나서 다른 방법을 고민해야 했다.

- JS에서 배열을 스택으로 쓸 때 `top()` , `isEmpty()` 메소드가 없어서 직접 구현하는게 불편했다.

- `shift` 연산이 O(n)이라 신경쓰여서 자료구조를 구현해 봤다.

```javascript
class Stack {
	constructor(...items) {
		this._items = [];

		if (items.length > 0) {
			items.forEach((item) => this._items.push(item));
		}
	}

	push(...items) {
		items.forEach((item) => this._items.push(item));
		return this._items;
	}

	pop(count = 0) {
		if (count === 0) {
			return this._items.pop();
		} else {
			return this._items.splice(-count, count);
		}
	}

	peek() {
		return this._items[this.end - 1];
	}

	size() {
		return this._items.length;
	}

	isEmpty() {
		return this._items.length === 0;
	}

	toArray() {
		return this._items;
	}
}
```

```javascript
class Queue {
	constructor(...items) {
		this._items = [];
		this.start = 0;
		this.end = this._items.length;

		this.enqueue(...items);
	}

	enqueue(...items) {
		items.forEach((item) => this._items.push(item));
		this.end += items.length;
	}

	dequeue(count = 1) {
		const prev = this.start;
		this.start += count;
		const items = this._items.slice(prev, this.start);

		if (this.start * 2 >= this._items.length) {
			this._items = this._items.slice(this.start);
			this.start = 0;
			this.end = this._items.length;
		}

		return items;
	}

	isEmpty() {
		return this.end === this.start;
	}

	peek() {
		return this._items[this.end - 1];
	}

	size() {
		return this.end - this.start;
	}

	toArray() {
		return this._items.slice(this.start, this.end);
	}
}
```

## 참고자료

- [JavaScript queues](http://code.iamkate.com/javascript/queues/)

- [gist - Queue.ts](https://gist.github.com/tbjgolden/142f2e0b2c1670812959e3588c4fa8a2)

- [Data Structures: Improving Time Complexity on Stacks and Queues](https://medium.com/better-programming/improving-time-complexity-on-stacks-and-queues-7396ab7b5a2b)
