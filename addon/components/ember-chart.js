/* global Chart */
import Component from "@ember/component";

export default Component.extend({
  tagName: "canvas",
  attributeBindings: ["width", "height"],

  init() {
    this._super(...arguments);
    console.log(this.options);
    this.plugins = this.plugins || [];
  },

  didInsertElement() {
    this._super(...arguments);

    let context = this.element;
    let data = this.data;
    let type = this.type;
    let options = this.options;
    let plugins = this.plugins;

    let chart = new Chart(context, {
      type: type,
      data: data,
      options: options,
      plugins: plugins
    });

    this.set("chart", chart);
  },

  willDestroyElement() {
    this._super(...arguments);
    this.chart.destroy();
  },

  didUpdateAttrs() {
    this._super(...arguments);
    this.updateChart();
  },

  updateChart() {
    let chart = this.chart;
    let data = this.data;
    let options = this.options;
    let animate = this.animate;

    if (chart) {
      chart.data = data;
      chart.options = options;
      if (animate) {
        chart.update();
      } else {
        chart.update(0);
      }

      if (options.legendCallback && this.customLegendElement) {
        this.customLegendElement.innerHTML = chart.generateLegend();
      }
    }
  }
});
