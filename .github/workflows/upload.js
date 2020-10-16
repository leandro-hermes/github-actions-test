const FormData = require('form-data');
const http = require('http');
const fs = require('fs');
const core = require('@actions/core');

const host = process.argv[2];
const path = '/frontendCompiled';
const filePath = process.argv[3];
const pr = process.argv[4];

var form = new FormData();
form.append('pull_request', pr);
form.append('compiled', fs.readFileSync(filePath));

form.getLength(function (err, l) {
  console.log('Enviando arquivo', l + 'b');
});

form.submit({host, path}, function (err, res) {
  console.log('Response', res.statusCode, err.statusMessage);

  if (err) {
    console.error(error);
    core.setFailed(JSON.stringify(err));
  }
});
