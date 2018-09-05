const restify = require('restify');
const cors = require('../http/cors');
const routes = require('../http/routes');


const server = restify.createServer();
routes(server);

server.use(restify.plugins.bodyParser());
server.pre(cors.preflight)
server.use(cors.actual)

module.exports = server;
