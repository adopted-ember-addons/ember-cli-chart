/* eslint-env node */
'use strict';

module.exports = {
  name: 'ember-cli-chart',
  included: function(app, parentAddon) {
    this._super.included.apply(this, arguments);
    
    var target = (parentAddon || app);
    if (target.app) {
      target = target.app;
    }
    
    var bowerDir = target.bowerDirectory;
    app.import(bowerDir + '/chartjs/dist/Chart.js');
  }
};
