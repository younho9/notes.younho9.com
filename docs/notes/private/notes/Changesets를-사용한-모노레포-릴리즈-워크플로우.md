---
title: Changesets을 사용한 모노레포 릴리즈 워크플로우
category: category
aliases:
  - Changesets을 사용한 모노레포 릴리즈 워크플로우
created: 2024-01-09T03:00:12.737Z
updated: 2024-01-09T04:50:11.170Z
---

- 패키지별 독립적인 버전 관리
- 커밋 메시지 기반 > 변경 세트(Changeset) 기반

## Changesets 란

Changesets은 다중 패키지를 가진 레포지토리(모노레포)에서 패키지들의 버전과 Changelog를 쉽게 관리하도록 도움을 주는 도구입니다.

다중 패키지를 가진 레포지토리에서 새 버전의 패키지를 게시(Publish)하는 것은 다음의 작업들이 필요합니다.

- 변경 사항의 유형 결정 (major, minor, patch)
- 패키지를 의존하는 모든 `package.json` 에 명시된 버전 업데이트
  - ex) `foo@1.0.0` -> `foo@1.0.1`
- 변경 사항 요약 및 Changelog 생성
- 릴리즈 커밋 및 태그 생성
- npm publish

Changesets는 모노레포에서 각 패키지를 독립적으로 버전 관리하고, 변경 사항에 대한 요약을 변경된 패키지의 Changelog에 기록하는 효율적인 워크플로우를 제시합니다.

## 문제

Changesets 공식 문서에서는 문제를 다음과 같이 정의합니다.

> 패키지 릴리스를 구성할 때 서로 다른 사람이 작성하거나 상대적으로 오랜 기간 동안 작성한 여러 변경 사항을 함께 그룹화하고 싶을 수도 있습니다. 이 정보를 포착하기 가장 좋은 시기는 PR을 제출할 때(생각이 생생할 때)이며, 최종적으로 이러한 변경 사항을 일괄 처리하고 릴리스할 때가 아닙니다.
>
> Git은 자세한 변경 설명을 작성하는 것을 방해하므로 이 정보를 저장하기에는 적합하지 않습니다. 사람들이 원하는 만큼 변경 사항에 대한 문서를 제공할 수 있도록 허용하고 싶을 것입니다.
>
> - [A Detailed Explanation of Changesets](https://github.com/changesets/changesets/blob/main/docs/detailed-explanation.md)

실제로 다중 패키지와 다중 애플리케이션을 운영하다보면, 아래의 문제들이 발생합니다.

- 해당 변경 사항으로 인해 어떤 패키지가 변경되어야 하는지 추적해야 함.
- 다른 사람이 작성한 커밋 메시지가 변경 사항을 충분히 설명하지 않아, 커밋 메시지를 수정해야 함.
- 커밋 이후에 관련 이슈 티켓이 생성되어, 커밋 메시지와 이슈 티켓과의 연결이 누락되는 경우가 발생함.

패키지 릴리즈를 구성하는 시점에 Changelog를 작성하는 것은

기존 대부분의 Changelog 자동화 도구는 Git 커밋 메시지를 기반으로 변경 사항에 대한 요약을 생성합니다.

하지만 Git은 변경 사항을 작성하는데 적합하지 않습니다.

패키지를 릴리즈할 때, Changelog 생성이 Git 커밋 메시지에 의존하는 경우 아래의 문제 상황이 발생합니다.

- 오래 전에 작성된 커밋에 변경 사항이 자세히 기록되어 있지 않은 경우,

## 참고 자료

- [🦋 Changesets is a game changer](https://brionmario.medium.com/changesets-is-a-game-changer-fe752af6a8cc)
