var path = require('path');

module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		babel: {
			options: {
				sourceMap: false,
				presets: ['env']
			},
			dist: {
				files: {
					'<%= pkg.name %>.min.js': 'index.js'
				}
			}
		},
		umd: {
			all: {
				options: {
					src: '<%= pkg.name %>.min.js',

					objectToExport: 'docso', // optional, internal object that will be exported
					amdModuleId: 'docso', // optional, if missing the AMD module will be anonymous
					globalAlias: 'docso', // optional, changes the name of the global variable

					template: path.join(__dirname, 'umd.hbs'),
				}
			}
		},
		uglify: {
			options: {
				wrap: 'docso',
				banner: '/*! <%= pkg.name %>@<%= pkg.version %> <%= grunt.template.today("yyyy-mm-dd") %>, source: <%= pkg.repository %>, <%= pkg.license %> License */'
			},
			build: {
				src: '<%= pkg.name %>.min.js',
				dest: '<%= pkg.name %>.min.js'
			}
		}
	});

	grunt.loadNpmTasks('grunt-babel');
	grunt.loadNpmTasks('grunt-umd');
	grunt.loadNpmTasks('grunt-contrib-uglify');

	// grunt.registerTask('default', ['babel', 'uglify']);
	grunt.registerTask('default', ['babel']);

};