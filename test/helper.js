let chai = require('chai');
let dom = require('testdom');

let html = dom(`
  <html>
  <body>
	  <div id='app'></div>
  </body>
  </html>
`);

// make chai available to tests
chai.config.includeStack = true;
global.expect = chai.expect;
global.AssertionError = chai.AssertionError;
global.Assertion = chai.Assertion;
global.assert = chai.assert;