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

    data.forEach(function(segment) {
      var currentSegment = chart.segments.findBy('label', segment.label);
      if(chart.segments.findBy('label', segment.label)) {
        segment.value = segment.value || 0;
        if (currentSegment.value !== segment.value) {
          currentSegment.value = segment.value;
          needUpdate = true;
        }
      }
      else {
        // given data segment does not yet exist; add them
        chart.addData(segment, i, true);
        needUpdate = true;
      }
    });
    
  //remove segments no longer used
	if(chart.segments.length !== data.length) {
		var dataSegmentsLabels = data.mapBy('label');
		
		for(var i = 0; i < chart.segments.length; i++) {
		  var currentSegment = chart.segments[i];
		  if(!dataSegmentsLabels.contains(currentSegment.label)) {
		    chart.segments.removeObject(currentSegment);
			needUpdate = true;
			i--;
		  }
		}
	}
    
    return needUpdate;
  }
});
