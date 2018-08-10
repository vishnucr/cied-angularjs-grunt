module.exports = function (grunt)
{
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		concat: {
			options: {
				separator: "\n\n"
			},
			dist: {
				src: ['src/js/**/*.js'],
				dest: 'static/dist/<%= pkg.name %>.js'
			},
			deps: {
				src: [
					'bower_components/jquery/dist/jquery.js',
					'bower_components/bootstrap/dist/js/bootstrap.js',
					'bower_components/angular/angular.js',
					'bower_components/angular-ui-router/release/angular-ui-router.js',
				],
				dest: 'static/deps/<%= pkg.name %>-deps.js'
			},
			css: {
				src: ['bower_components/bootstrap/dist/css/bootstrap.min.css',
						'src/css/styles.css','src/css/media.css'
				],
				dest: 'static/dist/<%= pkg.name %>.css'
			},
		},
		copy: {
			main: {
			  files: [
				// makes all src relative to cwd
				{expand: true, cwd:'src/partials/' ,src: ['**'], dest: 'templates/ui/'},
			  ],
			},
		},
		sass: {
			dev: {
				files: {
					'src/css/styles.css': 'src/css/styles.scss',
					'src/css/media.css': 'src/css/media.scss'
				}
			}
		},

		watch: {
			scripts: {
				files: ['src/resources/js/**/*.js'],
				tasks: ['concat:dist']
			},
			styles: {
				files: ['src/resources/css/*.scss'],
				tasks: ['sass']
			}
		}
	});

	//npm tasks
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	// grunt.loadNpmTasks('grunt-ngdocs');

	//tasks
	grunt.registerTask('default', 'Default Task Alias', ['build']);

	grunt.registerTask('build', 'Build the application', 
		['copy','sass:dev','concat']);
}