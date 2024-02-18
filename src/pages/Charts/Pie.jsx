import React from 'react';

import { pieChartData } from '../../data/dummy';
import { ChartsHeader, Pie as PieChart } from '../../components';

const Pie = () => (
  <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl flex flex-col justify-center">
    <ChartsHeader category="Pie" title="Serving Analysis" />
    <div className="w-full ">
      <PieChart id="chart-pie" data={pieChartData} legendVisiblity height="full" />

    </div>
  </div>
);

export default Pie;
