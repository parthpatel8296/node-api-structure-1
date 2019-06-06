const bodyParser = require('body-parser');
const path = require('path');
const config = require('../config');
const logger = require('../utils/logger');
const CORS = require('./CORS');
const requestLog = require('./requestLog');

module.exports = (app, express) => {
  // to parse json body
  app.use(bodyParser.json());
  // to parse form-data
  app.use(bodyParser.urlencoded({ extended: true }));

  // Enable http logging
  if (config.get('server.enableHttpLogging')) {
    app.use(logger.startHttpLogger());
  }

  // Enable public static directory
  if (config.get('server.enableStatic')) {
    app.use(express.static(path.join(__dirname, config.get('server.static.directory'))));
  }

  // Enable Cors support
  if (config.get('server.security.enableCORS')) {
    CORS(app);
  }

  // Enable request log
  if (config.get('server.enableRequestLog')) {
    requestLog(app);
  }
};
