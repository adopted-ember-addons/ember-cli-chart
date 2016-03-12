# Ember Chart

[![Build Status](https://travis-ci.org/aomran/ember-cli-chart.svg)](https://travis-ci.org/aomran/ember-cli-chart)

This is an Ember CLI addon for adding a [ChartJS](http://www.chartjs.org/) component. This addon is tested on Ember-CLI v1.13.15 and uses the `ember-try` addon to test against Ember v1.13.12 and the latest release.

### Installation

```
$ ember install ember-cli-chart
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

#### More Resources

* [Screencast on creating bar charts with ember-cli-chart](https://www.emberscreencasts.com/posts/46-bar-charts-with-ember-cli-chart)
