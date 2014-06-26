// Configuring Grunt tasks:
// http://gruntjs.com/configuring-tasks

module.exports = function (grunt) {

    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),

      // Tasks

      // grunt-contrib-sass
      // requires you to have Ruby and Sass but is more stable
      sass: {
        dist: {
          options: {
            style: 'compressed',
            loadPath: 'scss/*.scss',
            sourcemap: true,
            quiet: true,
          },
          files: { // Dictionary of files
            'css/main.css': 'scss/elmer.scss', // 'destination': 'source'
            'template/public/main.css' : 'scss/elmer.scss'
          },
        },
      },

      // grunt-kss
      // generates a living styleguide
      kss: {
        options: {
          includeType: 'sass',
          includePath: 'scss',
          template: 'template'
        },
        dist: {
          files: {
            'scss': ['/styleguide']
          }
        }
      },

      connect: {
        server: {
          options: {
            port: 9000,
            base: ['styleguide','scss'],
            livereload: true,
            open: true,
          }
        }
      },

      watch: {

        html: {
          files: [
            '*.html',
          ],
          options: {
            livereload: true,
          },
        },

        sass: {
          files: [
            'scss/*.scss',
          ],
          options: {
            livereload: true,
          },
          tasks: ['sass', 'kss'],
        },

        css: {
          files: [
            'css/*.css',
          ],

          options: {
            livereload: true,
          },
        },
      },
  });

  grunt.loadNpmTasks('grunt-kss');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');

  grunt.registerTask('default', ['connect','watch', 'sass', 'kss']);
};
