import { tracked } from '@glimmer/tracking';
import EmberChart from '#src/components/ember-chart';

class DemoState {
  @tracked pieValue1 = 300;
  @tracked pieValue2 = 50;
  @tracked pieValue3 = 100;

  get pieData() {
    return {
      labels: ['Red', 'Green', 'Yellow'],
      datasets: [
        {
          data: [this.pieValue1, this.pieValue2, this.pieValue3],
          backgroundColor: ['#F7464A', '#46BFBD', '#FDB45C'],
        },
      ],
    };
  }

  get lineData() {
    return {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'My First dataset',
          data: [65, 59, 80, 81, 56, 55, 40],
        },
        {
          label: 'My Second dataset',
          data: [28, 48, 40, 19, 86, 27, 90],
        },
      ],
    };
  }

  get barData() {
    return {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'My First dataset',
          data: [65, 59, 80, 81, 56, 55, 40],
        },
        {
          label: 'My Second dataset',
          data: [28, 48, 40, 19, 86, 27, 90],
        },
      ],
    };
  }
}

const state = new DemoState();

<template>
  <h2>Testing the ChartJS Component</h2>

  <div>
    <h3>Line Chart</h3>
    <EmberChart
      @type="line"
      @data={{state.lineData}}
      @width={{600}}
      @height={{200}}
    />
  </div>

  <div>
    <h3>Pie Chart</h3>
    <EmberChart
      @type="pie"
      @data={{state.pieData}}
      @width={{200}}
      @height={{200}}
    />
  </div>

  <div>
    <h3>Bar Chart</h3>
    <EmberChart
      @type="bar"
      @data={{state.barData}}
      @width={{600}}
      @height={{200}}
    />
  </div>
</template>
