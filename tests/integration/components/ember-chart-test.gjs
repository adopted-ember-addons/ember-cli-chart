import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import Component from '@glimmer/component';
import EmberChart from '#src/components/ember-chart';

const lineData = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      data: [65, 59, 80, 81, 56, 55, 40],
    },
  ],
};

module('EmberChartComponent', function (hooks) {
  setupRenderingTest(hooks);

  test('component class exists', async function (assert) {
    assert.ok(EmberChart, 'EmberChart component exists');
    assert.ok(
      EmberChart.prototype instanceof Component,
      'extends GlimmerComponent',
    );
  });

  test('renders a canvas element', async function (assert) {
    await render(
      <template><EmberChart @type="line" @data={{lineData}} /></template>,
    );

    assert.dom('canvas').exists('canvas element is rendered');
  });
});
