import Ember from 'ember';
/* global Chart */

export default Ember.Component.extend({
  tagName: 'canvas',
  attributeBindings: ['width', 'height'],

  renderChart: function(){
    var context = this.get('element').getContext('2d');
    var data = this.get('data');
    var type = this.get('type').classify();
    var options = Ember.merge({}, this.get('options'));

    var chart = new Chart(context)[type](data, options);

    if (this.get('legend')) {
      var legend = chart.generateLegend();
      this.$().parent().append(legend);
    };

    this.set('chart', chart);
  }.on('didInsertElement'),

  destroyChart: function(){
    if (this.get('legend')) {
      this.$().parent().children('[class$=legend]').remove();
    };

    this.get('chart').destroy();
  }.on('willDestroyElement'),

  updateChart: function(){
    try {
      var chart = this.get('chart');
      var data = this.get('data');
      var needUpdate = this.updateChartBasedOnType(data, chart);

      if (needUpdate) {
        chart.update();
      }
    } catch(error) {
      Ember.warn('Dataset is not equal in structure as previous values. Rebuilding chart...');
      console.error(error);
      this.destroyChart();
      this.renderChart();
    }
  }.observes('data', 'data.[]', 'options'),

  updateChartBasedOnType: function (data, chart) {
    if (data.datasets) {return this.updateLinearCharts(data.datasets, chart)};
    if (Array.isArray(data)) {return this.updatePieCharts(data, chart)};
  },

  updateLinearCharts: function (datasets, chart) {
    datasets.forEach(function(dataset, i) {
      dataset.data.forEach(function(item, j) {
        item = item || 0;
        if (typeof chart.datasets[i] === 'undefined') {
          chart.segments[j].value = item;
        } else {
          var dataSet = chart.datasets[i];

          if(typeof dataSet.bars !== 'undefined') {
            chart.datasets[i].bars[j].value = item;
          } else {
            chart.datasets[i].points[j].value = item;
          }
        }
      });
    });
    return true;
  },

  updatePieCharts: function (data, chart) {
    var needUpdate = false;
    data.forEach(function(segment, i) {
      if (typeof chart.segments[i] !== 'undefined') {
        segment.value = segment.value || 0
        if (chart.segments[i].value != segment.value) {
          chart.segments[i].value = segment.value;
          needUpdate = true;
        }
      }
      else {
        // there are now more segments than the chart knows about; add them
        chart.addData(segment, i, true);
        needUpdate = true;
      }
    });
    return needUpdate;
  }
});
