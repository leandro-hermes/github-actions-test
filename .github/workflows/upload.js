var FormData = require('form-data');
var fs = require('fs');
var core = require('@actions/core');

var form = new FormData();
form.append('pull_request', process.argv[0]);
form.append('compiled', fs.createReadStream('../../dist/release-prod.zip'));
const host = '3244127f7252.ngrok.io';
const path = '/frontendCompiled';

console.log('Enviando arquivo', +form.size + 'b');
form.submit({
  host,
  path,
}, function (err, res) {
  console.log(err, res);

  if (err) {
    core.setFailed(JSON.stringify(err));
  }
});
