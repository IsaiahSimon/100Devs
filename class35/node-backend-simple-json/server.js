const http = require('http');
const fs = require('fs')
const url = require('url');
const querystring = require('querystring');
const figlet = require('figlet')

const server = http.createServer((req, res) => { // must create server 1st

  // make new DRY function
  const readWrite = (file, contentType) => {
    fs.readFile(file, function(err, data) {
      res.writeHead(200, {'Content-Type': contentType});
      res.write(data);
      res.end();
    });
  }

  const page = url.parse(req.url).pathname;
  const params = querystring.parse(url.parse(req.url).query);
  console.log(page);

  switch (page) {
    case '/':
      readWrite('index.html', 'text/html') // DRY out
      break;

    case '/otherpage':
      readWrite('otherpage.html', 'text/html') // DRY out
      break;

    case '/otherotherpage':
      readWrite('otherother.html', 'text/html') // DRY out
      break;

    case '/api':
      let personName = 'unknown';
      let personStatus = 'unknown';
      let personOccupation = 'unknown';

      if(params['student']== 'leon'){
        personName = 'leon';
        personStatus = 'Boss Man';
        personOccupation = 'Baller';
      }
      res.writeHead(200, {'Content-Type': 'application/json'});
        const objToJson = {
          name: personName,
          status: personStatus,
          currentOccupation: personOccupation
        }
        res.end(JSON.stringify(objToJson));
        break;
      case '/css/style.css':
        fs.readFile('css/style.css', function(err, data) {
          res.write(data);
          res.end();
        });
        break;

      case '/js/main.js':
        readWrite('js/main.js', 'text/javascript') // DRY out
        break;


    default:
    figlet('404!!', function(err, data) {
      if (err) {
          console.log('Something went wrong...');
          console.dir(err);
          return;
      }
      res.write(data);
      res.end();
    });
  }

});

server.listen(8000);
