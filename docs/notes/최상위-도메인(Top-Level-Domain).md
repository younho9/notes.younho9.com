---
title: 최상위 도메인(Top Level Domain)
category: Glossary
tags:
  - web
  - terms
  - glossary
  - url
aliases:
  - TLD
  - 최상위 도메인
  - Top Level Domain
  - Public Suffix
  - Suffix
created: 2021-12-30 13:06
updated: 2022-01-13 23:01
---

# {{ $frontmatter.title }}

```
                    TLD
                    |-|
https://www.example.com:443
            |---------|
               TLD+1
```

- 최상위 도메인(TLD)은 `.com`, `.org` 와 같은 [Root Zone Database](https://www.iana.org/domains/root/db) 에 포함된 도메인이다.
- "사이트"라는 것은 TLD와 TLD 바로 앞에 있는 부분(TLD+1)의 조합이다.
  - 위의 예제에서 `example.com` 이 [[동일-사이트(Same-Site)|동일 사이트(Same Site)]]이다.

```
                      eTLD
                   |-------|
https://my-project.github.io:443
        |------------------|
               eTLD+1
```

- 하지만 `.co.kr`, `github.io` 와 같은 도메인들도 있는데, 여기서 `kr` 이나 `io` 를 TLD로 사용하면 사이트를 식별할 수 없다.
- 이를 위해 "effective TLD"라는 것이 만들어졌고 이는 [공개 접미사 목록(Public Suffix List)](https://publicsuffix.org/list/)에서 관리된다.
  - 따라서, 위의 예제에서 `my-project.github.io` 를 사이트로 본다.

> `https://app.jakearchibald.com`와 `https://other-app.jakearchibald.com`는 같은 사이트의 일부이지만 `https://app.glitch.me`와 `https://other-app.glitch.me`는 다른 사이트이다. `glitch.me`은 공개 접미사 목록에 있는 반면, `jakearchibald.com`는 없기 때문이다. 다른 사람들이 `glitch.me`의 서브도메인을 '소유'하는 반면, 필자는 `jakearchibald.com`의 모든 서브도메인을 소유하기 때문에 이것은 틀린 것이 아니다.

## Related

- [[도메인(Domain)]]
- [[동일-사이트(Same-Site)|동일 사이트(Same Site)]]
- [[서브도메인(Subdomain)]]

## References

- [Understanding "same-site" and "same-origin" (web.dev)](https://web.dev/same-site-same-origin/)
