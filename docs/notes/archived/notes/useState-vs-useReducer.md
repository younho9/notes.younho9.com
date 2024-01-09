---
title: useState vs useReducer
category: React
tags:
  - react
  - vs
aliases:
  - useState vs useReducer
  - useState와 useReducer의 차이점
created: 2022-01-02T05:14:00.000Z
updated: 2022-09-06T14:00:07.099Z
---

## useState

### React는 어떤 상태(state)를 반환할 지 어떻게 아는가?

> 각 컴포넌트와 관련된 "메모리 셀"의 내부 목록이 있습니다.
>
> useState()와 같은 Hook을 호출하면 현재 셀을 읽거나 첫 번째 렌더링 중에 초기화한 다음 포인터를 다음 셀로 이동합니다.
>
> - [Hook 자주 묻는 질문 – React (reactjs.org)](https://ko.reactjs.org/docs/hooks-faq.html#how-does-react-associate-hook-calls-with-components)

- React는 모든 컴포넌트에 대한 상태(state)와 상태 설정 함수(setter) 쌍의 배열을 보유한다.
- 매 렌더링 마다 컴포넌트에서 호출되는 훅의 순서에 따라 배열에서 조회하여 현재 훅의 상태를 가져온다.
  - 최상위 레벨에서만 훅을 호출한다. (반복문, 조건문, 중첩 함수에서 훅을 호출하지 않는다.)
  - React 컴포넌트, React 커스텀 훅에서만 훅을 호출한다.

```js
let componentHooks = [];
let currentHookIndex = 0;

// How useState works inside React (simplified).
function useState(initialState) {
	let pair = componentHooks[currentHookIndex];

	if (pair) {
		// This is not the first render,
		// so the state pair already exists.
		// Return it and prepare for next Hook call.
		currentHookIndex++;
		return pair;
	}

	// This is the first time we're rendering,
	// so create a state pair and store it.
	pair = [initialState, setState];

	function setState(nextState) {
		// When the user requests a state change,
		// put the new value into the pair.
		pair[0] = nextState;
		updateDOM();
	}

	// Store the pair for future renders
	// and prepare for the next Hook call.
	componentHooks[currentHookIndex] = pair;
	currentHookIndex++;

	return pair;
}

function Gallery() {
	// Each useState() call will get the next pair.
	const [index, setIndex] = useState(0);
	const [showMore, setShowMore] = useState(false);

	function handleNextClick() {
		setIndex(index + 1);
	}

	function handleMoreClick() {
		setShowMore(!showMore);
	}

	let sculpture = sculptureList[index];
	// This example doesn't use React, so
	// return an output object instead of JSX.
	return {
		onNextClick: handleNextClick,
		onMoreClick: handleMoreClick,
		header: `${sculpture.name} by ${sculpture.artist}`,
		counter: `${index + 1} of ${sculptureList.length}`,
		more: `${showMore ? 'Hide' : 'Show'} details`,
		description: showMore ? sculpture.description : null,
		imageSrc: sculpture.url,
		imageAlt: sculpture.alt,
	};
}

function updateDOM() {
	// Reset the current Hook index
	// before rendering the component.
	currentHookIndex = 0;
	let output = Gallery();

	// Update the DOM to match the output.
	// This is the part React does for you.
	nextButton.onclick = output.onNextClick;
	header.textContent = output.header;
	moreButton.onclick = output.onMoreClick;
	moreButton.textContent = output.more;
	image.src = output.imageSrc;
	image.alt = output.imageAlt;
	if (output.description !== null) {
		description.textContent = output.description;
		description.style.display = '';
	} else {
		description.style.display = 'none';
	}
}

let nextButton = document.getElementById('nextButton');
let header = document.getElementById('header');
let moreButton = document.getElementById('moreButton');
let description = document.getElementById('description');
let image = document.getElementById('image');
let sculptureList = [
	{
		name: 'Homenaje a la Neurocirugía',
		artist: 'Marta Colvin Andrade',
		description:
			'Although Colvin is predominantly known for abstract themes that allude to pre-Hispanic symbols, this gigantic sculpture, an homage to neurosurgery, is one of her most recognizable public art pieces.',
		url: 'https://i.imgur.com/Mx7dA2Y.jpg',
		alt: 'A bronze statue of two crossed hands delicately holding a human brain in their fingertips.',
	},
	{
		name: 'Floralis Genérica',
		artist: 'Eduardo Catalano',
		description:
			'This enormous (75 ft. or 23m) silver flower is located in Buenos Aires. It is designed to move, closing its petals in the evening or when strong winds blow and opening them in the morning.',
		url: 'https://i.imgur.com/ZF6s192m.jpg',
		alt: 'A gigantic metallic flower sculpture with reflective mirror-like petals and strong stamens.',
	},
	{
		name: 'Eternal Presence',
		artist: 'John Woodrow Wilson',
		description:
			'Wilson was known for his preoccupation with equality, social justice, as well as the essential and spiritual qualities of humankind. This massive (7ft. or 2,13m) bronze represents what he described as "a symbolic Black presence infused with a sense of universal humanity."',
		url: 'https://i.imgur.com/aTtVpES.jpg',
		alt: 'The sculpture depicting a human head seems ever-present and solemn. It radiates calm and serenity.',
	},
	{
		name: 'Moai',
		artist: 'Unknown Artist',
		description:
			'Located on the Easter Island, there are 1,000 moai, or extant monumental statues, created by the early Rapa Nui people, which some believe represented deified ancestors.',
		url: 'https://i.imgur.com/RCwLEoQm.jpg',
		alt: 'Three monumental stone busts with the heads that are disproportionately large with somber faces.',
	},
	{
		name: 'Blue Nana',
		artist: 'Niki de Saint Phalle',
		description:
			'The Nanas are triumphant creatures, symbols of femininity and maternity. Initially, Saint Phalle used fabric and found objects for the Nanas, and later on introduced polyester to achieve a more vibrant effect.',
		url: 'https://i.imgur.com/Sd1AgUOm.jpg',
		alt: 'A large mosaic sculpture of a whimsical dancing female figure in a colorful costume emanating joy.',
	},
	{
		name: 'Ultimate Form',
		artist: 'Barbara Hepworth',
		description:
			'This abstract bronze sculpture is a part of The Family of Man series located at Yorkshire Sculpture Park. Hepworth chose not to create literal representations of the world but developed abstract forms inspired by people and landscapes.',
		url: 'https://i.imgur.com/2heNQDcm.jpg',
		alt: 'A tall sculpture made of three elements stacked on each other reminding of a human figure.',
	},
	{
		name: 'Cavaliere',
		artist: 'Lamidi Olonade Fakeye',
		description:
			"Descended from four generations of woodcarvers, Fakeye's work blended traditional and contemporary Yoruba themes.",
		url: 'https://i.imgur.com/wIdGuZwm.png',
		alt: 'An intricate wood sculpture of a warrior with a focused face on a horse adorned with patterns.',
	},
	{
		name: 'Big Bellies',
		artist: 'Alina Szapocznikow',
		description:
			'Szapocznikow is known for her sculptures of the fragmented body as a metaphor for the fragility and impermanence of youth and beauty. This sculpture depicts two very realistic large bellies stacked on top of each other, each around five feet (1,5m) tall.',
		url: 'https://i.imgur.com/AlHTAdDm.jpg',
		alt: 'The sculpture reminds a cascade of folds, quite different from bellies in classical sculptures.',
	},
	{
		name: 'Terracotta Army',
		artist: 'Unknown Artist',
		description:
			'The Terracotta Army is a collection of terracotta sculptures depicting the armies of Qin Shi Huang, the first Emperor of China. The army consisted of more than 8,000 soldiers, 130 chariots with 520 horses, and 150 cavalry horses.',
		url: 'https://i.imgur.com/HMFmH6m.jpg',
		alt: '12 terracotta sculptures of solemn warriors, each with a unique facial expression and armor.',
	},
	{
		name: 'Lunar Landscape',
		artist: 'Louise Nevelson',
		description:
			'Nevelson was known for scavenging objects from New York City debris, which she would later assemble into monumental constructions. In this one, she used disparate parts like a bedpost, juggling pin, and seat fragment, nailing and gluing them into boxes that reflect the influence of Cubism’s geometric abstraction of space and form.',
		url: 'https://i.imgur.com/rN7hY6om.jpg',
		alt: 'A black matte sculpture where the individual elements are initially indistinguishable.',
	},
	{
		name: 'Aureole',
		artist: 'Ranjani Shettar',
		description:
			'Shettar merges the traditional and the modern, the natural and the industrial. Her art focuses on the relationship between man and nature. Her work was described as compelling both abstractly and figuratively, gravity defying, and a "fine synthesis of unlikely materials."',
		url: 'https://i.imgur.com/okTpbHhm.jpg',
		alt: 'A pale wire-like sculpture mounted on concrete wall and descending on the floor. It appears light.',
	},
	{
		name: 'Hippos',
		artist: 'Taipei Zoo',
		description:
			'The Taipei Zoo commissioned a Hippo Square featuring submerged hippos at play.',
		url: 'https://i.imgur.com/6o5Vuyu.jpg',
		alt: 'A group of bronze hippo sculptures emerging from the sett sidewalk as if they were swimming.',
	},
];

// Make UI match the initial state.
updateDOM();
```

- [React hooks: not magic, just arrays | by Rudi Yardley | Medium](https://medium.com/@ryardley/react-hooks-not-magic-just-arrays-cd4f1857236e)

## useReducer

- `(state, action) => newState` 형태의 reducer를 받고 `[state, dispatch]` 형태로 state를 반환한다.
- useReducer는 **콜백 대신 dispatch를 전달**할 수 있기 때문에, 컴포넌트의 성능을 최적화할 수 있게 된다.
  - dispatch 함수가 리렌더링 시에도 변경되지 않고 동일하기 때문이다.

## useReducer가 선호될 때

- 다수의 하윗 값을 포함하는 복잡한 정적 로직을 만드는 경우
- 다음 state가 이전 state에 의존적인 경우

## References

- [Hooks API Reference – React (reactjs.org)](https://ko.reactjs.org/docs/hooks-reference.html#usereducer)
