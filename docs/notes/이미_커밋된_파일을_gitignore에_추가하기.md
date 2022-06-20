---
tags:
  - git
created: 2021-12-30 13:06
updated: 2021-12-30 13:14
---

```sh
# index 에서 모든 파일들을 제거한다 (실제 파일시스템에서는 제거되지 않고 남아 있을 것이다
$ git rm -r --cached .

# 다시 전체를 추가한다 (변경된  부분이 있다면 해당 부분이 포함된 현재 상태 그대로 추가된다)
$ git add .

# 변경 사항이 있다면 커밋을 수행한다. 변경 사항은 파일이 제거된 내역만 존재하여야 할 것이다.
$ git commit -m 'Remove all files that are in the .gitignore'

# 원격 저장소를 업데이트 한다
$ git push origin master
```
