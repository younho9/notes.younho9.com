---
title: VS Code import suggestion
category: Tools
tags:
  - vscode
created: 2021-12-30T13:06:00.000+09:00
updated: 2021-12-30T13:16:00.000+09:00
---

# {{ $frontmatter.title }}

## VS Code TypeScript 절대 경로 우선 추천

```json
// .vscode/settings.json
{
	// ...
	"typescript.preferences.importModuleSpecifier": "non-relative"
}
```
