'use strict';
/*globals module, require*/

var path = require('path');
var fs   = require('fs');

function EmberCliChart(project) {
  this.project = project;
  this.name    = 'Ember CLI Chart';
}

function unwatchedTree(dir) {
  return {
    read:    function() { return dir; },
    cleanup: function() { }
  };
}

EmberCliChart.prototype.treeFor = function treeFor(name) {
  var treePath = path.join('node_modules', 'ember-cli-chart', name);
  return (fs.existsSync(treePath)) ? unwatchedTree(treePath) : null;
};

EmberCliChart.prototype.included = function included(app) {
  this.app = app;
  this.app.import('vendor/chartjs/Chart.js');
};

module.exports = EmberCliChart;