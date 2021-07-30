import Component from '@glimmer/component';
import { action } from '@ember/object';

import Chart from 'chart.js/auto';

import 'chartjs-adapter-luxon';
import 'chartjs-chart-financial/src/index';

export default class EmberChart extends Component {
  constructor() {
    super(...arguments);
    this.plugins = this.plugins || [];
  }

  @action
  drawChart(element) {
    let { data, type, options, plugins } = this.args;
    let chart = new Chart(element, {
      type, data, options, plugins
    });

    this.chart = chart;
  }

  @action
  updateChart() {
    let { data, options } = this.args;

    if (this.chart) {
      this.chart.data = data;
      this.chart.options = options;
      
      this.chart.update();

      if (this.customLegendElement) {
        this.customLegendElement.innerHTML = this.chart.generateLegend();
      }
    }
  }

  willDestroy() {
    this.chart.destroy();
  }
}
