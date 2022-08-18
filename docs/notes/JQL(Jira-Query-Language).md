---
title: JQL(Jira Query Language)
category: Jira
tags:
  - jira
  - tips
aliases:
  - JQL(Jira Query Language)
publish: true
created: 2022-08-11 11:54
updated: 2022-08-11 11:54
---

# {{ $frontmatter.title }}

## 날짜

```
created >= startOfYear()
created < "2022/07/01"
updated >= startOfYear()
updated < "2022/07/01"
```

### Examples

```
project = {awesome-project} AND assignee = {awesome-username} AND created >= startOfYear() AND created < "2022/07/01" ORDER BY created ASC
```

## 특정 조건의 이슈와 연결된 모든 이슈 찾기

> [Solved: How to search all linked issues with issues from s... (atlassian.com)](https://community.atlassian.com/t5/Jira-questions/How-to-search-all-linked-issues-with-issues-from-specific/qaq-p/1027269)

```
issuefunction in linkedIssuesOf('{awesome-jql}')
```

## Related

## References

- [JQL(JIRA Query Language) 로 JIRA Issue(지라 이슈) 검색하기 #1 (lesstif.com)](https://www.lesstif.com/jira/jql-jira-query-language-jira-issue-1-18220188.html)
