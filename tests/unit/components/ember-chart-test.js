<<<<<<< HEAD
import {
  moduleForComponent,
  test
} from 'ember-qunit';
import EmberObject, { computed } from '@ember/object';

moduleForComponent('ember-chart', 'EmberChartComponent', {
  unit: true
});

// Test Data
let ChartTestData = EmberObject.extend({
  pieValue1: 300,
  pieValue2: 50,
  pieValue3: 100,
  pieData: computed('pieValue1', 'pieValue2', 'pieValue3', function(){
    return {
      labels: ['Red', "Green", "Yellow"],
      datasets: [
        {
          data: [
            parseInt(this.get('pieValue1')),
            parseInt(this.get('pieValue2')),
            parseInt(this.get('pieValue3'))
          ],
          backgroundColor: ["#F7464A", "#46BFBD", "#FDB45C"],
          hoverBackgroundColor: ["#FF5A5E", "#5AD3D1", "#FFC870"]
        }
      ]
    };
  }),

  pieData2: computed('pieValue1', 'pieValue2', 'pieValue3', function(){
    return {
      labels: ["Black", "Red", "Yellow"],
      datasets: [
        {
          data: [20, 310, 101],
          backgroundColor: ["#F7464A", "#46BFBD", "#FDB45C"],
          hoverBackgroundColor: ["#FF5A5E", "#5AD3D1", "#FFC870"]
        }
      ]
    };
  }),

  labelValue1: "January",
  lineValue1: 65,
  lineValue2: 59,
  lineData: computed('lineValue1', 'lineValue2', 'labelValue1', function(){
    return {
        labels: [this.get('labelValue1'), "February", "March", "April", "May", "June", "July"],
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
  }),
  lineData2: computed(function(){
    return {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
=======
import EmberObject, { computed } from '@ember/object';
import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('EmberChartComponent', function(hooks) {
  setupTest(hooks);

  // Test Data
  let ChartTestData = EmberObject.extend({
    pieValue1: 300,
    pieValue2: 50,
    pieValue3: 100,
    pieData: computed('pieValue1', 'pieValue2', 'pieValue3', function(){
      return {
        labels: ['Red', "Green", "Yellow"],
>>>>>>> run ember-cli-update --run-codemods
        datasets: [
          {
            data: [
              parseInt(this.get('pieValue1')),
              parseInt(this.get('pieValue2')),
              parseInt(this.get('pieValue3'))
            ],
            backgroundColor: ["#F7464A", "#46BFBD", "#FDB45C"],
            hoverBackgroundColor: ["#FF5A5E", "#5AD3D1", "#FFC870"]
          }
        ]
<<<<<<< HEAD
    };
  }),
  lineData3: computed('lineValue1', 'lineValue2', 'labelValue1', function(){
    return {
        labels: [this.get('labelValue1'), "February", "March", "April", "May", "June", "July"],
        datasets: [
            {
                label: "My First dataset",
                fillColor: "rgba(220,220,220,0.2)",
                strokeColor: "rgba(220,220,220,1)",
                pointColor: "rgba(220,220,220,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(220,220,220,1)",
                data: [parseInt(this.get('lineValue1')), parseInt(this.get('lineValue2')), 80, 81]
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
  }),
  barData: computed(function(){
    return {
        labels: ["January", "February", "March"],
=======
      };
    }),

    pieData2: computed('pieValue1', 'pieValue2', 'pieValue3', function(){
      return {
        labels: ["Black", "Red", "Yellow"],
>>>>>>> run ember-cli-update --run-codemods
        datasets: [
          {
            data: [20, 310, 101],
            backgroundColor: ["#F7464A", "#46BFBD", "#FDB45C"],
            hoverBackgroundColor: ["#FF5A5E", "#5AD3D1", "#FFC870"]
          }
        ]
      };
    }),

    labelValue1: "January",
    lineValue1: 65,
    lineValue2: 59,
    lineData: computed('lineValue1', 'lineValue2', 'labelValue1', function(){
      return {
          labels: [this.get('labelValue1'), "February", "March", "April", "May", "June", "July"],
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
    }),
    lineData2: computed(function(){
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
              },
              {
                  label: "My Third dataset",
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
    }),
    lineData3: computed('lineValue1', 'lineValue2', 'labelValue1', function(){
      return {
          labels: [this.get('labelValue1'), "February", "March", "April", "May", "June", "July"],
          datasets: [
              {
                  label: "My First dataset",
                  fillColor: "rgba(220,220,220,0.2)",
                  strokeColor: "rgba(220,220,220,1)",
                  pointColor: "rgba(220,220,220,1)",
                  pointStrokeColor: "#fff",
                  pointHighlightFill: "#fff",
                  pointHighlightStroke: "rgba(220,220,220,1)",
                  data: [parseInt(this.get('lineValue1')), parseInt(this.get('lineValue2')), 80, 81]
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
    }),
    barData: computed(function(){
      return {
          labels: ["January", "February", "March"],
          datasets: [
              {
                  label: "My First dataset",
                  fillColor: "rgba(220,220,220,0.2)",
                  strokeColor: "rgba(220,220,220,1)",
                  pointColor: "rgba(220,220,220,1)",
                  pointStrokeColor: "#fff",
                  pointHighlightFill: "#fff",
                  pointHighlightStroke: "rgba(220,220,220,1)",
                  data: [55, 41, 80]
              },
              {
                  label: "My Second dataset",
                  fillColor: "rgba(151,187,205,0.2)",
                  strokeColor: "rgba(151,187,205,1)",
                  pointColor: "rgba(151,187,205,1)",
                  pointStrokeColor: "#fff",
                  pointHighlightFill: "#fff",
                  pointHighlightStroke: "rgba(151,187,205,1)",
                  data: [28, 48, 40]
              }
          ]
      };
    }),
  });

  let testData = ChartTestData.create();
  // Test Data


  test('it can be a pie chart', function(assert) {
    let component = this.owner.factoryFor('component:ember-chart').create({
      type: 'pie',
      data: testData.get('pieData')
    });

    this.render();
    let chart = component.get('chart');
    assert.equal(chart.config.type, 'pie');
    assert.equal(chart.data.datasets[0].data.length, 3);
  });

  test('it can be a line chart', function(assert) {
    let component = this.owner.factoryFor('component:ember-chart').create({
      type: 'line',
      data: testData.get('lineData')
    });

    this.render();
    let chart = component.get('chart');

    assert.equal(chart.config.type, 'line');
    assert.equal(chart.data.datasets.length, 2);
  });

  test('it can be a bar chart', function(assert) {
    let component = this.owner.factoryFor('component:ember-chart').create({
      type: 'bar',
      data: testData.get('lineData')
    });

    this.render();
    let chart = component.get('chart');

    assert.equal(chart.config.type, 'bar');
    assert.equal(chart.data.datasets.length, 2);
  });

  test('it can be a Radar chart', function(assert) {
    let component = this.owner.factoryFor('component:ember-chart').create({
      type: 'radar',
      data: testData.get('lineData')
    });

    this.render();
    let chart = component.get('chart');

    assert.equal(chart.config.type, 'radar');
    assert.equal(chart.data.datasets.length, 2);
  });

  test('it can be a Polar Area chart', function(assert) {
    let component = this.owner.factoryFor('component:ember-chart').create({
      type: 'polarArea',
      data: testData.get('pieData')
    });

    this.render();
    let chart = component.get('chart');

    assert.equal(chart.config.type, 'polarArea');
    assert.equal(chart.data.datasets[0].data.length, 3);
  });

  test('it should update pie charts dynamically', function(assert) {
    assert.expect(2);
    let component = this.owner.factoryFor('component:ember-chart').create({
      type: 'pie',
      data: testData.get('pieData')
    });

<<<<<<< HEAD
  // Update Data
  testData.set('pieValue1', 600);
  component.set('data', testData.get('pieData'));
  component.didUpdateAttrs();
=======
    this.render();
    let chart = component.get('chart');
    assert.equal(chart.data.datasets[0].data[0], 300);
>>>>>>> run ember-cli-update --run-codemods

    // Update Data
    testData.set('pieValue1', 600);
    component.set('data', testData.get('pieData'));
      component.didUpdateAttrs();

<<<<<<< HEAD
test('it should update charts dynamically', function(assert) {
  assert.expect(3);
  let component = this.subject({
    type: 'line',
    data: testData.get('lineData')
  });

  this.render();
  let chart = component.get('chart');
  assert.equal(chart.data.datasets[0].data[0], 65);

  // Update Data
  testData.set('lineValue1', 105);
  component.set('data', testData.get('lineData'));
  component.didUpdateAttrs();

  chart = component.get('chart');
  assert.equal(chart.data.datasets[0].data[0], 105);
=======
    chart = component.get('chart');
    assert.equal(chart.data.datasets[0].data[0], 600);
  });

  test('it should update charts dynamically', function(assert) {
    assert.expect(3);
    let component = this.owner.factoryFor('component:ember-chart').create({
      type: 'line',
      data: testData.get('lineData')
      });

      this.render();
    let chart = component.get('chart');
    assert.equal(chart.data.datasets[0].data[0], 65);
>>>>>>> run ember-cli-update --run-codemods

    // Update Data
    testData.set('lineValue1', 105);
    component.set('data', testData.get('lineData'));
      component.didUpdateAttrs();
      
    chart = component.get('chart');
    assert.equal(chart.data.datasets[0].data[0], 105);

<<<<<<< HEAD
  // Update Labels
  testData.set('labelValue1', 'December');
  component.set('data', testData.get('lineData'));
  component.didUpdateAttrs();
=======
>>>>>>> run ember-cli-update --run-codemods

    // Update Labels
    testData.set('labelValue1', 'December');
    component.set('data', testData.get('lineData'));
      component.didUpdateAttrs();

    chart = component.get('chart');
    assert.equal(chart.data.labels[0], 'December');
  });
});
