/* eslint-env node */
'use strict';

module.exports = {
  name: 'ember-cli-chart',
  included: function() {
    this._super.included.apply(this, arguments);

    var app;

    // If the addon has the _findHost() method (in ember-cli >= 2.7.0), we'll just
    // use that.
    if (typeof this._findHost === 'function') {
      app = this._findHost();
    } else {
      // Otherwise, we'll use this implementation borrowed from the _findHost()
      // method in ember-cli.
      var current = this;
      do {
        app = current.app || app;
      } while (current.parent.parent && (current = current.parent));
    }
    
    app.import(app.bowerDirectory + '/chartjs/dist/Chart.js');
  }
};
