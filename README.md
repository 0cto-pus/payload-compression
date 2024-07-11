## cURL Results

 - Compressed results:

![alt text](https://github.com/0cto-pus/payload-compression/blob/main/outputs/compressed.PNG?raw=true)


 - Uncompressed results:

![alt text](https://github.com/0cto-pus/payload-compression/blob/main/outputs/uncompressed.PNG?raw=true)

## Fetch Results

    Compressed Response Headers: {
      'x-powered-by': 'Express',
      'content-type': 'application/json; charset=utf-8',
      **********************,
      vary: 'Accept-Encoding',
      'content-encoding': 'gzip',
      date: 'Thu, 11 Jul 2024 14:04:40 GMT',
      connection: 'keep-alive',
      'keep-alive': 'timeout=5',
    }
**Compressed Response Size: 279**

    Uncompressed Response Headers: {
      'x-powered-by': 'Express',
      'content-type': 'application/json; charset=utf-8',
      'content-length': '55054',
      ***********************,
      vary: 'Accept-Encoding',
      date: 'Thu, 11 Jul 2024 14:04:40 GMT',
      connection: 'keep-alive',
      'keep-alive': 'timeout=5'
    }

**Uncompressed Response Size: 55054**

