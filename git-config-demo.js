#!/usr/bin/env node
'use strict';
const colors = require('colors/safe');
const gitConfig = require('git-config');
const commander = require('commander');

gitConfig(function(err, config) {
		if(err) return done(err);
		console.log(colors.grey("Git name"));
		console.log(colors.green(config.user.name));
		console.log(colors.green(config.user.email));
		console.log(colors.red(JSON.stringify(config)));
});

