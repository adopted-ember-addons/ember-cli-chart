/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-chart',

  included: function included(app) {
    this.app = app;
    this._super.included(app);

    app.import('vendor/chartjs/Chart.js');
  }
};
