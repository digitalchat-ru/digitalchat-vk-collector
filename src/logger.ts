import * as winston from "winston";

const logger = winston.createLogger({
  level: process.env.LOG_LEVEL,
  format: winston.format.combine(
    winston.format.colorize(),
    winston.format.timestamp(),
    winston.format.printf((info) => {
      const _dt = new Date(info.timestamp);
      return `[${_dt.toLocaleString()}] ${info.level} ${info.message}`;
    })
  ),
});
logger.add(new winston.transports.Console());

export default logger;
