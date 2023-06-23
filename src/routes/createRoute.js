const URLPattern = require('urlpattern-polyfill').URLPattern;

const createBaseRoute = (path, method) => ({
    matchesHttpMethod: (httpMethod) => httpMethod === method,
    matchesPath: (urlPath) => (new URLPattern(new URL(path, 'http://test'))).test(new URL(urlPath, 'http://test')),
});

module.exports.createRoute = (configuration) => Object.assign(
    {},
    createBaseRoute(configuration.path, configuration.method),
    configuration
);