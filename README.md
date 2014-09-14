# Ember Chart

This is an Ember-CLI addon for adding a [ChartJS](http://www.chartjs.org/) component. 

### Installation

```
$ npm install --save-dev ember-cli-chat
```

### Usage

In your handlebars template just do:

```
{{ember-chart type=CHARTTYPE data=CHARTDATA options=CHARTOPTIONS width=CHARTWIDTH height=CHARTHEIGHT}}
```

* CHARTTYPE: String; one of the following -- `Line`, `Bar`, `Radar`, `PolarArea`, `Pie` or `Doughnut`.
* CHARTDATA: Array; refer to the ChartJS documentation
* CHARTOPTIONS: Object; refer to the ChartJS documentation
* CHARTWIDTH: Number, pixel width of the canvas element
* CHARTHEIGHT: Number, pixel height of the canvas element