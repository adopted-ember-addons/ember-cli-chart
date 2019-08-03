/* global Chart */
import Component from '@ember/component';

export default Component.extend({
  tagName: 'canvas',
  attributeBindings: ['width', 'height'],
  plugins: [],

  didInsertElement() {
    this._super(...arguments);
    let context = this.get('element');
    let data    = this.get('data');
    let type    = this.get('type');
    let options = this.get('options');
    let plugins = this.get('plugins');

    let chart = new Chart(context, {
      type: type,
      data: data,
      options: options,
      plugins: plugins
    });
    this.set('chart', chart);
  },

  willDestroyElement() {
    this._super(...arguments);
    this.get('chart').destroy();
  },

  didUpdateAttrs() {
    this._super(...arguments);
    this.updateChart();
  },

  updateChart() {
    let chart   = this.get('chart');
    let data    = this.get('data');
    let options = this.get('options');
    let animate = this.get('animate');
		
		if (chart) {
			chart.data = data;
			chart.options = options;
			if (animate) {
				chart.update();
			} else {
				chart.update(0);
			}
		}
  }
});
