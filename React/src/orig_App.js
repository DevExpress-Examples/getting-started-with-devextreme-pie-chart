import React, { useState } from 'react';

import 'devextreme/dist/css/dx.light.css';

import { PieChart, Series, Label, Connector, Tooltip } from 'devextreme-react/pie-chart';
import { billionaires } from './data.js';

const customizeText = (pointInfo) => {
  return pointInfo.value + " billionaires";
}

const contentTemplate = (data) => {
  return data.argumentText;
}

const onPointClick = (e) => {
  const point = e.target;
  if (point.isSelected()) {
    point.clearSelection();
  } else {
    point.select();
  }
}

function App() {
  return (
    <div id="container">
      <PieChart
        dataSource={billionaires}
        type="doughnut"
        title="Top-5 Countries by Number of Billionaires"
        onPointClick={onPointClick}
      >
        <Series 
          argumentField="country" 
          valueField="amount"
        >
          <Label 
            visible={true}
            position="columns"
            customizeText={customizeText}
          >
            <Connector visible={true}></Connector>
          </Label>
        </Series>
        <Tooltip
          enabled={true}
          contentTemplate={contentTemplate}
        >
        </Tooltip>
      </PieChart>
    </div>
  );
}

export default App;
