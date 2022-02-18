var _ = require("underscore");

module.exports = function () {
	var queue = [];
	var tempQueue = [];
	var processing = false;
	var Task = function (task) {
		return {
			id: Math.random().toString(36).substring(7),
			fn: task
		}
	};
	
	var process = function () {
		processing = true;

		_.each(queue, function (task) {
			task.fn(task.id);
		});
		
		processing = false;
		queue = tempQueue;
		tempQueue = [];
		
		setTimeout(function () {
			process();
		}, 100);
	};
	
	return {
		push: function (task) {
			if (_.isFunction(task)) {
				if (processing) {
					tempQueue.push(new Task(task));
				} else {
					queue.push(new Task(task));
				}
			}
		},
		run: function () {
			process();
		}
	};
};