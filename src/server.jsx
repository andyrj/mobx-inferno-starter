'use strict';
import 'babel-polyfill';
import Inferno from 'inferno';
import InfernoServer from 'inferno-server';
import koa from 'koa';
import mount from 'koa-mount';
import convert from 'koa-convert';
import serve from 'koa-static';
import optimist from 'optimist';
import App from './App';
import stores from './stores';

const assets = require('../dist/assets.json');

const Html = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <title>{'Inferno Mobx Starter'}</title>
        <meta 
          content="width=device-width, initial-scale=1.0, minimum-scale=1.0" 
          name="viewport"
        />
        <link 
          href="https://fonts.googleapis.com/icon?family=Material+Icons" 
          rel="stylesheet" 
        />
        <link href={assets.site.css} rel="stylesheet" />
      </head>
      <body>
        <div id="root">{children}</div>
        <script src={assets.site.js} />
      </body>
    </html>
  );
};

const renderPath = (path) => {
  stores.router.changeRoute(path);
  let html = '<!DOCTYPE html>\n' + InfernoServer.renderToString(
    <Html>
      <App stores={stores} />
    </Html>
  );
  return html;
};

const app = new koa();

app.use(convert(mount('/dist', serve('./dist/'))));

app.use(async (ctx) => {
  ctx.body = renderPath(ctx.request.url);
});

app.listen(8080, () => {
  console.log('Server listening on port 8080.'); // eslint-disable-line
});
  
export default renderPath;