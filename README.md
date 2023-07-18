## Что выполнено в ДЗ

Workflows:
 - `commitlint` - проверяет коммиты на соответствие semantic commits
 - `lintcode` - проверяет код на ошибки
 - `deploy` - собирает и разворачивает приложение на gh-pages
 - `release` - создаёт release issue c соответсвующей информацией
 - `tests` - запускает unit и e2e тесты

События запуска workflow:
 - При создании, или добавлении новых коммитов в PR запускаются `commitlint`, `lintcode`, `tests`. Смерджить PR не получиться, пока не выполнены проверки.
 - При пуше коммитов с тегом запускается `release`
 - `deploy` - запускается вручную на вкладке [Actions](https://github.com/Semro/unit-demo-cra/actions/workflows/deploy.yml) (надо нажать "Run workflow")

Примеры работы:
 - Проверки не проходят в PR: https://github.com/Semro/unit-demo-cra/pull/10
 - Проверки прошли успешно в PR, можно мержить: https://github.com/Semro/unit-demo-cra/pull/11
 - Успешное создание release issue: https://github.com/Semro/unit-demo-cra/issues/9
 - Успешный `deploy`: https://github.com/Semro/unit-demo-cra/actions/runs/5584429240/jobs/10205849418. Выложен на gh-pages: https://semro.github.io/unit-demo-cra/

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
