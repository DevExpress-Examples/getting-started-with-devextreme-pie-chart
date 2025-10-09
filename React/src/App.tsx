import { useCallback } from 'react';
import './App.css';
import 'devextreme/dist/css/dx.material.blue.light.compact.css';
import PieChart, {
  Series,
  Label,
  Connector,
  Tooltip,
} from 'devextreme-react/pie-chart';
import type { PieChartTypes } from 'devextreme-react/pie-chart';
import type { Billionaire } from './types';

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

function App(): JSX.Element {
  const customizeText = useCallback(
    (pointInfo: any) => `${pointInfo.value} billionaires`,
    [],
  );

  const contentTemplate = useCallback(
    (data: any) => data.argumentText as string,
    [],
  );

  const onPointClick = useCallback((e: PieChartTypes.PointClickEvent) => {
    const point = e.target;
    if (point.isSelected()) {
      point.clearSelection();
    } else {
      point.select();
    }
  }, []);

  return (
    <div id="container">
      <PieChart
        dataSource={billionaires}
        type="doughnut"
        title="Top-5 Countries by Number of Billionaires"
        onPointClick={onPointClick}
      >
        <Series argumentField="country" valueField="amount">
          <Label
            visible={true}
            position="columns"
            customizeText={customizeText}
          >
            <Connector visible={true} />
          </Label>
        </Series>
        <Tooltip enabled={true} contentTemplate={contentTemplate} />
      </PieChart>
    </div>
  );
}

export default App;
