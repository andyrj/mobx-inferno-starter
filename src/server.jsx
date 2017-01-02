'use strict';
import Inferno from 'inferno';
import InfernoServer from 'inferno-server';
import { connect } from 'inferno-mobx';
import { resolve } from 'path';
import fs from 'fs';
import express from 'express';
import optimist from 'optimist';
import App from './App';
import stores from './stores';

const assets = require('../dist/assets.json');

// nginx will look for $uri with the .html extension
const prerenderRoutes = [
  {
    path: '/',
    filename: 'index.html'
  },
  {
    path: '/counters',
    filename: 'counters.html'
  },
  {
    path: '/todos',
    filename: 'todos.html'
  }
];

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
        <script src={assets.vendor.js} />
        <script src={assets.site.js} />
      </body>
    </html>
  );
};

const resolvePath = (path) => {
  stores.router.changeRoute(path);
  let html = '<!DOCTYPE html>\n' + InfernoServer.renderToString(
    <Html>
      <App stores={stores} />
    </Html>
  );
  return html;
};

let argv = optimist
            .alias('p', 'prerender')
            .alias('o', 'out')
            .default('o', 'site/')
            .argv;

if (argv.prerender && argv.out) {
  prerenderRoutes.forEach((route) => {
    fs.writeFile(
      resolve(__dirname, argv.out + route.filename), resolvePath(route.path), 
      (err) => {
        if(err) {
            return console.log(err); // eslint-disable-line 
        }
        console.log(`${route.filename} saved...`); //eslint-disable-line
    }); 
  });
} else { // start express server on port 8080
  const app = express();

  app.use((req, res) => {
    res.send(resolvePath(req.url));
  });

  app.listen(8080, () => {
    console.log('Server listening on port 8080.'); // eslint-disable-line
  });
}
  
