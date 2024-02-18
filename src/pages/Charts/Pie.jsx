import React from 'react';
import { pieChartData } from '../../data/dummy';
import { ChartsHeader, Pie as PieChart } from '../../components';
 
// Podium component code goes here
const Podium = ({ winners }) => {
  const podiumOrder = [8, 6, 4, 2, 0, 1, 3, 5, 7, 9]
    .map(position => winners[position])
    .filter(Boolean);
 
  return (
    <div
      style={{
        display: 'grid',
        gridAutoFlow: 'column dense',
        gap: '.5rem',
        marginTop: '2rem',
        justifyContent: 'center',
        justifyItems: 'center',
        alignContent: 'flex-end',
        alignItems: 'flex-end',
        borderBottom: '1px solid #e5e7eb',
        height: 250,
      }}
    >
      {podiumOrder.map(winner => (
        <div key={winner.id} style={{ display: 'flex', flexDirection: 'column', placeContent: 'center' }}>
          <div
            style={{ alignSelf: 'center', marginBottom: '.25rem' }}
          >
            {/* Remove the image and display the winner's name instead */}
            <span style={{ fontWeight: 'bold' }}>{winner.name}</span>
          </div>
          <div
            style={{
              width: '4rem',
              placeContent: 'center',
              display: 'flex',
              borderTopLeftRadius: '.5rem',
              borderTopRightRadius: '.5rem',
              borderColor: 'rgba(190,24,93,1)',
              backgroundColor: 'rgba(219,39,119,1)',
              marginBottom: -1,
              opacity: 0.1 + (podiumOrder.length - winner.position) / podiumOrder.length,
              height: 200 * ((podiumOrder.length - winner.position) / podiumOrder.length),
            }}
          >
            <span style={{ color: 'white', alignSelf: 'flex-end' }}>{winner.position }</span>
          </div>
        </div>
      ))}
    </div>
  );
};
 
const dummyWinners = [
  { id: 8, position: 1, name: 'BILLER KUNDAN' },
  { id: 6, position: 2, name: 'Allahbaksh' },
  { id: 4, position: 3, name: 'Biller Aftab' },
  { id: 2, position: 4, name: 'NARESH RATHOD' },
  { id: 0, position: 5, name: 'Autoaccept' },
 
  // Add more dummy data as needed
];
 
const Pie = () => (
  <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl flex flex-col justify-center">
    <ChartsHeader category="Pie" title="Serving Analysis" />
    <div className="w-full">
      <PieChart id="chart-pie" data={pieChartData} legendVisiblity height="full" />
      {/* Render Podium component with winners data */}
      <Podium winners={dummyWinners} />
    </div>
  </div>
);
 
export default Pie;