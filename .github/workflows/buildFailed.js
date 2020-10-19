const http = require('http');

const host = process.argv[2];
const path = '/frontendCompiled/error';
const body = {pull_request: process.argv[3]};

console.debug('Host', host);

console.log('Notify server about the failure');
http.request({
  host,
  path,
  body,
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': JSON.stringify(body).length,
    'Host': 'github.com',
  },
}).on('error', function(err) {
  console.error(err.message);
}).end();
