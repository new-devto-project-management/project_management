var compressor = require("node-minify");
var Q = require("q");
var fs = require("fs");

module.exports = function (settings) {
	var output = settings.output;
	
	var doCompile = function (concatPrereqs, minifyApp, concatPrereqsAndApp) {
		var deferred = Q.defer();
		
		var localConcatPrereqs = function () {
			var localDefer = Q.defer();
			
			concatPrereqs(localDefer);
			
			return localDefer.promise;
		};
		
		var localMinifyApp = function () {
			var localDefer = Q.defer();
			
			minifyApp(localDefer);
			
			return localDefer.promise;
		};
		
		var localConcatPrereqsAndApp = function () {
			var localDefer = Q.defer();
			
			concatPrereqsAndApp(localDefer);
			
			return localDefer.promise;
		};
		
		localConcatPrereqs().then(function () {
			localMinifyApp().then(function () {
				localConcatPrereqsAndApp().then(function () {
					deferred.resolve();
				}, function (err) {
					deferred.reject(err);
				}, function (progress) {
					deferred.notify(progress);
				});
			}, function (err) {
				deferred.reject(err);
			}, function (progress) {
				deferred.notify(progress);
			});
		}, function (err) {
			deferred.reject(err);
		}, function (progress) {
			deferred.notify(progress);
		});
		
		return deferred.promise;
	};
	
	var compileScripts = function (settings, taskid) {
		var localSettings = settings.scripts;
		var filenames = {
			prereqConcat: settings.buildPath + "prereqs.scripts.concat." + taskid + ".js",
			appConcat: settings.buildPath + "app.scripts.concat." + taskid + ".js",
			appConcatMin: settings.buildPath + "app.scripts.concat.min." + taskid + ".js",
		};
		
		var clean = function () {
			fs.unlink(filenames.prereqConcat , function (err) {});
			fs.unlink(filenames.appConcat , function (err) {});
			fs.unlink(filenames.appConcatMin , function (err) {});
		};
		
		return doCompile(function (defer) {
			new compressor.minify({
			    type: 'no-compress',
			    fileIn: localSettings.prerequisites,
			    fileOut: filenames.prereqConcat,
			    callback: function(err, min){
			        if (err != null) {
						defer.notify("Script Build: Error while concatenating prerequisites.");
						clean();
			        	defer.reject(err);
			        } else {
						defer.notify("Script Build: Concatenated prerequisites...");
			        	defer.resolve();
			        }
			    }
			});
		}, function (defer) {
			new compressor.minify({
			    type: 'no-compress',
			    fileIn: localSettings.app,
			    fileOut: filenames.appConcat,
			    callback: function(err, min){
			        if (err != null) {
						defer.notify("Script Build: Error while concatenating app.");
						clean();
			        	defer.reject(err);
			        } else {
						defer.notify("Script Build: Concatenated app.");
						new compressor.minify({
						    type: 'uglifyjs',
						    fileIn: filenames.appConcat,
						    fileOut: filenames.appConcatMin,
						    callback: function(err, min){
						        if (err != null) {
									defer.notify("Script Build: Error while minifying app.");
									clean();
						        	defer.reject(err);
						        } else {
									defer.notify("Script Build: Minified app.");
						        	defer.resolve();
						        }
						    }
						});
			        }
			    }
			});
		}, function (defer) {
			new compressor.minify({
			    type: 'no-compress',
			    fileIn: [
					filenames.prereqConcat, 
					filenames.appConcatMin
				],
			    fileOut: settings.buildPath + localSettings.output,
			    callback: function(err, min){
			        if (err != null) {
						defer.notify("Script Build: Error while concatenating prerequisites and minified app.");
						clean();
			        	defer.reject(err);
			        } else {
						defer.notify("Script Build: Concatenated prerequisites and minified app.");
						clean();
			        	defer.resolve();
			        }
			    }
			});
		});
	};
	
	var compileStyles = function (settings, taskid) {
		var localSettings = settings.styles;
		var filenames = {
			prereqConcat: settings.buildPath + "prereqs.styles.concat." + taskid + ".css",
			appConcat: settings.buildPath + "app.styles.concat." + taskid + ".css",
			appConcatMin: settings.buildPath + "app.styles.concat.min." + taskid + ".css",
		};
		
		var clean = function () {
			fs.unlink(filenames.prereqConcat , function (err) {});
			fs.unlink(filenames.appConcat , function (err) {});
			fs.unlink(filenames.appConcatMin , function (err) {});
		};
		
		return doCompile(function (defer) {
			new compressor.minify({
			    type: 'no-compress',
			    fileIn: localSettings.prerequisites,
			    fileOut: filenames.prereqConcat,
			    callback: function(err, min){
			        if (err != null) {
						defer.notify("Styles Build: Error while concatenating prerequisites.");
						clean();
			        	defer.reject(err);
			        } else {
						defer.notify("Styles Build: Concatenated prerequisites...");
			        	defer.resolve();
			        }
			    }
			});
		}, function (defer) {
			new compressor.minify({
			    type: 'no-compress',
			    fileIn: localSettings.app,
			    fileOut: filenames.appConcat,
			    callback: function(err, min){
			        if (err != null) {
						defer.notify("Styles Build: Error while concatenating app.");
						clean();
			        	defer.reject(err);
			        } else {
						defer.notify("Styles Build: Concatenated app.");
						new compressor.minify({
						    type: 'sqwish',
						    fileIn: filenames.appConcat,
						    fileOut: filenames.appConcatMin,
						    callback: function(err, min){
						        if (err != null) {
									defer.notify("Styles Build: Error while minifying app.");
									clean();
						        	defer.reject(err);
						        } else {
									defer.notify("Styles Build: Minified app.");
						        	defer.resolve();
						        }
						    }
						});
			        }
			    }
			});
		}, function (defer) {
			new compressor.minify({
			    type: 'no-compress',
			    fileIn: [
					filenames.prereqConcat, 
					filenames.appConcatMin
				],
			    fileOut: settings.buildPath + localSettings.output,
			    callback: function(err, min){
			        if (err != null) {
						defer.notify("Styles Build: Error while concatenating prerequisites and minified app.");
						clean();
			        	defer.reject(err);
			        } else {
						defer.notify("Styles Build: Concatenated prerequisites and minified app.");
						clean();
			        	defer.resolve();
			        }
			    }
			});
		});
	}; 
	
	return {
		compile: function (type, taskid) {
			switch (type) {
				case "scripts":
					return compileScripts(settings, taskid);
					break;
				case "styles":
					return compileStyles(settings, taskid);
					break;
			}
		}
	}
};