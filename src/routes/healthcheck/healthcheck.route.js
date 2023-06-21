const { BaseRoute } = require('../base.route');

class HealthCheckRoute extends BaseRoute {
    constructor() {
        super('GET', '/check');
    }

    handle(req, res) {
        res.statusCode = 200;
        res.write('OK  - Health Check');
        return res;
    }
}

module.exports.HealthCheckRoute = HealthCheckRoute;