#!/usr/bin/env node

var _ = require("underscore");
var fs = require("fs");
var Compiler = require("./compiler.js");
var TaskQueue = require("./taskqueue.js");
var watchr = require("watchr");

var WatchrObject = function (paths, changeCallback, nextCallback) {
	return {
	    paths: paths,
		preferredMethods: ['watchFile','watch'],
		interval: 1000,
	    listeners: {
			error: function (err) {
				console.log(err);
			},
	        watching: function(err, watcherInstance, isWatching){
	            if (err) {
	                console.log("Watching: " + watcherInstance.path + " - failed with error", err);
	            } else {
	                console.log("Watching: " + watcherInstance.path);
	            }
	        },
	        change: function(changeType, filePath, fileCurrentStat, filePreviousStat){
				if (_.isFunction(changeCallback)) {
					changeCallback(filePath);
				}
	        }
	    },
		next: function (err, watchers) {
			nextCallback(err, watchers);
		}
	}
};

var changeEventHandler = function (type, compiler, queue) {
	console.log("Change detected, scheduled compile task.")

	queue.push(function (id) {
		compiler.compile(type, id).then(function (data) {
			console.log("<" + new Date().toLocaleTimeString() + "> <#" + id + "> Done")
		}, function (err) {
			console.log("<" + new Date().toLocaleTimeString() + "> <#" + id + "> " + err);
		}, function (progress) {
			console.log("<" + new Date().toLocaleTimeString() + "> <#" + id + "> " + progress);
		});
	});
};

function main () {
	try {
		var settingsFile = (process.argv[2] != undefined ? process.argv[2] : "manage.json");

		if (!fs.existsSync(settingsFile)) {
			console.log("You have to create a lam.json file, or specify another file as a command line argument.");
			return;
		}
	
		var settings = JSON.parse(fs.readFileSync(settingsFile));
	
		try {
			fs.mkdirSync(settings.buildPath);
		} catch (e) {
		
		}
	
		var compiler = new Compiler(settings);
		var queue = new TaskQueue();
		queue.run();
	
		changeEventHandler("scripts", compiler, queue);
		changeEventHandler("styles", compiler, queue);
		
		var reloadTrigger = false;
		var reloadChecker = function (watchers) {
			setTimeout(function () {
				if (reloadTrigger) {
					for (var i = 0; i < watchers.length; i++) {
		                watchers[i].close();
		            }
					
					main();
				} else {
					reloadChecker(watchers);
				}
			}, 500);
		};

		watchr.watch(new WatchrObject(_.union(settings.scripts.prerequisites, settings.scripts.app, settings.styles.prerequisites, settings.styles.app, [settingsFile]), function (filePath) {
			if (_.indexOf(settings.scripts.prerequisites, filePath) > -1 || _.indexOf(settings.scripts.app, filePath) > -1)
			{
				changeEventHandler("scripts", compiler, queue);
			} else if (_.indexOf(settings.styles.prerequisites, filePath) > -1 || _.indexOf(settings.styles.app, filePath) > -1)
			{
				changeEventHandler("styles", compiler, queue);
			} else if (filePath == settingsFile) {
				reloadTrigger = true;
			}
		}, function (err, watchers) {
			reloadChecker(watchers);
		}));
	} catch (e) {
		console.log(e);
	}
}

main();