var Hapi = require('hapi')
var repository = require('./repository')
var Good = require('good');

var server = new Hapi.Server();
server.connection({ port: 3000 });

server.route({ method: 'GET', path: '/items', handler: getItems})
server.route({ method: 'GET', path: '/item/{id}', handler: getItem})

function getItem (request, reply) {
  try {
    reply(repository.findOne(request.params.id));
  } catch (error) {
    reply('The page was not found').code(404);
  }
}

function getItems (request, reply) {
  reply([
    {id: 0, name: "ipad air 2", price: 20},
    {id: 1, name: "ipad 2", price: 5},
  ])
}


server.register({
    register: Good,
    options: {
        reporters: [{
            reporter: require('good-console'),
            args:[{ log: '*', response: '*' }]
        }]
    }
}, function (err) {
    if (err) {
        throw err; // something bad happened loading the plugin
    }

    server.start(function () {
        server.log('info', 'Server running at: ' + server.info.uri);
    });
});
