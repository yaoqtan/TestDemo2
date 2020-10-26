const { createServer } = require('https');
const { parse } = require('url');
const { readFileSync } = require('fs');
const next = require('next');
const nextConfig = require('./next.config')
const port = 3000;
const dev = process.env.NODE_ENV !== 'production';
//const app = next({ dev });
const app = next({ dev, conf: nextConfig })
const handle = app.getRequestHandler();

const httpsOptions = {
  key: readFileSync('./cert/test_privatekey.pem'),
  cert: readFileSync('./cert/test_certificate.pem')
};

app.prepare()
  .then(() => {
    createServer(httpsOptions, (req, res) => {
      const parsedUrl = parse(req.url, true);
      handle(req, res, parsedUrl);
    }).listen(port, err => {
      if (err) throw err;
      console.log(`> Ready on https://localhost:${port}`);
    })
  });
  