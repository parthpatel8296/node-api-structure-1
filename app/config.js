const path = require('path');
const convict = require('convict');

const config = convict({
  env: {
    doc: 'The application environment',
    format: ['production', 'development'],
    default: 'development',
    env: 'NODE_ENV',
    arg: 'env',
  },
  server: {
    http: {
      port: {
        doc: 'HTTP port to bind',
        format: 'port',
        default: 8000,
        env: 'PORT',
      },
      ip: {
        doc: 'The Ip address to bind',
        format: 'ipaddress',
        default: 'localhost',
        env: 'IP_ADDRESS',
      },
    },
    CORS: {
      allowedHosts: {
        doc: 'Allowed Host for CORS',
        format: Array,
        default: [],
      },
      allowedMethods: {
        doc: 'Allowed HTTP Methods for CORS',
        format: String,
        default: 'GET,POST,OPTIONS',
      },
      allowedHeaders: {
        doc: 'Allowed HTTP Headers for CORS',
        format: String,
        default: 'accept, x-xsrf-token,content-type, x-location, certificate',
      },
      exposedHeaders: {
        doc: 'Exposed HTTP Headers for CORS',
        format: String,
        default: 'XSRF-TOKEN',
      },
    },
    enableStatic: {
      doc: 'Enable Express static server',
      format: Boolean,
      default: true,
    },
    enableRequestLog: {
      doc: 'To enable request log on server',
      format: Boolean,
      default: true,
    },
    enableHttpLogging: {
      doc: 'Enable Http Logging',
      format: Boolean,
      default: true,
    },
    static: {
      directory: {
        doc: 'Express static server content directory',
        format: String,
        default: '../../public',
      },
      options: {
        doc: 'Express static server options',
        format: Object,
        default: { maxAge: 0 },
      },
    },
    security: {
      enableCORS: {
        doc: 'Enable CORS',
        format: Boolean,
        default: true,
      },
      emailSalt: {
        doc: 'salt',
        format: String,
        default: '$2a$10$e.oPc.dyrwRoQCpDvO9Rhe',
      },
    },
  },
  databaseUrl: {
    doc: 'Database url for firebase',
    format: 'url',
    default: '',
  },
  logger: {
    httpLogFormat: {
      doc: 'HTTP log format',
      format: String,
      default: ':remote-addr - :remote-user [:date] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms ":referrer" ":user-agent"',
    },
    httpLogFileName: {
      doc: 'HTTP log File name',
      format: String,
      default: './logs/http.log',
    },
    logFileName: {
      doc: 'Log File name',
      format: String,
      default: './logs/logs.log',
    },
    exceptionLogFileName: {
      doc: 'Exception log File name',
      format: String,
      default: './logs/exceptions.log',
    },
    logFileSize: {
      doc: 'logs File Max File size',
      format: Number,
      default: 5242880,
    },
  },

});

// Get Environment
const environment = config.get('env');

// Environment directory path
const environmentDirectoryPath = `./environment/${environment}.json`;

// Environment wise configuration path
const pathToResolve = path.resolve(__dirname, environmentDirectoryPath);

// Load file for particular environment
config.loadFile(pathToResolve);

// perform validation
config.validate({ allowed: 'strict' });

module.exports = config;
