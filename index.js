'use strict';

module.exports = {
  name: 'Ember CLI Chart',

  included: function included(app) {
    this.app = app;
    this._super.included(app);

    app.import('vendor/chartjs/Chart.js');
  }
};