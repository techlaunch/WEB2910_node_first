const http = require('http');

http
  .createServer((request, response) => {
    request.on('error', err => {
      console.log(err);
      response.statusCode = 400;
      response.end();
    });

    response.on('error', err => {
      console.log(err);
    });

    if (request.method === 'GET' && request.url === '/echo') {
      request.pipe(response);
    } else {
      response.status = 404;
      response.end();
    }
  })
  .listen(8080, () => console.log('Echo listening on 8080'));
