const http = require('http');

const options = {
  hostname: 'api.example.com',
  path: '/endpoint',
  method: 'GET',
  headers: {
    'Content-Type': 'application/json'
  }
};
const req = http.request(options, (res) => {
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });
res.on('end', () => {
    console.log('Response:', JSON.parse(data));
  });
});
req.on('error', (error) => {
  console.error('Error:', error);
});
req.end();