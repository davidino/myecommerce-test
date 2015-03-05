var Hapi = require('hapi')
var Good = require('good');
var controller = require('./controller')

var server = new Hapi.Server();
server.connection({ port: 3000 });

server.route({ method: 'GET', path: '/items', handler: controller.getItems})
server.route({ method: 'GET', path: '/item/{id}', handler: controller.getItem})

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
