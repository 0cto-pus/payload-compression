const http = require('http');
const https = require('https');

//Debugging compression
function fetch(url, options = {}) {
  const protocol = url.startsWith('https') ? https : http;
  return new Promise((resolve, reject) => {
    const req = protocol.request(url, options, (res) => {
      const chunks = [];
      res.on('data', (chunk) => chunks.push(chunk));
      res.on('end', () => {
        const body = Buffer.concat(chunks);
        resolve({ headers: res.headers, body });
      });
    });
    req.on('error', reject);
    req.end();
  });
}
//Results
async function main() {
  const url = 'http://localhost:3000/';

  //Compressed
  const compressedResponse = await fetch(url, {
    headers: { 'Accept-Encoding': 'gzip' },
  });
  console.log('Compressed Response Headers:', compressedResponse.headers);
  console.log('Compressed Response Size:', compressedResponse.body.length);

  //Uncompressed
  const uncompressedResponse = await fetch(url);
  console.log('Uncompressed Response Headers:', uncompressedResponse.headers);
  console.log('Uncompressed Response Size:', uncompressedResponse.body.length);
}

main().catch(console.error);
