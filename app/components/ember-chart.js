import Ember from 'ember';
/* global Chart */

export default Ember.Component.extend({
	tagName: 'canvas',
	attributeBindings: ['width', 'height'],

	didInsertElement: function(){
    this.renderChart();
	},
	renderChart: function(){
		var context = this.get('element').getContext('2d');
    var data = this.get('data');
    var type = this.get('type').capitalize();
    var options = Ember.merge({}, this.get('options'));

    new Chart(context)[type](data, options);
	}.observes('data')
});