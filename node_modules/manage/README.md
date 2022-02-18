# MANAGE
`Manage` is a simple, light weight asset manager, tailored for web development. The functionality is very limited, but at the same time very useful. What `Manage` does, is automatically concatenate and minify Javascript and CSS on file change. This means that you can fire up `Manage`, and trust that when you hit that refresh button, your assets are automatically up to date.

[![NPM](https://nodei.co/npm/manage.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/manage.png?downloads=true&downloadRank=true&stars=true)

## How To
It is very simple. Install `Manage` through `npm`: `npm install -g manage`

Then create a `manage.json` file in the root of your project. Here is an example that fits the `testcase` folder:

```json
{
	"buildPath": "build/",
	"styles": {
		"prerequisites": [
			"testcase/css/libs/somelib.css"
		],
		"app": [
			"testcase/css/app/someapp.css"
		],
		"output": "app.min.css"
	},
	"scripts": {
		"prerequisites": [
			"testcase/js/libs/somelib.js",
			"testcase/js/libs/someotherlib.js"
		],
		"app": [
			"testcase/js/app/someapp.js"
		],
		"output": "app.min.js"
	}
}
```

Then you simply run manage from a command line by invoking `manage`.
