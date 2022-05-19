#!/usr/bin/env node
/*
 * src      : test1.js
 * job      : tests for IdxToneFive
 * git      : https://github.com/pffy/tfdx-ts
 * author   : The Pffy Authors https://pffy.dev
 * license  : https://opensource.org/licenses/MIT
 */
const { IdxToneFive } = require('../.');

const str = 'hao5';
const key = 'hao5';

console.log('quiet-hao? %s?: %s', str, str.replace(key, IdxToneFive.tfdx[key]));
console.log('done.');
