module.exports.routes = [
    require('./healthcheck/healthcheck.route').HealthCheckRoute,

    // Not Found Route should be at the bottom to be the default route.
    require('./notfound/notfound.route').NotFoundRoute
];