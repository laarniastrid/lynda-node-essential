const path = require('path');
const util = require('util');
// destructuring
const { log } = require('util');
const v8 = require('v8');
const { getHeapStatistics } = require('v8');

// util.log(path.basename(__filename));
// util.log(' ^ the name of the current file ');
// util.log(v8.getHeapStatistics());
log(getHeapStatistics());
