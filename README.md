## Что выполнено в ДЗ

Workflows:
 - `commitlint` - проверяет коммиты на соответствие semantic commits
 - `lintcode` - проверяет исходный код на ошибки
 - `deploy` - собирает и разворачивает приложение на gh-pages
 - `release` - создаёт release issue c соответсвующей информацией
 - `tests` - запускает unit и e2e тесты (настроены кеши)

События запуска workflow:
 - При создании, или добавлении новых коммитов в PR запускаются `commitlint`, `lintcode`, `tests`. Смерджить PR не получиться, пока не выполнены проверки.
 - При пуше коммитов с тегом запускается `release`
 - `deploy` - запускается вручную на вкладке [Actions](https://github.com/Semro/unit-demo-cra/actions/workflows/deploy.yml) (надо нажать "Run workflow")
 - `deploy`, `tests` - могут вызываться в других workflow

Примеры работы:
 - Проверки не проходят в PR: https://github.com/Semro/unit-demo-cra/pull/10
 - Проверки прошли успешно в PR, можно делать слияние: https://github.com/Semro/unit-demo-cra/pull/11
 - Пример полного цикла добавления изменений и релиза:
    - Настроен запрет на пуш в `master`, создаём PR, чтобы внести изменения https://github.com/Semro/unit-demo-cra/pull/16
    - После того как прошли проверки, делаем слияние в `master`
    - Добавяем тег в ветке `master`, пушим теги. https://github.com/Semro/unit-demo-cra/releases/tag/v3
    - При создании тега, добавляется запись в реестре релизов https://github.com/Semro/unit-demo-cra/issues/17
    - Проверки прошли успешно, добавляется коммент об успешном деплое https://github.com/Semro/unit-demo-cra/issues/17#issuecomment-1640768561 (Приложение доступно на [gh-pages](https://semro.github.io/unit-demo-cra))
    - Issue закрывается со статусом `completed`

## Условие ДЗ
В этом репозитории находится пример приложения с тестами:

- [e2e тесты](e2e/example.spec.ts)
- [unit тесты](src/example.test.tsx)

Для запуска примеров необходимо установить [NodeJS](https://nodejs.org/en/download/) 16 или выше.

Как запустить:

```sh
# установить зависимости
npm ci

# запустить приложение
npm start
```

Как запустить e2e тесты:

```sh
# скачать браузеры
npx playwright install

# запустить тесты
npm run e2e
```

Как запустить модульные тесты:

```sh
npm test
```
