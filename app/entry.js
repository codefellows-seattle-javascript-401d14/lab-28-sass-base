'use strict';

require('./css/base.scss');

const angular = require('angular');
angular.module('app', [])
.component('app', {
  template: require('./app.html'),
  controller: ['$log', function($log){
    this.$onInit = () => {



    };
  }],
});
