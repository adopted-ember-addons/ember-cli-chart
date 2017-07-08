/* eslint-env node */
'use strict';

module.exports = {
  name: 'ember-cli-chart',
  included: function(app, parentAddon) {
    this._super.included.apply(this, arguments);
    var target = (parentAddon || app);
    target.import('vendor/Chart.js');
  }
};
