import Ember from 'ember';
import ChartDataUpdater from 'ember-cli-chart/chart-data-updater';
/* global Chart */

export default Ember.Component.extend({
  tagName: 'canvas',
  attributeBindings: ['width', 'height'],

  lineLegendTemp: "<ul class=\"<%=name.toLowerCase()%>-legend\" style=\"list-style-type: none;\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].strokeColor%>;    width: 8px;height: 8px;display: inline-block;border-radius: 10px;border: solid;border-width: 2px;margin: 5px 5px 0 0;\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>",
  pieLegendTemp: "<ul class=\"<%=name.toLowerCase()%>-legend\" style=\"list-style-type: none;\"><% for (var i=0; i<segments.length; i++){%><li><span style=\"background-color:<%=segments[i].fillColor%>;  width: 8px;height: 8px;display: inline-block;border-radius: 10px;border: solid;border-width: 2px;margin: 5px 5px 0 0;\"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>",

  /**
   * This is where ember-chart will look to find the options to pass to the Chart.js chart.
   * Subclasses may change this path to create a layer of indirection for the options, while
   * preserving the same component API. This is useful if you want to extend this component to
   * provide component-specific defaults in your own app.
   */
  optionsPath: 'options',

  didInsertElement: function(){
    var context = this.get('element').getContext('2d');
    var data = this.get('data');
    var type = Ember.String.classify(this.get('type'));
    var template;
    switch (type) {
      case "Line":
        template = this.get('lineLegendTemp');
        break;
      case "Pie":
        template = this.get('pieLegendTemp');
        break;
      case "Doughnut":
        template = this.get('pieLegendTemp');
        break;
      default:
        template = this.get('lineLegendTemp');
        break;
    }
    var options = Ember.merge({
    legendTemplate : template
    }, this.get(this.get('optionsPath')));
    var redraw = this.get('redraw');
    var chart = new Chart(context)[type](data, options);

    if (this.get('legend')) {
      var legend = chart.generateLegend();
      this.$().wrap("<div class='chart-parent'></div>");
      this.$().parent().append(legend);
    }
    this.set('redraw', redraw);
    this.set('chart', chart);
    this.addObserver('data', this, this.updateChart);
    this.addObserver('data.[]', this, this.updateChart);
    this.addObserver(this.get('optionsPath'), this, this.updateChart);
  },

  willDestroyElement: function(){
    if (this.get('legend')) {
      this.$().parent().children('[class$=legend]').remove();
    }

    this.get('chart').destroy();
    this.removeObserver('data', this, this.updateChart);
    this.removeObserver('data.[]', this, this.updateChart);
    this.removeObserver(this.get('optionsPath'), this, this.updateChart);
  },

  updateChart: function(){
    var chart = this.get('chart');
    var data = this.get('data');
    var redraw = ChartDataUpdater.create({
      data: data,
      chart: chart
    }).updateByType();

    if (this.get('redraw') || redraw) {
      this.willDestroyElement();
      this.didInsertElement();
    } else {
      chart.update();
    }

    if (this.get('legend')) {
      this.$().parent().children('[class$=legend]').remove();
      var legend = chart.generateLegend();
      this.$().parent().append(legend);
    }
  }

});
