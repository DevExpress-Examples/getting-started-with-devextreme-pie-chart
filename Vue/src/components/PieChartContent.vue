<script setup lang="ts">
import {
  DxPieChart,
  DxSeries,
  DxLabel,
  DxConnector,
  DxTooltip,
} from 'devextreme-vue/pie-chart';
import type { DxPieChartTypes } from 'devextreme-vue/pie-chart';
import type { Billionaire } from '../types';

const billionaires: Billionaire[] = [
  {
    country: 'China',
    amount: 1002,
  },
  {
    country: 'United States',
    amount: 716,
  },
  {
    country: 'India',
    amount: 215,
  },
  {
    country: 'United Kingdom',
    amount: 150,
  },
  {
    country: 'Germany',
    amount: 145,
  },
];

const customizeText = (pointInfo: any): string => {
  return `${pointInfo.value} billionaires`;
};

const contentTemplate = (data: any): string => {
  return data.argumentText;
};

const onPointClick = (e: DxPieChartTypes.PointClickEvent): void => {
  const point = e.target;
  if (point.isSelected()) {
    point.clearSelection();
  } else {
    point.select();
  }
};
</script>

<template>
  <div id="container">
    <DxPieChart
      :data-source="billionaires"
      type="doughnut"
      title="Top-5 Countries by Number of Billionaires"
      @point-click="onPointClick"
    >
      <DxSeries
        argument-field="country"
        value-field="amount"
      >
        <DxLabel
          :visible="true"
          position="columns"
          :customize-text="customizeText"
        >
          <DxConnector :visible="true"/>
        </DxLabel>
      </DxSeries>
      <DxTooltip
        :enabled="true"
        :content-template="contentTemplate"
      />
    </DxPieChart>
  </div>
</template>

<style scoped>
#container {
  width: 600px;
}
</style>
