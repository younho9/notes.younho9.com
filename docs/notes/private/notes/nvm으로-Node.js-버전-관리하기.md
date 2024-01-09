---
title: nvm으로 Node.js 버전 관리하기
category: Node.js
aliases:
  - nvm으로 Node.js 버전 관리하기
created: 2024-01-09T03:00:12.768Z
updated: 2024-01-09T04:56:59.769Z
---

여러 프로젝트에서 서로 다른 Node.js의 버전을 사용하는 경우가 있다.

nvm은 위와 같은 상황을 해결하기 위한 Node.js 버전 관리 도구이다. 다양한 버전의 노드를 CLI를 통해 빠르게 설치하고, 변경할 수 있다.

## 설치 방법

> https://github.com/nvm-sh/nvm#installing-and-updating

MacOS를 사용하는 경우, 아래의 쉘 명령어를 실행하여 nvm을 설치할 수 있다.

```sh
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
```

```
nvm -v
0.39.7
```

## 사용법

> https://github.com/nvm-sh/nvm#usage

몇 가지 사용법은 아래와 같다.

### Node.js 설치하기

아래 명령어는 최신(latest) 버전의 node를 설치한다.

```
nvm install node
```

특정 버전의 node를 설치하려면, 특정 버전을 명시하여 설치할 수 있다.

```
nvm install 16.15.0
```

처음으로 설치된 버전의 node가 기본(default) 버전으로 설정되며, 새로운 쉘이 시작될 때, 기본 버전의 node가 설정된다. 아래 명령어로 기본 버전을 변경할 수 있다.

```
nvm alias default 20.10.0
```

현재 LTS 버전을 다운받으려면 아래와 같이 설치할 수 있다.

```
nvm install --lts
```

## .nvmrc 및 쉘 통합

> https://github.com/nvm-sh/nvm#nvmrc

프로젝트에서 사용하는 Node.js 버전을 `.nvmrc` 파일에 명시할 수 있다.

프로젝트 루트 디렉토리에 `.nvmrc` 파일을 생성하고, Node.js 버전 번호(또는 nvm이 이해할 수 있는 버전명)를 명시하면, 해당 프로젝트에서 `nvm use`, `nvm install`, `nvm exec`, `nvm run`, `nvm which` 등의 명령어를 사용할 때, 별도 버전 인자를 넘겨주지 않아도 `.nvmrc`에 명시된 버전을 사용한다.

```
$ echo "18.19.0" > .nvmrc
$ nvm install # nvm install 18.19.0
$ nvm use # nvm use 18.19.0
```

이를 이용해 쉘과 통합하여, 프로젝트 디렉토리에 진입했을 때 프로젝트에서 사용하는 Node.js 버전을 사용하도록 훅을 설정할 수 있다.

아래는 MacOS에서 기본 쉘인 `zsh`에 설정하는 방법이다.

1. 프로젝트 루트 디렉토리에 `.nvmrc` 파일을 생성하고, 버전을 명시한다.
2. `$HOME/.zshrc` 에 아래 코드를 추가한다.

```sh
# place this after nvm initialization!
autoload -U add-zsh-hook

load-nvmrc() {
  local nvmrc_path
  nvmrc_path="$(nvm_find_nvmrc)"

  if [ -n "$nvmrc_path" ]; then
    local nvmrc_node_version
    nvmrc_node_version=$(nvm version "$(cat "${nvmrc_path}")")

    if [ "$nvmrc_node_version" = "N/A" ]; then
      nvm install
    elif [ "$nvmrc_node_version" != "$(nvm version)" ]; then
      nvm use
    fi
  elif [ -n "$(PWD=$OLDPWD nvm_find_nvmrc)" ] && [ "$(nvm version)" != "$(nvm version default)" ]; then
    echo "Reverting to nvm default version"
    nvm use default
  fi
}

add-zsh-hook chpwd load-nvmrc
load-nvmrc
```

3. `zsh`를 재실행한 후, 해당 프로젝트 디렉토리에 진입한다.

```
❯ cd some-node16-project
Found '/Users/{username}/some-node16-project/.nvmrc' with version <16.15.0>
Now using node v16.15.0 (npm v8.5.5)
```

`zsh` 외에 다른 쉘을 사용하는 경우, [해당 링크](https://github.com/nvm-sh/nvm#calling-nvm-use-automatically-in-a-directory-with-a-nvmrc-file)를 참고하여 쉘 별 설정 가이드를 따라 설정한다.다.
