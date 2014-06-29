'use strict';

module.exports = function(grunt) {
  grunt.initConfig({
    mongobackup: {
      options: {
        host : 'localhost',
        port: '27017',
        db : 'fullstack-dev', 
        dump:{
          out : './dump',
        },    
        restore:{
          path : './dump/fullstack-dev',          
          drop : true
        }
      }  
    }
  });

  grunt.loadTasks('tasks');
};
