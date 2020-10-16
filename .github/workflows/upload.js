var FormData = require('form-data');
var fs = require('fs');

var form = new FormData();
form.append('pull_request', process.argv[0]);
form.append('compiled', fs.createReadStream('../../dist/release-prod.zip'));
const host = '3244127f7252.ngrok.io';
const path = '/frontendCompiled';

form.submit({
  host,
  path,
}, function (err, res) {
  console.log(err, res);
});
