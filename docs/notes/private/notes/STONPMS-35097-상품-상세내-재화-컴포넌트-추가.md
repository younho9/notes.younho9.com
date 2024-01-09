---
title: STONPMS 35097 상품 상세내 재화 컴포넌트 추가
category: Work
aliases:
  - STONPMS 35097 상품 상세내 재화 컴포넌트 추가
created: 2024-01-09T03:00:12.824Z
updated: 2024-01-09T04:58:44.878Z
---

- https://wiki.smilegate.net/pages/viewpage.action?pageId=369453514

- 스튜디오에서 프로젝트 타입을 PC온라인으로 선택 후 입점시, 파트너스 > 빌링 > 게임별 빌링 기본 정보관리(PC) 게임 ID 목록에서 노출은 가능 (1월 정기배포)
- 게임 ID 목록에서는 노출은 되나 빌링쪽에서 수동 설정이 필요함.
- 수동 설정 필요항목
  1. 상품, 가격, 결제 전 주의사항 약관 등록 필요
  2. 그 외 항목 QA, SB 환경에서 테스트 예정
  3. 캐시명 (다국어 대응) 수동
  4. 전환비율 설정 수동
- 게임 이용 동의 약관 미등록 시 --> "약관 조회 실패" 얼럿 노출
- 게임 이용 동의 약관 등록 했지만, 미 동의 시 --> "게임캐시 이용을 위해서는 게임 이용동의를 먼저 해주세요" 얼럿 노출

- ref에 window.open 으로 열린 window 객체를 넣는 경우, `An attempt was made to break through the security policy of the user agent` 에러가 발생하는 현상
