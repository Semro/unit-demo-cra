---
title: RELEASE {{ env.VERSION }}
labels: release
---
# RELEASE {{ env.VERSION }}
- Author: {{ env.AUTHOR }}
- Date: {{ date | date('dddd, MMMM Do') }}

## CHANGELOG

{{ env.CHANGELOG }}

## TESTS
- {{ env.TESTS }}