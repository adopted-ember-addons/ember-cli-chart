import Ember from 'ember';
import {
  moduleForComponent,
  test
} from 'ember-qunit';

moduleForComponent('ember-chart');

// Test Data
var ChartTestData = Ember.Object.extend({
  pieValue1: 300,
  pieValue2: 50,
  pieValue3: 100,
  pieData: function(){
    return [
      {
        value: parseInt(this.get('pieValue1')),
        color:"#F7464A",
        highlight: "#FF5A5E",
        label: "Red"
      },
      {
        value: parseInt(this.get('pieValue2')),
        color: "#46BFBD",
        highlight: "#5AD3D1",
        label: "Green"
      },
      {
        value: parseInt(this.get('pieValue3')),
        color: "#FDB45C",
        highlight: "#FFC870",
        label: "Yellow"
      }
    ];
  }.property('pieValue1', 'pieValue2', 'pieValue3'),

  lineValue1: 65,
  lineValue2: 59,
  lineData: function(){
    return {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [
            {
                label: "My First dataset",
                fillColor: "rgba(220,220,220,0.2)",
                strokeColor: "rgba(220,220,220,1)",
                pointColor: "rgba(220,220,220,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(220,220,220,1)",
                data: [parseInt(this.get('lineValue1')), parseInt(this.get('lineValue2')), 80, 81, 56, 55, 40]
            },
            {
                label: "My Second dataset",
                fillColor: "rgba(151,187,205,0.2)",
                strokeColor: "rgba(151,187,205,1)",
                pointColor: "rgba(151,187,205,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(151,187,205,1)",
                data: [28, 48, 40, 19, 86, 27, 90]
            }
        ]
    };
  }.property('lineValue1', 'lineValue2')
});

var testData = ChartTestData.create();
// Test Data


test('it can be a pie chart', function(assert) {
  var component = this.subject({
    type: 'Pie',
    data: testData.get('pieData')
  });

  this.render();
  var chart = component.get('chart');

  assert.equal(chart.name, 'Pie');
  assert.equal(chart.segments.length, 3);
});

test('it can be a line chart', function(assert) {
  var component = this.subject({
    type: 'Line',
    data: testData.get('lineData')
  });

  this.render();
  var chart = component.get('chart');

  assert.equal(chart.name, 'Line');
  assert.equal(chart.datasets.length, 2);
});

test('it can be a bar chart', function(assert) {
  var component = this.subject({
    type: 'Bar',
    data: testData.get('lineData')
  });

  this.render();
  var chart = component.get('chart');

  assert.equal(chart.name, 'Bar');
  assert.equal(chart.datasets.length, 2);
});

test('it can be a Radar chart', function(assert) {
  var component = this.subject({
    type: 'Radar',
    data: testData.get('lineData')
  });

  this.render();
  var chart = component.get('chart');

  assert.equal(chart.name, 'Radar');
  assert.equal(chart.datasets.length, 2);
});

test('it can be a Polar Area chart', function(assert) {
  var component = this.subject({
    type: 'PolarArea',
    data: testData.get('pieData')
  });

  this.render();
  var chart = component.get('chart');

  assert.equal(chart.name, 'PolarArea');
  assert.equal(chart.segments.length, 3);
});

test('it should update pie charts dynamically', function(assert) {
  var component = this.subject({
    type: 'Pie',
    data: testData.get('pieData')
  });

  this.render();
  var chart = component.get('chart');
  assert.equal(chart.segments[0].value, 300);

  // Update Data
  testData.set('pieValue1', 600);
  component.set('data', testData.get('pieData'));

  chart = component.get('chart');
  assert.equal(chart.segments[0].value, 600);
});

test('it should update line charts dynamically', function(assert) {
  var component = this.subject({
    type: 'Line',
    data: testData.get('lineData')
  });

  this.render();
  var chart = component.get('chart');
  assert.equal(chart.datasets[0]['points'][0].value, 65);

  // Update Data
  testData.set('lineValue1', 105);
  component.set('data', testData.get('lineData'));

  chart = component.get('chart');
  assert.equal(chart.datasets[0]['points'][0].value, 105);
});
