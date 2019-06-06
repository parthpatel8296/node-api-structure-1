const winston = require("winston");
const morgan = require("morgan");

const config = require("../config");

//seperate httpLogger to log express request seperately
const httpLogger = winston.createLogger({
    transports : [
        new winston.transports.File({
            filename : config.get('logger.httpLogFileName'),
            json : true,
            maxSize : config.get('logger.logFileSize'),
            maxFiles : 5,
            colorize : false
        })
    ],
    exitOnError : false
});


//logger to log all logs type from application to exception
const logger = winston.createLogger({
    transports : [new winston.transports.File({
        filename: config.get('logger.logFileName'),
        json: true,
        maxsize: config.get('logger.logFileSize'),
        colorize: false,
    }),
    new winston.transports.Console({
        level : 'debug',
        json : false,
        colorize : true
    })],
    exceptionHandlers : [
        new winston.transports.File({
            filename: config.get('logger.exceptionLogFileName'),
            json: true,
            maxsize: config.get('logger.logFileSize'),
            colorize: false, 
        })
    ],
    exitOnError : false
});

const stream = {
    write : function(message,encoding){
        httpLogger.info(message);
    }
}

logger.startHttpLogger = () => {
    return morgan('full',{
        stream : stream
    });
};

module.exports = logger;