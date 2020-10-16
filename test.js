var FormData = require('form-data');
var fs = require('fs');

var form = new FormData();
form.append('README', fs.createReadStream('README.md'));
const host = 'cf3ebe4a74d8.ngrok.io';
const path = '/frontendCompiled';

form.submit({
  host,
  path,
}, function (err, res) {
  console.log('saasdjsao');
  console.log(err, res);
});
