var a = require('./a');
var d = require('./d');

t.equal(module.children[0].id, './a');
t.equal(module.children[1].id, './d');
t.end();

module.exports = {
  a: a, 
  d: d
};