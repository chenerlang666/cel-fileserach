#! /usr/bin/env node

var exec = require('child_process').exec;
var userArgs = process.argv.slice(2);
var searchPattern = userArgs[0];
var childCommand = 'ls -a | grep ' + searchPattern;

var child = exec(childCommand,function (err,stdout,stderr){
	console.log(stdout);
});
