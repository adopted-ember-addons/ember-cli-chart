# Ember Chart

[![CI](https://github.com/adopted-ember-addons/ember-cli-chart/actions/workflows/ci.yml/badge.svg?event=push)](https://github.com/adopted-ember-addons/ember-cli-chart/actions/workflows/ci.yml)
[![Ember Observer Score](https://emberobserver.com/badges/ember-cli-chart.svg)](https://emberobserver.com/addons/ember-cli-chart)

This Ember CLI addon is a simple wrapper for [ChartJS](http://www.chartjs.org/) (v4.2).

## Compatibility

- Ember.js v5.8 or above
- Embroider or ember-auto-import v2

## Installation

```
ember install ember-cli-chart
```

## Usage 

In your handlebars template just do:

```hbs
<EmberChart
  @type={{CHARTTYPE}}
  @data={{CHARTDATA}}
  @options={{CHARTOPTIONS}}
  @width={{CHARTWIDTH}}
  @height={{CHARTHEIGHT}}
  @plugins={{CHARTPLUGINS}}
  @customLegendElement={{CUSTOMLEGENDELEMENT}}
/>
```

- CHARTTYPE: String; one of the following -- `line`, `bar`, `radar`, `polarArea`, `pie` or `doughnut`.
- CHARTDATA: Array; refer to the ChartJS documentation
- CHARTOPTIONS: Object; refer to the ChartJS documentation. This is optional.
- CHARTWIDTH: Number; pixel width of the canvas element. Only applies if the chart is NOT responsive.
- CHARTHEIGHT: Number; pixel height of the canvas element. Only applies if the chart is NOT responsive.
- CHARTPLUGINS: Array; refer to ChartJS documentaion. This is optional.
- CUSTOMLEGENDELEMENT: HTMLElement; A custom element to put a custom legend in, when using `legendCallback`. This is optional.

#### Example

```
<EmberChart @type="pie" @data={{model.chartData}} @width={{200}} @height={{200}} />
```

#### More Resources

- [Screencast on creating bar charts with ember-cli-chart](https://www.emberscreencasts.com/posts/46-bar-charts-with-ember-cli-chart)

## Contributing

See the [Contributing](CONTRIBUTING.md) guide for details.

## License

This project is licensed under the [MIT License](LICENSE.md).
