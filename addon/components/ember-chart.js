/* global Chart */
import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'canvas',
  attributeBindings: ['width', 'height'],

  didInsertElement() {
    this._super(...arguments);
    let context = this.get('element');
    let data    = this.get('data');
    let type    = this.get('type');
    let options = this.get('options');
		
    let chart = new Chart(context, {
      type: type,
      data: data,
      options: options
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
			chart.config.data = data;
			chart.config.options = options;
			if (animate) {
				chart.update();
			} else {
				chart.update(0);
			}
		}
  }
});
