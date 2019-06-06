const api = require('./api/movies');

module.exports = (app) => {
  app.use('/api/movie', api);
};
