const http = require('http');

const host = process.argv[2];
const path = '/frontendCompiled/error';
const pull_request = process.argv[3];

console.log('Informando Releaser sobre a falha');
http.request({
  host,
  path,
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: {pull_request},
}, function (res) {
  console.log(res.statusCode, res.statusMessage);
});
