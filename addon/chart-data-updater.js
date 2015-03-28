import Ember from 'ember';

export default Ember.Object.extend({

  updateByType: function () {
    var data = this.get('data');

    if (data.datasets) {return this.updateLinearCharts();}
    if (Array.isArray(data)) {return this.updatePieCharts();}
  },

  updateLinearCharts: function () {
    var datasets = this.get('data').datasets;
    var chart = this.get('chart');

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

  updatePieCharts: function () {
    var data = this.get('data');
    var chart = this.get('chart');
    var needUpdate = false;

    data.forEach(function(segment, i) {
      if (typeof chart.segments[i] !== 'undefined') {
        segment.value = segment.value || 0;
        if (chart.segments[i].value !== segment.value) {
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
