const SERVICE = 'auth-service';
const PERIOD = '30 дней';
const UPTIME_PERCENT = 99.95;
const DOWNTIME_MINUTES = 22;

const describe = () => `${SERVICE} за ${PERIOD}: доступность ${UPTIME_PERCENT}%, простой ${DOWNTIME_MINUTES} мин`;

module.exports = { SERVICE, PERIOD, UPTIME_PERCENT, DOWNTIME_MINUTES, describe };
