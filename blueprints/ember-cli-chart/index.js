module.exports = {
  normalizeEntityName: function() {},

  afterInstall: function() {
    return this.addBowerPackageToProject('chartjs', '2.5.0');
  }
};
