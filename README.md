# uptime-report-app

Задача 28: Node.js, Express.

## Описание

Небольшое веб-приложение на Node.js (Express), которое показывает отчёт о доступности сервиса.

## Цель

Запустить приложение в контейнере через Docker (без Compose) так, чтобы оно было доступно на хосте. Образ называется `uptime-report-image`, контейнер `uptime-report-1`, базовый образ `node:22-slim`.

## Проверка

```bash
curl http://127.0.0.1:6170/
curl http://127.0.0.1:6170/report
curl http://127.0.0.1:6170/health
```

Ожидаемый ответ:
```
Отчёт: auth-service за 30 дней: доступность 99.95%, простой 22 мин
{"service":"auth-service","period":"30 дней","uptime_percent":99.95,"downtime_minutes":22}
ok
```
