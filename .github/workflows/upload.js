var FormData = require('form-data');
var fs = require('fs');
var core = require('@actions/core');

var form = new FormData();
form.append('pull_request', process.argv[2]);
form.append('compiled', fs.readFileSync('../../dist/release-prod.zip'));
const host = '3244127f7252.ngrok.io';
const path = '/frontendCompiled';

form.getLength(function (err, l) {
  console.log('Enviando arquivo', l + 'b');
});

form.submit({
  host,
  path,
}, function (err, res) {
  console.log(err, res);

  if (err) {
    core.setFailed(JSON.stringify(err));
  }
});
