const { HealthCheckRoute } = require('./healthcheck/healthcheck.route');

module.exports.routes = [
    new HealthCheckRoute(),
];