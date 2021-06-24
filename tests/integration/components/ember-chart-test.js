import EmberObject, { computed } from "@ember/object";
import { module, test } from "qunit";
import { setupRenderingTest } from "ember-qunit";
import { render } from "@ember/test-helpers";
import hbs from "htmlbars-inline-precompile";

module("EmberChartComponent", (hooks) => {
  setupRenderingTest(hooks);

  // Test Data
  let ChartTestData = EmberObject.extend({
    init() {
      this._super(...arguments);
      this.pieValue1 = 300;
      this.pieValue2 = 50;
      this.pieValue3 = 100;
      this.labelValue1 = "January";
      this.lineValue1 = 65;
      this.lineValue2 = 59;
    },
    pieData: computed("pieValue1", "pieValue2", "pieValue3", function() {
      return {
        labels: ["Red", "Green", "Yellow"],
        datasets: [
          {
            data: [
              parseInt(this.pieValue1),
              parseInt(this.pieValue2),
              parseInt(this.pieValue3)
            ],
            backgroundColor: ["#F7464A", "#46BFBD", "#FDB45C"],
            hoverBackgroundColor: ["#FF5A5E", "#5AD3D1", "#FFC870"]
          }
        ]
      };
    }),

    pieData2: computed("pieValue1", "pieValue2", "pieValue3", function() {
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

    lineData: computed("lineValue1", "lineValue2", "labelValue1", function() {
      return {
        labels: [
          this.labelValue1,
          "February",
          "March",
          "April",
          "May",
          "June",
          "July"
        ],
        datasets: [
          {
            label: "My First dataset",
            fillColor: "rgba(220,220,220,0.2)",
            strokeColor: "rgba(220,220,220,1)",
            pointColor: "rgba(220,220,220,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: [
              parseInt(this.lineValue1),
              parseInt(this.lineValue2),
              80,
              81,
              56,
              55,
              40
            ]
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

    lineData2: computed("lineValue1", "lineValue2", function() {
      return {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July"
        ],
        datasets: [
          {
            label: "My First dataset",
            fillColor: "rgba(220,220,220,0.2)",
            strokeColor: "rgba(220,220,220,1)",
            pointColor: "rgba(220,220,220,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: [
              parseInt(this.lineValue1),
              parseInt(this.lineValue2),
              80,
              81,
              56,
              55,
              40
            ]
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

    lineData3: computed("lineValue1", "lineValue2", "labelValue1", function() {
      return {
        labels: [
          this.labelValue1,
          "February",
          "March",
          "April",
          "May",
          "June",
          "July"
        ],
        datasets: [
          {
            label: "My First dataset",
            fillColor: "rgba(220,220,220,0.2)",
            strokeColor: "rgba(220,220,220,1)",
            pointColor: "rgba(220,220,220,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: [parseInt(this.lineValue1), parseInt(this.lineValue2), 80, 81]
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

    barData: computed(function() {
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
    })
  });

  test("it can be a pie chart", async function(assert) {
    this.set("testData", ChartTestData.create().pieData);

    await render(hbs`<EmberChart @type="pie" @data={{this.testData}} />`);

    assert.dom("canvas").exists();
  });

  test("it can be a line chart", async function(assert) {
    this.set("testData", ChartTestData.create().lineData);
    await render(hbs`<EmberChart @type="line" @data={{this.testData}} />`);

    assert.dom("canvas").exists();
  });

  test("it can be a bar chart", async function(assert) {
    this.set("testData", ChartTestData.create().lineData);
    await render(hbs`<EmberChart @type="bar" @data={{this.testData}} />`);

    assert.dom("canvas").exists();
  });

  test("it can be a radar chart", async function(assert) {
    this.set("testData", ChartTestData.create().lineData);
    await render(hbs`<EmberChart @type="radar" @data={{this.testData}} />`);

    assert.dom("canvas").exists();
  });

  test("it can be a polar area chart", async function(assert) {
    this.set("testData", ChartTestData.create().pieData);
    await render(hbs`<EmberChart @type="polarArea" @data={{this.testData}} />`);

    assert.dom("canvas").exists();
  });
});
