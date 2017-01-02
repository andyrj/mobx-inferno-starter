'use strict';
import optimist from 'optimist';
import fs from 'fs';
import { resolve } from 'path';
import { renderPath } from '../dist/server-bundle';

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

let argv = optimist
            .alias('o', 'out')
            .default('o', 'site/')
            .argv;

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
