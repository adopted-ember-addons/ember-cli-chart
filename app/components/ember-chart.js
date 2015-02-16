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
      var needUpdate = false;
      // Line, Bar and Radar charts
      if (data.datasets) {
        data.datasets.forEach(function(dataset, i) {
          dataset.data.forEach(function(item, j) {
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
        needUpdate = true;
      }
      else {
        // Polar, Pie and Doughnut charts use an array as their data source
        if (Array.isArray(data)) {
          data.forEach(function(segment, i) {
            if (typeof chart.segments[i] !== 'undefined') {
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
        }
      }

      // only update if the data has changed
      if (needUpdate) {
        chart.update();
      }
    } catch(error) {
      Ember.warn('Dataset is not equal in structure as previous values. Rebuilding chart...');
      this.destroyChart();
      this.renderChart();
    }
  }.observes('data', 'data.[]', 'options')
});
