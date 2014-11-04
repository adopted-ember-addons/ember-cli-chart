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
    this.get('chart').destroy();
  }.on('willDestroyElement'),

  updateChart: function(){
    try {
    	var self = this;
    	this.get('data.datasets').forEach(function(dataset, i) {
    		dataset.data.forEach(function(item, j) {
    			self.get('chart').datasets[i].points[j].value = item;
    		});
    	});
    	this.get('chart').update();
    } catch(error) {
    	Ember.warn('Dataset is not equal in structure as previous values. Rebuilding chart...');
    	this.destroyChart();
    	this.renderChart();
    }
  }.observes('data', 'options')
});
