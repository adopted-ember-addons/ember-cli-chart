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

	
	//If new data has less columns
    if (chart.datasets.length > datasets.length) {
      var temp = Array();
      chart.datasets.forEach(function(dataset, i) {
		  //copy over only that amount
        if (datasets[i]) {
          temp.push(chart.datasets[i]);
        }
      });
	  //and place into the chart data
      chart.datasets = temp;
    }

	//If new data has more colmns
    if (datasets.length > chart.datasets.length) {
      var temp = Array();
      datasets.forEach(function(dataset, i) {
		  //Copy all those new columns
          temp.push(datasets[i]);
      });
	  //Place in the chart
      chart.datasets = temp;
    }



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
	//Return the redraw flag
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
  }
});
