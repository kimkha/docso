var fs = require("fs");
var browserify = require("browserify");
browserify("./docso.js")
	.transform("babelify", {presets: ["env"]})
	.transform("uglifyify", { global: true  })
	.bundle()
	.pipe(fs.createWriteStream("docso.min.js"));