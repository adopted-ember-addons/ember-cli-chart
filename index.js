'use strict';

const FastbootTransform = require('fastboot-transform');

module.exports = {
  name: require('./package').name,
  options: {
  nodeAssets: {
    'chart.js': {
      vendor: {
          srcDir: 'dist',
          include: ['Chart.js'],
          processTree(input) {
            return FastbootTransform(input);
          }
        }
      }
    }
  },
  included() {
    this._super.included.apply(this, arguments);
    this._ensureThisImport();

    this.import('vendor/chart.js/Chart.js');
    this.import('vendor/dashkit-extension.js');
  },
  _ensureThisImport() {
    if (!this.import) {
      this._findHost = function findHostShim() {
        let current = this;
        let app;

        do {
          app = current.app || app;
        } while (current.parent.parent && (current = current.parent));
        return app;
      };
      this.import = function importShim(asset, options) {
        let app = this._findHost();
        app.import(asset, options);
      };
    }
  }
};
