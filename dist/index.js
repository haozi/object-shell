'use strict';

function get(data, path) {
  data.a = 10;
  return;
}

function set(data, path, value) {
  return;
}

function swap(data, pathA, pathB) {}

exports.get = get;
exports.set = set;
exports.swap = swap;