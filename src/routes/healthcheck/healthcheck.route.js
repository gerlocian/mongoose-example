const { createRoute } = require('../createRoute');

module.exports.HealthCheckRoute = createRoute({
    path: '/check',
    method: 'GET',
    
    handle: (_, res) => {
        res.statusCode = 200;
        res.write('OK');
        return res;
    }
});