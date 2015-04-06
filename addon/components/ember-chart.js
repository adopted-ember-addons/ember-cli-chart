import Ember from 'ember';
import ChartDataUpdater from 'ember-cli-chart/chart-data-updater';
/* global Chart */

export default Ember.Component.extend({
  tagName: 'canvas',
  attributeBindings: ['width', 'height'],

  didInsertElement: function(){
    var context = this.get('element').getContext('2d');
    var data = this.get('data');
    var type = Ember.String.classify(this.get('type'));
    var options = Ember.merge({}, this.get('options'));

    var chart = new Chart(context)[type](data, options);

    if (this.get('legend')) {
      var legend = chart.generateLegend();
      this.$().parent().append(legend);
    }

    this.set('chart', chart);
  },

  willDestroyElement: function(){
    if (this.get('legend')) {
      this.$().parent().children('[class$=legend]').remove();
    }

    this.get('chart').destroy();
  },

  updateChart: Ember.observer('data', 'data.[]', 'options', function(){
    var chart = this.get('chart');
    var data = this.get('data');
    var needUpdate = ChartDataUpdater.create({
      data: data,
      chart: chart
    }).updateByType();

    if (needUpdate) { chart.update(); }
  })
});
