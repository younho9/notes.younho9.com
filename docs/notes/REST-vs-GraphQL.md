---
title: REST vs GraphQL
category: Web
tags:
  - tag
aliases:
  - alias
publish: true
created: 2022-01-05T12:39:00.000Z
updated: 2022-01-05T12:39:00.000Z
---

# {{ $frontmatter.title }}

## Rest란?

- REpresentational State Transfer의 약자
- 균일한 인터페이스로 클라이언트와 서버가 상호작용할 수 있도록 하는 가이드 원칙
- REST 가이드 원칙을 준수하는 Web API를 RESTful 또는 REST API라고 한다.
- 조건
  - 균일한 인터페이스
    - 요청이 어디서 오는지와 무관하게 동일한 리소스에 대한 모든 API 요청은 동일하게 보여야 한다.
    - URI를 통해 자원을 명시하고, HTTP Method를 통해 자원에 대한 행위를 명시한다.
  - [[클라이언트-서버-모델|클라이언트 서버 모델]]
    - 클라이언트와 서버는 **서로 간에 완전히 독립적**이다.
  - 무상태성(Stateless)
  - 캐싱 가능성
  - 계층화된 아키텍쳐
  - 주문형 코드

## GraphQL 이란?

- 페이스북이 개발한 새로운 API 표준
- 선언적 데이터 페칭을 가능하게 한다.
- GraphQL 서버는 단일 엔드포인트를 가지고 쿼리에 대해 응답한다.

### REST의 효율적인 대안인 이유

REST의 개념이 개발되었을 때 클라이언트 애플리케이션이 비교적 단순했다.

1. 모바일 사용량이 증가하면 효율적인 데이터 로딩이 필요하다.
   - 네트워크를 통해 전송하는 데이터의 양을 최소화할 수 있다.
2. 다양한 프론트엔드 프레임워크 및 플랫폼
   - 모든 요구사항에 맞는 하나의 API를 구축하고 유지 관리하기가 어렵다.
   - GraphQL을 사용하면 각 클라이언트가 필요한 데이터에 정확히 액세스할 수 있다.
3. 빠른 개발 및 빠른 기능 개발 기대
   - REST API는 서버에서 데이터를 노출하는 방식을 클라이언트 측의 특정 요구 사항 및 설계 변경 사항을 고려하여 수정해야 하는 경우가 많다.
   - 이는 빠른 개발과 빠른 반복을 방해한다.

- 한 번의 요청
  - Rest API를 사용하면 일반적으로 여러 엔드포인트에 접근하여 데이터를 가져와야 한다.
  - GraphQL은 구체적인 데이터 요구사항이 포함된 **단일 쿼리**를 보내면 정확한 데이터 구조로 응답받을 수 있다.
- 오버페칭과 언더페칭
  - REST에서 클라이언트에게 정확한 데이터 요구사항을 제공할 수 있는 방식으로 API를 설계하는 것은 매우 어렵다.
  - 오버페칭 : 클라이언트가 앱에서 실제로 필요한 것보다 더 많은 정보를 다운로드 해야하는 **오버페칭**이 발생한다.
  - 언더페칭 : 특정 엔드포인트가 **필요한 정보를 충분히 제공하지 않기 때문에 추가 요청(n+1)** 을 해야 한다.
- 스키마 및 유형 시스템의 이점
  - API에 노출되는 모든 유형은 스키마에 기록된다.
  - 명확한 데이터 구조를 알고 있기 때문에 쉽게 테스트할 수 있다.

## Related

## References

- [GraphQL vs. REST - Apollo GraphQL Blog](https://www.apollographql.com/blog/graphql/basics/graphql-vs-rest/)
- [GraphQL vs REST - A comparison (howtographql.com)](https://www.howtographql.com/basics/1-graphql-is-the-better-rest/)
