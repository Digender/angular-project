module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    // uglify: {
    //   options: {
    //     banner: '/*Done All @Author Digender Mahara*/ \n'
    //   },
    //   build: {
    //     src: 'src/*.js',
    //     dest: 'dest/*.js'
    //   }
    // }

    uglify: {
      all: {
        files: [{
          expand: true,
          src: ['*.js'],
          dest: 'dest/',
          ext: '.min.js',
        }],
      },
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Default task(s).
  grunt.registerTask('default', ['uglify']);

};