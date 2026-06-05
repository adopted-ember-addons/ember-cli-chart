import Component from '@glimmer/component';
import { action } from '@ember/object';
import Chart from 'chart.js/auto';
import { modifier } from 'ember-modifier';

const chartModifier = modifier((element, [component]) => {
  if (!component.chart) {
    component.drawChart(element);
  } else {
    component.updateChart();
  }
});

export default class EmberChart extends Component {
  constructor() {
    super(...arguments);

    this.plugins = this.args.plugins || [];
  }

  @action
  drawChart(element) {
    let { data, type, options, plugins } = this.args;
    let chart = new Chart(element, {
      type,
      data,
      options,
      plugins,
    });

    this.chart = chart;
  }

  @action
  updateChart() {
    let { chart, animate } = this.chart;
    let { data, options } = this.args;

    if (chart) {
      chart.data = data;
      chart.options = options;
      if (animate) {
        chart.update();
      } else {
        chart.update(0);
      }

      if (this.customLegendElement) {
        this.customLegendElement.innerHTML = chart.generateLegend();
      }
    }
  }

  willDestroy() {
    super.willDestroy(...arguments);
    this.chart.destroy();
  }

  <template>
    <canvas width={{@width}} height={{@height}} {{chartModifier this}} />
  </template>
}
