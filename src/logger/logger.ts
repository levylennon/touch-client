import path from 'path'
import winston from 'winston'
import DailyRotateFile from 'winston-daily-rotate-file'
import { LOGS_PATH } from '../constants'

const prettyJson = winston.format.printf((info) => {
  if (info.message && typeof info.message === 'object') {
    info.message = JSON.stringify(info.message, null, 4)
  }
  return `${info.level}: ${info.message}`
})

export const logger = winston.createLogger({
  transports: [
    new winston.transports.Console({
      level: 'debug',
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.prettyPrint(),
        winston.format.splat(),
        winston.format.simple(),
        prettyJson
      )
    }),
    new DailyRotateFile({
      filename: path.join(LOGS_PATH, 'logs-%DATE%.log'),
      datePattern: 'YYYY-MM-DD',
      maxFiles: '28d',
      handleExceptions: true,
      handleRejections: true,
      level: 'debug',
      format: winston.format.combine(
        winston.format.timestamp({ format: 'HH:mm:ss' }),
        winston.format.printf((info) => `${info.level} ${info.timestamp} : ${info.message}`)
      )
    })
  ],
  exitOnError: false
})

