'use strict';
var common = require('../common');
var assert = require('assert');
var net = require('net');

function close() { this.close(); }
net.Server().listen({ port: undefined }, close);
net.Server().listen({ port: '0' }, close);

[ 'nan',
  -1,
  123.456,
  0x10000,
  1 / 0,
  -1 / 0,
  '+Infinity',
  '-Infinity'
].forEach(function(port) {
  assert.throws(function() {
    net.Server().listen({ port: port }, common.fail);
  }, /port should be >= 0 and < 65536/i);
});

[null, true, false].forEach(function(port) {
  assert.throws(function() {
    net.Server().listen({ port: port }, common.fail);
  }, /invalid listen argument/i);
});
