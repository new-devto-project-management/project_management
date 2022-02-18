var fs = require("fs");

fs.watchFile('./testcase/js/libs/somelib.js', {persistent: true, interval: 1000}, function (event, filename) {
  console.log('event is: ' + event);
  if (filename) {
    console.log('filename provided: ' + filename);
  } else {
    console.log('filename not provided');
  }
});