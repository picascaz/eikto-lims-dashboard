import { memo } from 'react';
import ApexChart from 'react-apexcharts';

import type { Props as ApexChartProps } from 'react-apexcharts';

function Chart(props: ApexChartProps) {
  return <ApexChart {...props} />;
}

export default memo(Chart);
