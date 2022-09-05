---
title: VS Code import suggestion
category: Tools
tags:
  - tools
  - vscode
aliases:
  - VS Code import suggestion
created: 2021-12-30T04:06:00.000Z
updated: 2022-09-05T05:04:22.191Z
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
