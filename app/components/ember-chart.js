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
    this.set('chart', chart);
  }.on('didInsertElement'),

  destroyChart: function(){
    this.get('chart').destroy();
  }.on('willDestroyElement'),

  updateChart: function(){
    this.destroyChart();
    this.renderChart();
  }.observes('data', 'options')
});