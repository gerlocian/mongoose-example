const { createRoute } = require('../createRoute');

module.exports.NotFoundRoute = createRoute({
    path: undefined,
    method: undefined,
    
    handle: (_, res) => {
        res.statusCode = 404;
        res.write('Not Found');
        return res;
    },
    matchesHttpMethod: () => true,
    matchesPath: () => true,
});