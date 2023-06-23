const URLPattern = require('urlpattern-polyfill').URLPattern;

class BaseRoute {
    #method = undefined;
    #path = undefined;

    constructor(method, path) {
        if (this.constructor === BaseRoute) throw new Error('Abstract class BaseRoute can not be instantiated.');
        if (!method) throw new Error('Method must be provided.');
        if (!path) throw new Error('Path must be provided.');

        this.#method = method;
        this.#path = path;
    }

    handle(req, res) {
        throw new Error('Method "handle" must be implemented in extending class.');
    }

    matchesHttpMethod(httpMethod) {
        return httpMethod === this.#method;
    }

    matchesPath(path) {
        const urlPattern = new URLPattern(new URL(this.#path, 'http://dummydomain'));
        return urlPattern.test(new URL(path, 'http://dummydomain'));
    }
}

module.exports.BaseRoute = BaseRoute;