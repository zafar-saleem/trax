module.exports = function (grunt) {

    grunt.initConfig({

        jshint: {
            options: {
                jshintrc: '.jshintrc'
            },
            all: [
                'src/js/controllers/*.js',
                'src/js/views/*.js',
                'src/js/models/*.js',
                'src/js/sandbox/*.js',
                'src/js/*.js'
            ]
        },

        csslint: {
            options: {
                csslintrc: '.csslintrc'
            },
            target: {
                src: 'src/css/css/**/*.css'
            }
        },

        copy: {
            dist: {
                cwd: 'src/',
                expand: true,
                src: '**',
                dest: 'dist/'
            }
        },

        requirejs: {
            compile: {
                options: {
                    baseUrl: 'dist/js',
                    mainConfigFile: 'dist/js/config.js',
                    name: 'main',
                    out: 'dist/scripts/scripts.min.js',
                    include: 'libs/requirejs/require.js',
                    optimize: 'uglify',
                    preserveLicenseComments: false,
                    useStrict: true,
                    wrap: true
                }
            }
        },

        cssmin: {
            options: {},
            target: {
                src: 'dist/css/**/*.css',
                dest: 'dist/styles/styles.min.css'
            }
        },

        clean: {
            js: ['dist/js/'],
            css: ['dist/css/css/'],
            sass: ['dist/css/sass/']
        },

        processhtml: {
            dist: {
                files: {
                    'dist/index.html': ['src/index.html']
                }
            }
        },

        htmlmin: {
            dist: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: {
                    'dist/index.html': 'dist/index.html'
                }
            }
        },

        sass: {
            dist: {
                files: [
                    {
                        expand: true,
                        cwd: 'src/css/sass',
                        src: ['**/*.scss'],
                        dest: 'src/css/css',
                        ext: '.css'
                    }
                ]
            }
        },
        
        concurrent: {
            dev: {
                tasks: [
                    'nodemon',
                    'watch'
                ],
                options: {
                    limit: 20,
                    logConcurrentOutput: true
                }
            }
        },
        
        nodemon: {
            dev: {
                script: 'server.js',
                options: {
                }
            }
        },
        
        watch: {
            server: {
                files: [
                    'src/css/sass/**/*.scss',
                    'src/js/**/*.js',
                    'src/index.html',
                    'src/templates/*.html'
                ],
                tasks: [
                    'jshint',
                    'csslint',
                    'sass',
                    'copy',
                    'requirejs',
                    'cssmin',
                    'clean',
                    'processhtml',
                    'htmlmin'
                ],
                options: {
                    livereload: true
                }
            }
        }
    });
    
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-csslint');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-processhtml');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-concurrent');
    grunt.loadNpmTasks('grunt-nodemon');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-sass');
    
    grunt.registerTask('default', [
            'jshint',
            'csslint',
            'sass',
            'copy',
            'requirejs',
            'cssmin',
            'clean',
            'processhtml', 
            'htmlmin',
            'concurrent'
        ]
    );
}
