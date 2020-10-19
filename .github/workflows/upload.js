const FormData = require('form-data');
const fs = require('fs');

const host = process.argv[2];
const path = '/frontendCompiled';
const filePath = process.argv[3];
const pr = process.argv[4];

try {
  fs.existsSync(filePath);
} catch (e) {
  return console.error('ERROR: file not found:', filePath);
}

const form = new FormData();
form.append('pull_request', pr);
form.append('compiled', fs.createReadStream(filePath));

form.getLength(function (err, l) {
  console.log('Enviando arquivo', l + 'b');
});

form.submit({host, path}, function (err, res) {
  if (err) {
    return console.error('ERROR', error);
  }

  console.log('Response', res.statusCode, res.statusMessage);

  if (res.statusCode >= 400 && res.statusCode < 600) {
    console.error('ERROR')
  }
});
