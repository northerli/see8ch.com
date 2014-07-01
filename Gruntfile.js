module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concat: {
            dist: {
                src: [
                    'js/libs/*.js', // JS Libraries
                    'js/main.js', // Main JS Document
                ],
                dest: 'js/production.js', // needs a better name, doncha think?
            }
        },
        uglify: {
            build: {
                src: 'js/production.js',
                dest: 'js/production.min.js'
            }
        },
        imagemin: {
            dynamic: {
                files: [{
                    expand: true,
                    cwd: 'images/',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: 'images/optimized/'
                }]
            }
        },
        sass: {
            dist: {
                options: {
                    // Can be nested, compact, compressed, expanded
                    style: 'expanded'
                },
                files: {
                    'css/style_v1.2.css': 'scss/style.scss'
                }
            }
        },
        autoprefixer: {
            options: {
                // Task-specific options go here.
            },
            global: {
                options: {
                    // Target-specific options go here.
                    // browser-specific info: https://github.com/ai/autoprefixer#browsers
                    // DEFAULT: browsers: ['> 1%', 'last 2 versions', 'ff 17', 'opera 12.1']
                    browsers: ['> 1%', 'last 2 versions', 'ff 17', 'opera 12.1', 'ie 8', 'ie 9']
                },
                src: 'css/style_v1.2.css'
            },
        },

        notify_hooks: {
          options: {
            enabled: true,
            max_jshint_notifications: 5, // maximum number of notifications from jshint output
            title: "Project Name" // defaults to the name in package.json, or will use project directory's name
          }
        },
        watch: {
             //options: {
             //    livereload: true,
             //},
            scripts: {
                files: ['js/main.js'],
                tasks: ['concat', 'uglify'],
                options: {
                    spawn: false,
                },
            },
            css: {
                files: ['scss/*.scss', 'scss/**/*.scss'],
                tasks: ['sass', 'autoprefixer'],
                options: {
                    livereload: true,
                    spawn: false,
                }
            },
            html: {
                files: ['*.html', '**/*.html', '*.php', '**/*.php', 'js/*.js'],
                options: {
                    livereload: true,
                    spawn: false,
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');     // concatenate
    grunt.loadNpmTasks('grunt-contrib-uglify');     // minify
    grunt.loadNpmTasks('grunt-contrib-imagemin');   // optimize images
    grunt.loadNpmTasks('grunt-contrib-watch');      // watch files for changes
    grunt.loadNpmTasks('grunt-contrib-sass');       // Gettin Sassy!
    grunt.loadNpmTasks('grunt-autoprefixer');       // Auto-freaking-prefixer!!!
    grunt.loadNpmTasks('grunt-contrib-connect');        // Localhost Environment
    grunt.loadNpmTasks('grunt-notify');

    grunt.registerTask('default', ['watch']);
};
