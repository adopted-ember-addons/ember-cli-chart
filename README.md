# Ember Chart

This is an Ember CLI addon for adding a [ChartJS](http://www.chartjs.org/) component. 

### Installation

```
$ npm install --save-dev ember-cli-chart
```

### Usage

In your handlebars template just do:

```
{{ember-chart type=CHARTTYPE data=CHARTDATA options=CHARTOPTIONS width=CHARTWIDTH height=CHARTHEIGHT legend=LEGEND}}
```

* CHARTTYPE: String; one of the following -- `Line`, `Bar`, `Radar`, `PolarArea`, `Pie` or `Doughnut`.
* CHARTDATA: Array; refer to the ChartJS documentation
* CHARTOPTIONS: Object; refer to the ChartJS documentation. This is optional.
* CHARTWIDTH: Number; pixel width of the canvas element
* CHARTHEIGHT: Number; pixel height of the canvas element
* LEGEND: Boolean, true means add a legend. This is optional.

#### Example

```
{{ember-chart type='Pie' data=model.chartData width=200 height=200}}
```

#### Example with Legend

```
{{ember-chart type='Line' data=model.chartData width=200 height=200 legend=true}}
```