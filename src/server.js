const { createServer, IncomingMessage, ServerResponse } = require('http');
const { Subject } = require('rxjs');
const { map, tap } = require('rxjs/operators');

const subject$ = new Subject();
const server = createServer();

server.on('request', (req, res) => subject$.next({ req, res }));
server.listen(3000, () => { console.log('Starting service on port 3000 (again)...')});

subject$
    .pipe(map(({ req, res }) => { res.write('OK'); return res; }))
    .subscribe((res) => res.end());