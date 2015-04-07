import Ember from 'ember';

export default Ember.Object.extend({
  redraw: false,
  updateByType: function () {
    var data = this.get('data');

    if (data.datasets) {return this.updateLinearCharts();}
    if (Array.isArray(data)) {return this.updatePieCharts();}
    return this.get('redraw');
  },

  updateLinearCharts: function () {
    var datasets = this.get('data').datasets;
    var chart = this.get('chart');
    var self = this;

    datasets.forEach(function(dataset, i) {
      var chartDataset = chart.datasets[i];

      try {
        dataset.data.forEach(function(item, j) {
          item = item || 0;
          if(typeof chartDataset.bars !== 'undefined') {
            chartDataset.bars[j].value = item;
          } else {
            chartDataset.points[j].value = item;
          }
        });
      } catch (e) {
        if (e instanceof TypeError) { self.set('redraw', true); }
        else { console.error(e); }
      }
    });
  },

  updatePieCharts: function () {
    var data = this.get('data');
    var chart = this.get('chart');

    data.forEach(function(segment, i) {
      if (typeof chart.segments[i] !== 'undefined') {
        chart.segments[i].value = segment.value || 0;
      } else {
        chart.addData(segment, i, true);
      }
    });
  }
});
