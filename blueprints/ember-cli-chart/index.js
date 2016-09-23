const RSVP = require('rsvp');

module.exports = {
  normalizeEntityName: function() {},

  afterInstall: function() {
    return RSVP.all([
      this.addPackageToProject('chart.js', '2.2.1'),
      this.addAddonToProject('ember-browserify')
    ]);
  }
};
