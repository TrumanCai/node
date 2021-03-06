'use strict';
const common = require('../common');
const assert = require('assert');
const net = require('net');

connect({
  host: 'localhost',
  port: common.PORT,
  localPort: 'foobar',
}, /^TypeError: localPort should be a number: foobar$/);

connect({
  host: 'localhost',
  port: common.PORT,
  localAddress: 'foobar',
}, /^TypeError: localAddress must be a valid IP: foobar$/);

function connect(opts, msg) {
  assert.throws(function() {
    net.connect(opts);
  }, msg);
}
