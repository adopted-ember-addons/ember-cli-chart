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
    var labels = this.get('data').labels;
    var chart = this.get('chart');
    var self = this;

    if (chart.datasets.length !== datasets.length) {
      return this.set('redraw', true);
    } else if (typeof chart.datasets[0].bars !== 'undefined') {
      for (var i=0; i<chart.datasets.length; i++) {
        if (chart.datasets[i].bars.length !== datasets[i].data.length) {
          return this.set('redraw', true);
        }
      }
    } else if (typeof chart.datasets[0].points !== 'undefined') {
      for (var j=0; j<chart.datasets.length; j++) {
        if (chart.datasets[j].points.length !== datasets[j].data.length) {
          return this.set('redraw', true);
        }
      }
    }

    // Update Labels
    chart.scale.xLabels = labels;

    // Update dataset
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

    return this.get('redraw');
  },

  updatePieCharts: function () {
    var data = Ember.A(this.get('data'));
    var chart = this.get('chart');
    var chartSegments = Ember.A(chart.segments);

    chart.segments.forEach(function(segment, i) {
      var updatedSegment = data.findBy('label', segment.label);
      if (updatedSegment) {
        // Same segment exists in new data
        chart.segments[i].value = updatedSegment.value || 0;
      } else {
        // Segment does not exist anymore in new data
        chart.removeData(i);
      }
    });

    data.forEach(function(segment) {
      var currentSegment = chartSegments.findBy('label', segment.label);
      if (!currentSegment) {
        chart.addData(segment);
      }
    });

    return this.get('redraw');
  }

});
