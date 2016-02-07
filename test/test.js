/**
* tap include
*/
var test = require('tape');

/**
*
*
*/
var home = require("../src/home/home_entry.js");

test('home entry test', function (t) {
    t.plan(1);
    t.equal(home.homePage( new Date().getTime() ), 'even', 'home_entry');
});
