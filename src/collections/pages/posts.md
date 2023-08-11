---
layout: layouts/posts
title: Posts
order: 3
pagination:
  data: collections.posts
  size: 10
  alias: posts
permalink: "/posts/{% if pagination.pageNumber > 0 %}page/{{ pagination.pageNumber + 1 }}/{% endif %}"
---
