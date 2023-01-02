import winston from "winston";
import appRoot from "app-root-path";

const { combine, timestamp, label, printf } = winston.format;

const myFormat = printf(({ level, message, label, timestamp }) => {
  return `${timestamp} [${label} ${level}: ${message}]`; // define log print format
});
/*
 * Log Level
 * error: 0, warn: 1, info: 2, http: 3, verbose: 4, debug: 5, silly: 6
 */
const options = {
  file: {
    level: "info",
    filename: `${appRoot}/logs/winston.log`, // path by logfile
    handleExceptions: true,
    json: false,
    maxsize: 5242880, // 5MB
    maxFiles: 5,
    colorize: false,
    format: combine(
      label({ label: "winston" }),
      timestamp(),
      myFormat // print log format
    ),
  },
  // on develop print console
  console: {
    level: "debug",
    handleExceptions: true,
    json: false, // can also extract the log format as json
    colorize: false,
    format: combine(
      label({ label: "develop_express" }),
      timestamp(),
      myFormat // print log format
    ),
  },
};

const logger = winston.createLogger({
  transports: [
    new winston.transports.File(options.file), // important! log file management module transport with the option declared above
  ],
  exitOnError: false,
});

logger.add(new winston.transports.Console(options.console));

const stream = {
  write: (message: any) => {
    logger.info(message);
  },
};

export default {
  logger,
  stream,
};
