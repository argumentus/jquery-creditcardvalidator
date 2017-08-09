module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        coffee: {
            compile: {
                options: {
                    "join": true
                },
                files: { "jquery.creditCardValidator.js": ["jquery.creditCardValidator.coffee", "trie.coffee", "range.coffee"] }
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-coffee');
    grunt.registerTask('compile', ['coffee']);
    return null;
};