---
title: RELEASE {{ env.VERSION }}
labels: release
---
# RELEASE {{ env.VERSION }}
- Author: {{ env.AUTHOR }}
- Date: {{ env.DATE }}

## CHANGELOG

{{ env.CHANGELOG }}

## TESTS
- [unit tests results]({{ env.JOB_URL_UNIT_TESTS }})
- [E2E tests results]({{ env.JOB_URL_E2E_TESTS }})