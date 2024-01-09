---
title: REST API를 통한 Jira 티켓 작성
category: Jira
aliases:
  - REST API를 통한 Jira 티켓 작성
created: 2024-01-09T03:00:12.802Z
updated: 2024-01-09T04:58:28.573Z
---

> https://developer.atlassian.com/server/jira/platform/rest-apis/ > https://developer.atlassian.com/server/jira/platform/jira-rest-api-examples

## HTML link로 Jira 티켓 생성하기

> https://confluence.atlassian.com/jirakb/how-to-create-issues-using-direct-html-links-in-jira-server-159474.html

https://jira.smilegate.net/secure/CreateIssue!default.jspa?pid=12910&issuetype=12302&customfield_10006="STONPMS-1410"

## Personal Access Token (PATs) 생성하기

> https://confluence.atlassian.com/enterprise/using-personal-access-tokens-1026032365.html

- STONPMS 티켓 생성 자동화
- Jira 버전 8.20.13
- https://medium.com/@totuworld/jira-ticket-%EC%83%9D%EC%84%B1-%EC%8B%9C%EA%B0%84-%EC%A4%84%EC%9D%B4%EA%B8%B0-feat-chatgpt-4809115339c5
- https://confluence.atlassian.com/enterprise/using-personal-access-tokens-1026032365.html
  - Personal Access Token 생성
  - `curl -H "Authorization: Bearer <yourToken>" https://{baseUrlOfYourInstance}/rest/api/content`
  - `curl -H "Authorization: Bearer NjMwMTk1MzQxODYyOiRebmDFRCfiQr0MpW2eMXz3IuIP" --location --request GET 'https://jira.smilegate.net/rest/api/2/issue/INDIA-14951'`
- https://developer.atlassian.com/server/jira/platform/jira-rest-api-examples/
  - 프로젝트 찾기 : https://jira.smilegate.net/rest/api/2/project
  - 이슈 유형 찾기 : https://jira.smilegate.net/rest/api/2/issue/createmeta/STONPMS/issuetypes
    - epic: 10000
    - 기획업무\_PMS: 12300
    - 디자인업무\_PMS: 12301
    - 개발업무\_PMS: 12302
    - QA업무\_PMS: 12303
    - 보안검수\_PMS: 12304
    - 상세기획: 12305
    - 디자인: 12306
    - 빌드노트: 12307
    - QA계획서: 12308
    - 기타업무요청: 12309
    - 보안검수요청: 12310
    - 리스크관리: 12311
    - DB업무\_PMS: 12312
    - 인프라업무\_PMS: 12313
    - 상시업무요청: 12314
    - 지표업무요청: 12315
    - 배포관리\_PMS: 12426
    - DB작업 요청: 12427
    - 인프라작업 요청: 12428
    - 개발작업: 12429
    - 장애재발방지\_PMS: 12854
    - 장애재발방지대책: 12855
    - 인프라보안 작업 안내/공지: 12910
    - 보안업무\_PMS: 13101
    - DB배포\_PMS: 13304
    - DB검수 요청: 13305
  - 이슈 유형의 필드 찾기 : https://jira.smilegate.net/rest/api/2/issue/createmeta/STONPMS/issuetypes/{issueTypeId}
  - 이슈 세부 사항 찾기 : https://jira.smilegate.net/rest/api/2/issue/{issueKey}

### STONPMS > 개발업무\_PMS 생성하기

```
curl --location 'https://jira.smilegate.net/rest/api/2/issue/' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer NjMwMTk1MzQxODYyOiRebmDFRCfiQr0MpW2eMXz3IuIP' \
--header 'Cookie: JSESSIONID=40981856D6B4B4834931632C65AA90CC; atlassian.xsrf.token=BUEG-ZTAO-H8M7-WYYP_0b74884f851defb2bdfbbecc2c7e9200aa089303_lin' \
--data-raw '{
    "fields": {
        "project": {
            "key": "STONPMS"
        },
        "summary": "[스토어] API 테스트",
        "description": "설명",
        "issuetype": {
            "id": "12302"
        },
        "customfield_10006": "STONPMS-1410",
        "customfield_10705": [
            { "name": "@인디웹프론트-SGS" },
            { "name": "TF-FE개발팀-SGS" }
        ],
        "customfield_10105": [{
            "name": "yhchoo"
        }]
    }
}
'
```

> - `customfield_10006` : Epic Link
> - `customfield_10705` : 참조자 그룹
> - `customfield_10105` : 참조자
