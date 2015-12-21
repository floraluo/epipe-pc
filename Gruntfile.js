module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		sass: {
			dist: {
				options: {				     // Target options
					style: 'expanded',
					sourcemap: 'none',
				},
				files: [{
					expand: true,
					cwd: 'src/sass',
					src: ['**/*.{scss,sass}'],
					dest: '.tmp/styles',
					ext: '.css'
				}]
			}
		},
		compass: {
			dev: {
				options: {
					relativeAssets: true,
					sassDir: 'src/sass',
					cssDir: '.tmp/styles',
					imagesDir: 'src/images'
				}
			},
			prod: {
				options: {
					relativeAssets: true,
					sassDir: 'src/sass',
					cssDir: '.tmp/styles',
					imagesDir: 'src/images',
					environment: 'production'
				}
			}
		},
		concat_css: {
			index: {
		      src: ['src/css/sprites.css', 'src/css/index.css'],
		      dest: 'src/css/index.css'
		    }
		},
		// concat: {
		// 	index_css: {
		// 		src: ['src/css/sprites.css', 'src/css/index.css'],
		// 		dest: 'src/css/index.css'
		// 	}
		// },
		autoprefixer: {
			options: {
				rowsers: ['last 5 versions', 'ie 8' , 'ie 9']
			},
			dist: {
				files: [{
					expand: true,
					cwd: '.tmp/styles/',
					src: ['**/*.css'],
					dest: 'src/css/'
				}]
			}
		},
		cssmin: {
			minify: {
				files: [{
					expand: true,
					cwd: 'src/css/',
					// src: ['*.css', '!*.min.css','!stock.css','!common.css','!main.css','!page.css'],
					src: ['**/*.css'],
					dest: 'dist/css',
					ext: '.min.css'
				}]
			}
		},
		sprite:{
			index: {
				padding: 5,
				src: 'src/images/s/*.png',
				dest: 'src/images/spritesheet_index.png',
				destCss: 'src/css/sprites.css',
				cssTemplate: 'src/images/s/handlebarsStr.css.handlebars',
				algorithm: 'top-down',
				imgPath: '/content/images/spritesheet_index.png'
			}
    	},
		htmlmin: {																			// Task
			// dist: {																				// Target
			// 	options: {																	// Target options
			// 		removeComments: true,
			// 		collapseWhitespace: true
			// 	},
			// 	files: [{
			// 		expand: true,
			// 		cwd: 'src/',
			// 		src: ['*.html'],
			// 		dest: 'dist/',
			// 		ext: '.html'
			// 	}]
			// },
			dev: {
				files: [{
					expand: true,
					cwd: 'src/',
					// src: ['dynamic.html'],
					src: ['**/*.html'],
					dest: 'dist/',
					ext: '.html'
				}]
			}
		},
		imagemin: {
			dist: {
				options: {
					optimizationLevel: 5 
				},
				files: [{
					expand: true,
					cwd: 'src/images',
					src: ['**/*.{png,jpg,gif}','!/old/*.{png,jpg,gif}'],
					dest: 'dist/images'
				}]
			}
		},
		uglify: {
			options: {
				banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %> */'
			},
			dist: {
				options: {
					mangle: false,
					compress: {
				    	drop_console: true
				    }

				},
				files: [{
					expand: true,
					cwd: 'src/js',
					src: ['*.js','!indexf.js'],
					dest: 'dist/js',
					ext: '.min.js'
				}]
			},
			dev: {
				// files: {
				// 'dist/js/indexf.min.js': ['src/js/indexf.js']
				// }

				options: {
					mangle: false,
				    beautify: true
				},
				files: [{
					expand: true,
					cwd: 'src/js',
					src: ['*.js'],
					dest: 'dist/js',
					ext: '.min.js'
				}]
			}
		},
		watch: {
			sass: {
				files: ['src/**/*.{scss,sass}','!src/page/*.sass'],
				// tasks: ['sass','autoprefixer','cssmin']
				tasks: ['sass','autoprefixer','concat_css:index','cssmin']
			},
			// css: {
			// 	files: ['src/css/*.css'],
			// 	tasks: ['cssmin']
			// },
			gruntfile: {
				files: ['Gruntfile.js']
			},
			html: {
				// files: ['src/dynamic.html'],
				files: ['src/**/*.html'],
				tasks: ['htmlmin:dev']
			},
			js: {
				files: ['src/js/*.js'],
				tasks: ['uglify:dev']
			}
    }
	});
	grunt.loadNpmTasks('grunt-autoprefixer');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-concat-css');
	// grunt.loadNpmTasks('grunt-css');
	grunt.loadNpmTasks('grunt-spritesmith');
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-htmlmin');
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.registerTask('default', ['watch']);
	grunt.registerTask('build', ['sass' , 'autoprefixer','cssmin' , 'htmlmin:dev' , 'uglify' , 'imagemin']);
	grunt.registerTask('build_sprite', ['sprite' , 'concat_css:index', 'cssmin']);	
}