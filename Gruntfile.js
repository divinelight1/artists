// tasks
module.exports = function(grunt){

  // grunt initialization
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
  });

  // Load Grunt plugins
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-postcss');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // register grunt tasks
  grunt.registerTask('default', [watch]);

}
