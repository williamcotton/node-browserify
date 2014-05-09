var browserify = require('../');
var vm = require('vm');
var test = require('tap').test;
var fs = require('fs');
var path = require('path');
var prelude = fs.readFileSync(path.join(__dirname, 'children', 'prelude.js'), 'utf8');


test('children', function (t) {
    t.plan(2);
    
    var b = browserify(__dirname + '/children/main.js');
    b.bundle({prelude: prelude}, function (err, src) {
        vm.runInNewContext(src, { 
          t: t
        });
    });
});
