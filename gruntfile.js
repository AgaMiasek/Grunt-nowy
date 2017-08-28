module.exports = function(grunt) {
  // Project configuration.
  grunt.initConfig({
	sass: {
      options: {
        sourceMap: true
      },
      dist: {
        files: {
          'css/style.css': 'sass/style.sass'
        }
      }
    },
	imagemin: {
    dynamic: {
        files: [{
            expand: true,
            cwd: 'images/',
            src: ['*.{png,jpg,gif,jpeg}'],
            dest: 'dist/'
        }]
    }
},
watch: {
    scripts: {
        files: ['sass/*.sass'],
        tasks: ['sass'],
        options: {
            spawn: false,
        }
    }
},

  });
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  

  // Default task(s).
  grunt.registerTask('default', ["sass", "imagemin","watch"]);
};