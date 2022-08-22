---
title: 일렉트론(Electron)
category: Tooling
tags:
  - tooling
aliases:
  - 일렉트론(Electron)
publish: true
created: 2022-08-10T10:07:00.000+09:00
updated: 2022-08-10T10:07:00.000+09:00
---

# {{ $frontmatter.title }}

- JavaScript, HTML, CSS로 크로스 플랫폼(cross-platform) 데스크탑 앱을 빌드하기 위한 프레임워크
- [[Chromium(크로미움)]]과 [[Node.js]] 바이너리를 임베드하고 있어서, 하나의 JavaScript 코드베이스를 유지하고, 네이티브 개발 경험이 없어도 Windows, macOS, Linux에서 동작하는 크로스 플랫폼(cross-platform) 앱을 만들 수 있다.
- 네이티브 개발의 어려운 부분들을 쉽게 해결해준다.
  - 자동 업데이트
  - 네이티브 메뉴 & 알람
  - 크래쉬 리포트
  - 디버깅 & 프로파일링
  - 윈도우 인스톨러

## Quick Start

> [Quick Start | Electron (electronjs.org)](https://www.electronjs.org/docs/latest/tutorial/quick-start)

- 빠른 시작을 위한 샘플 예제

```sh
$ git clone https://github.com/electron/electron-quick-start
$ cd electron-quick-start
$ npm install & npm start
```

## 튜토리얼

> [tutorial (electronjs.org)](https://www.electronjs.org/docs/latest/tutorial/tutorial-prerequisites)

### [Prerequisites](https://www.electronjs.org/docs/latest/tutorial/tutorial-prerequisites)

- Code editor
- CLI
- Git and GitHub
- Node.js and npm
  - Electron은 자체 Node.js 런타임과 함께 번들로 제공되기 때문에 사용자가 앱을 실행할 때 별도의 Node.js를 설치할 필요가 없다.

### [Building your First App](https://www.electronjs.org/docs/latest/tutorial/tutorial-first-app)

#### 프로젝트 설정

```sh
mkdir my-electron-app && cd my-electron-app
npm init -y
npm install electron --save-dev
echo 'node_modules/' > .gitignore
echo 'console.log(`Hello from Electron 👋`)' > main.js
```

> Electron이 **devDependencies**인 이유?

    - 패키지 앱은 Electron 바이너리와 함께 번들로 제공되므로 dependencies로 지정할 필요가 없다.

- Electron 앱의 [[진입점(Entry-point)|진입점(Entry point)]]은 `package.json`의 `main` 필드에 지정된 스크립트 파일(`main.js`)이다.
  - `yarn electron .` 커맨드로 현재 디렉토리의 메인 스크립트를 찾고, dev 모드로 Electron을 실행한다.

#### `BrowserWindow` 에 웹 페이지를 로딩하기

`index.html`

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8" />
		<!-- https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP -->
		<meta
			http-equiv="Content-Security-Policy"
			content="default-src 'self'; script-src 'self'"
		/>
		<meta
			http-equiv="X-Content-Security-Policy"
			content="default-src 'self'; script-src 'self'"
		/>
		<title>Hello from Electron renderer!</title>
	</head>
	<body>
		<h1>Hello from Electron renderer!</h1>
		<p>👋</p>
	</body>
</html>
```

`main.js`

```js
const {app, BrowserWindow} = require('electron');

const createWindow = () => {
	const win = new BrowserWindow({
		width: 800,
		height: 600,
	});

	win.loadFile('index.html');
};

app.whenReady().then(() => {
	createWindow();
});
```

- [`app`](https://www.electronjs.org/docs/latest/api/app)은 앱의 이벤트 라이프사이클을 제어한다.
- [`BrowserWindow`](https://www.electronjs.org/docs/latest/api/browser-window)는 앱 윈도우를 생성하고 관리한다.
- `createWindow()` 함수는 `BrowserWindow` 인스턴스를 생성하고, 웹 페이지를 로드한다.
- `app.whenReady().then(() => { createWindow() })`
  - 많은 Electron의 코어 모듈은 Node.js의 [event emitters](https://nodejs.org/api/events.html#events)이다.
  - Electron에서 `BrowserWindow`는 앱 모듈의 `ready` 이벤트가 발생한 이후에 생성될 수 있다.
  - 따라서, `createWindow()` 함수의 실행을 `whenReady()`가 리턴하는 [[프로미스(Promise)|Promise]]가 fulfilled된 이후에 실행한다.

> [[ECMAScript-modules|ES modules]] in Electron
>
> ESM은 현재 Electron에서 지원되지 않는다. [electron/electron#21457](https://github.com/electron/electron/issues/21457)에서 현재ESM 지원 상태에 대한 정보를 확인할 수 있다.

- 앱이 윈도우에 표시하는 각 웹 페이지는 **렌더러(renderer)** 라고 불리는 별개의 프로세스에서 실행된다.
- 렌더러는 JavaScript API에 접근 가능하고, Webpack, React 등 필요한 프론트엔드 툴링을 사용할 수 있다.

#### 앱의 윈도우 라이프사이클을 관리하기

- 앱 윈도우는 OS에 따라 다르게 동작한다.
- `app`과 `BrowserWindow` 간에 이벤트를 주고 받으면서 Electron 앱의 기본 윈도우 동작을 제어할 수 있다.

> Node.js의 [`process.platform`](https://nodejs.org/api/process.html#process_process_platform) 변수를 활용하여, 플랫폼(OS) 별 분기 로직을 작성할 수 있다.
>
> - `win32` (Windows)
> - `linux` (Linux)
> - `darwin` (macOS)

**모든 윈도우가 닫힐 때, 앱을 종료하기 (Windows & Linux)**

- Windows & Linux에서는 일반적으로 앱의 모든 윈도우가 닫힐 때, 앱을 완전히 종료한다.
- 이를 구현하기 위해 Electron app에서는 `window-all-closed` 이벤트를 듣고 `app.quit()`을 실행할 수 있다.

```js
// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') app.quit();
});
```

**아무 윈도우도 열려있지 않을 때, 윈도우를 열기 (macOS)**

- 반면에, macOS 앱은 모든 윈도우가 닫혀도, 계속 앱이 실행된다.
- 윈도우가 없어도 앱을 활성화시키는 것이 가능하고, 새로운 윈도우를 열어야 한다.
- 이를 구현하기 위해 Electron app에서는 `activate` 이벤트를 듣고, `createWindow()`를 실행할 수 있다.
- 윈도우는 `ready` 이벤트가 발생하기 전에 생성될 수 없으므로, `whenReady()` 콜백 내에 `activate` 이벤트 핸들러를 선언한다.

```js
app.whenReady().then(() => {
	createWindow();

	app.on('activate', function () {
		// On macOS it's common to re-create a window in the app when the
		// dock icon is clicked and there are no other windows open.
		if (BrowserWindow.getAllWindows().length === 0) createWindow();
	});
});
```

### [Using Preload Scripts](https://www.electronjs.org/docs/latest/tutorial/tutorial-preload)

### [Adding Features](https://www.electronjs.org/docs/latest/tutorial/tutorial-adding-features)

### [Packaging Your Application](https://www.electronjs.org/docs/latest/tutorial/tutorial-packaging)

### [Publishing and Updating](https://www.electronjs.org/docs/latest/tutorial/tutorial-publishing-updating)

## Electron

## Related

## References

- [Electron Docs (electronjs.org)](https://www.electronjs.org/docs/latest)
