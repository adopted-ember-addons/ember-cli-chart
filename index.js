/* eslint-env node */
'use strict';

module.exports = {
  name: 'ember-cli-chart',
  included: function included(app) {
   this._super.included(app);
   app.import(app.project.nodeModulesPath + '/chart.js/dist/Chart.js');
  }
};
