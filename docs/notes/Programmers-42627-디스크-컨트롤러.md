---
title: Programmers 42627. 디스크 컨트롤러
category: Algorithm
tags:
  - algorithm
aliases:
  - Programmers 42627. 디스크 컨트롤러
created: 2020-10-03T15:00:00.000Z
updated: 2022-09-06T14:00:06.887Z
---

[코딩테스트 연습 - 디스크 컨트롤러](https://programmers.co.kr/learn/courses/30/lessons/42627?language=javascript)

| 문제 유형 | 난이도 | 걸린 시간 | 해결 유무(✅/❌) |
| --------- | ------ | --------- | ---------------- |
| 힙        | lv.3   | 1시간     | ✅               |

### 설계 방법

- `jobs` 를 시간순으로 정렬하여 큐에 넣는다.

- 현재 시간 `time` 이내에 있는 `job` 들을 모두 `heap` 에 넣는다.

- 힙에서 최소 시간 `job` 을 꺼낸다.

- 현재 `job`의 반환시간(현재시간 - `job` 요청 시간 + `job` 수행 시간)을 총 반환시간에 더한다.

- 현재 시간을 증가시킨다.

- `job` 이 없을 경우 `time` 을 1만큼 증가시킨다.

### 코드

```javascript
function solution(jobs) {
	const heap = new MinHeap();
	const done = [];

	jobs.sort((a, b) => a[0] - b[0]);

	const jobQueue = jobs.reduce((queue, job) => {
		queue.enqueue(job);
		return queue;
	}, new Queue());

	let turnaroundTime = 0;
	let time = 0;
	let i = 0;
	while (done.length !== jobs.length) {
		while (!jobQueue.isEmpty() && jobQueue.peek()[0] <= time) {
			heap.insert(jobQueue.dequeue());
		}

		const currentJob = heap.remove();
		if (currentJob) {
			turnaroundTime += time - currentJob[0] + currentJob[1];
			time += currentJob[1];
			done.push(currentJob);
		} else {
			time++;
		}
	}

	return Math.floor(turnaroundTime / jobs.length);
}

class Queue {
	constructor() {
		this._items = [];
		this.start = 0;
		this.end = 0;
	}

	enqueue(item) {
		this._items.push(item);
		this.end += 1;
	}

	dequeue() {
		return this._items[this.start++];
	}

	peek() {
		return this._items[this.start];
	}

	size() {
		return this.end - this.start;
	}

	isEmpty() {
		return this.end === this.start;
	}
}

class MinHeap {
	constructor() {
		this.heap = [null];
	}

	getMin() {
		return this.heap[1];
	}

	size() {
		return this.heap.length - 1;
	}

	insert(node) {
		this.heap.push(node);

		if (this.heap.length > 1) {
			let current = this.heap.length - 1;

			while (
				current > 1 &&
				this.heap[Math.floor(current / 2)][1] > this.heap[current][1]
			) {
				[this.heap[Math.floor(current / 2)], this.heap[current]] = [
					this.heap[current],
					this.heap[Math.floor(current / 2)],
				];
				current = Math.floor(current / 2);
			}
		}
	}

	remove() {
		let smallest = this.heap[1];

		if (this.heap.length > 2) {
			this.heap[1] = this.heap[this.heap.length - 1];
			this.heap.splice(this.heap.length - 1);

			if (this.heap.length === 3) {
				if (this.heap[1][1] > this.heap[2][1]) {
					[this.heap[1], this.heap[2]] = [this.heap[2], this.heap[1]];
				}
				return smallest;
			}

			let current = 1;
			let leftChildIndex = current * 2;
			let rightChildIndex = current * 2 + 1;

			while (
				this.heap[leftChildIndex] &&
				this.heap[rightChildIndex] &&
				(this.heap[current][1] > this.heap[leftChildIndex][1] ||
					this.heap[current][1] > this.heap[rightChildIndex][1])
			) {
				if (this.heap[leftChildIndex][1] < this.heap[rightChildIndex][1]) {
					[this.heap[current], this.heap[leftChildIndex]] = [
						this.heap[leftChildIndex],
						this.heap[current],
					];
					current = leftChildIndex;
				} else {
					[this.heap[current], this.heap[rightChildIndex]] = [
						this.heap[rightChildIndex],
						this.heap[current],
					];
					current = rightChildIndex;
				}

				leftChildIndex = current * 2;
				rightChildIndex = current * 2 + 1;
			}
		} else if (this.heap.length === 2) {
			this.heap.splice(1);
		} else {
			return null;
		}

		return smallest;
	}
}
```

시간 복잡도

- `jobs` 정렬 : O(NlogN)

- `job` 삽입 및 조회 : O(logN) \* N

### 어려웠던 점

- heap의 기준이 될 `job` 의 수행시간(배열의 [1] 요소)에 따라 heap의 로직을 수정해야 했음.

- heap에 넣을 노드를 잘 구성하는 것이 중요하다는 것을 생각하게 됨.

### 참고자료
