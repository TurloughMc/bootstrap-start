module.exports = function(grunt) {

	// load all grunt tasks in package.json matching the `grunt-*` pattern
	require('load-grunt-tasks')(grunt);

	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),


		csscomb: {
			dist: {
				files: [{
					expand: true,
					cwd: '',
					src: ['*.css'],
					dest: '',
				}]
			}
		},

		autoprefixer: {
			options: {
				browsers: ['> 1%', 'last 2 versions', 'Firefox ESR', 'Opera 12.1']
			},
			dist: {
				src:  'style.css'
			}
		},

		cmq: {
			options: {
				log: false
			},
			dist: {
				files: {
					'style.css': 'style.css'
				}
			}
		},

		cssmin: {
			minify: {
				expand: true,
				cwd: '',
				src: ['*.css', '!*.min.css'],
				dest: '',
				ext: '.min.css'
			}
		},


		uglify: {
			my_target: {
				//files: {
					//'js/bootstrap.min.js': ['Bootstrap_components/javascripts/bootstrap/affix.js']
				//} // files

				files: [{
					expand: true,
					cwd: 'js/',
					src: ['*.js', '!*.min.js', '!/*.js'],
					dest: 'js/',
					ext: '.min.js'
				}]

			} // my_target

		}, // uglify
		compass: {
			dev: {
				options: {
					config: 'config.rb'
				} //options
			} //dev
		}, //compass

		watch: {
			options: { livereload: true },
			scripts: {
				files: ['js/**/*.js'],
				tasks: ['uglify']
			}, // scripts
			sass: {
				files: ['bootstrap_components/*.scss'],
				tasks: ['compass:dev']
			}, //sass
			html: {
				files: ['*.html']
			}
		} // watch

	}) // initConfig

	grunt.registerTask('default', 'watch');

} // exports