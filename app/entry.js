'use strict';

require('./base.scss');

const angular = require('angular');
angular.module('demoApp', [])
.component('app', {
  template: require('./app.html'),
  controller: ['$log', function($log){
    this.$onInit = () => {



    };
  }],
});
