const express = require('express');
const { SERVICE, PERIOD, UPTIME_PERCENT, DOWNTIME_MINUTES, describe } = require('./uptime');

const app = express();

app.get('/', (req, res) => {
  res.send(`Отчёт: ${describe()}`);
});

app.get('/report', (req, res) => {
  res.json({
    service: SERVICE,
    period: PERIOD,
    uptime_percent: UPTIME_PERCENT,
    downtime_minutes: DOWNTIME_MINUTES,
  });
});

app.get('/health', (req, res) => {
  res.send('ok');
});

app.listen(6170, '0.0.0.0', () => {
  console.log('uptime-report-app listening on port 6170');
});
