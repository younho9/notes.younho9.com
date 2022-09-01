---
title: yeoman generator 만들기
category: Project
tags:
  - project
  - scaffold
  - boilerplate
  - yeoman
created: 2021-12-30T04:06:00.000Z
updated: 2021-12-30T04:16:00.000Z
---

# {{ $frontmatter.title }}

[The web's scaffolding tool for modern webapps | Yeoman](https://yeoman.io/)

## Example

- [jonahsnider/typescript-starter: My personal TypeScript starter template. Generate a new repository: (github.com)](https://github.com/jonahsnider/typescript-starter)
- [sindresorhus/generator-nm: Scaffold out a node module (github.com)](https://github.com/sindresorhus/generator-nm)

## Hello World

```js
// index.cjs

'use strict';
const Generator = require('yeoman-generator');

module.exports = class extends Generator {
	method1() {
		this.log('method 1 just ran');
	}

	method2() {
		this.log('method 2 just ran');
	}

	async prompting() {
		const answers = await this.prompt([
			{
				type: 'input',
				name: 'name',
				message: 'Your project name',
				default: this.appname, // Default to current folder name
			},
			{
				type: 'confirm',
				name: 'cool',
				message: 'Would you like to enable the Cool feature?',
			},
		]);

		this.log('app name', answers.name);
		this.log('cool feature', answers.cool);
	}
};
```

- 메서드가 순차적으로 실행된다.
- installDependencies, installNpm, 등등이 deprecated인데 대체 방법에 대한 가이드가 부족한 것 같다.
  - [Documentation not up-to-date for "Install actions" · Issue #1294 · yeoman/generator (github.com)](https://github.com/yeoman/generator/issues/1294)

## Trouble shooting

- scoped 된 이름을 사용할 경우 yeoman-test 유틸리티에서 에러가 발생하는 몇 메서드들이 있다.
  - `helpers.createGenerator`
    - [sindresorhus/generator-nm: Scaffold out a node module (github.com)](https://github.com/sindresorhus/generator-nm)
  - `helpers.create`
    - [yeoman/yeoman-test: Test utilities for Yeoman generators (github.com)](https://github.com/yeoman/yeoman-test)
- [generator-generator](https://github.com/yeoman/generator-generator)로 만든 generator 스캐폴딩의 yeoman-generator, yeoman-test, yeoman-assert 등의 버전이 최신이 아니다.
  - 꼭 최신 버전을 사용할 필요는 없지만, 여러 사용 사례를 참고하면서 버전이 다른 것들을 참고하게 되어 오래 걸렸다.
