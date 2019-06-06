const express = require("express");

const config = require("./config");
const logger = require("./utils/logger");

const app = express();

require('./middlewares/index')(app,express);

require('./routes')(app);


const server = require('http').createServer(app);

//Set Port
app.set('port',config.get('server.http.port'));

//Set Ip
app.set('ip',config.get('server.http.ip'));

app.get("/",(req,res) =>{
    res.status(200).send(`Api running on port : ${app.get('port')}`);
});

// Start HTTP server
server.listen(app.get('port'), app.get('ip'), () => {
    logger.info(`Express server listening on Server:  http://${app.get('ip')}:${app.get('port')} with ProcessID: ${process.pid}`);
    logger.info(`Environment: ${config.get('env')}`);
});