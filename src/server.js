const { createServer, IncomingMessage, ServerResponse } = require('http');
const { Subject } = require('rxjs');
const { map } = require('rxjs/operators');

const { routes } = require('./routes/routes');

const subject$ = new Subject();
const server = createServer();

server.on('request', (req, res) => subject$.next({ req, res }));
server.listen(3000, () => { console.log('Starting service on port 3000 (again)...')});

subject$
    .pipe(map(({ req, res }) => routes.find((route) => route.matchesHttpMethod(req.method) && route.matchesPath(req.path))?.handle(req, res) || handle404(res)))
    .subscribe((res) => res.end());

function handle404(res) {
    res.statusCode = 404;
    res.write('404 Note Found');
    return res;
}