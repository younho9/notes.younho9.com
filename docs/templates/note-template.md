---
title: '<% tp.file.title.split('-').join(' ') %>'
category: category
tags:
  - tag
aliases:
  - <% tp.file.title.split('-').join(' ') %>
publish: true
created: <% moment(tp.file.creation_date("YYYY-MM-DDTHH:mm:ss.SSSZ")).toISOString() %>
updated: <% moment(tp.file.last_modified_date("YYYY-MM-DDTHH:mm:ss.SSSZ")).toISOString() %>
---

# {{ $frontmatter.title }}

## Related

## References
