module.exports = function (grunt) {
  grunt.initConfig({
    jshint: {
      files: ['libs/**/*.js', 'modules/**/*.js']
    },

    watch: {
      files: ['libs/**/*.js', 'modules/**/*.js']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
};