var fs = require("fs");
var browserify = require("browserify");
browserify("./docso.js", { standalone: 'docso'})
	.transform("babelify", {presets: ["env"]})
	.transform("uglifyify")
	.bundle()
	.pipe(fs.createWriteStream("docso.min.js"));