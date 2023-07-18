import React from "react";
import { ResponsiveLine } from "@nivo/line";

function HeadcountChart({ data }) {
  if (!data) return null;

  const organizedData = {};
  
  data.headcount.forEach(({ month, count }) => {
    const [year, monthNumber] = month.split('-');
    if (!organizedData[year]) {
      organizedData[year] = [];
    }
    organizedData[year].push({ month: monthNumber, count });
  });
  
  // ordena os meses
  Object.values(organizedData).forEach((element) => {
    element.sort((a, b) => parseInt(a.month) - parseInt(b.month));
  });
  // Ordena os anos
  const sortedData = Object.entries(organizedData).sort((a, b) => parseInt(a[0]) - parseInt(b[0]));

  // Cria um novo objeto com os anos ordenados
  const orderedData = sortedData.reduce((acc, [year, data]) => {
    acc[year] = data;
    return acc;
  }, {});

  const monthOrder = ["03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "01", "02"];
  
  const chartData = Object.entries(orderedData).map(([year, dataPoints]) => ({
    id: year,
    data: dataPoints
      .map(({ month, count }) => ({
        x: monthOrder.indexOf(month) + 1,
        y: count,
      }))
      .sort((a, b) => a.x - b.x), // Ordenar os dados pelo índice
  }));

  return (
    <div style={{ height: '400px' }}>
      <ResponsiveLine
        data={chartData}
        margin={{ top: 50, right: 110, bottom: 50, left: 100 }}
        xScale={{
          type: 'point',
          useUTC: false,
          precision: 'month',
        }}
        yScale={{ type: "linear", min: 0, max: 40 }}
        curve="monotoneX"
        axisTop={null}
        axisRight={null}
        axisBottom={{
          orient: "bottom",
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'Mês',
          legendPosition: 'middle',
          legendOffset: 36,
        }}
        axisLeft={{
          orient: "left",
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'Contratações',
          legendPosition: 'middle',
          legendOffset: -40,
        }}
        enablePoints={true}
        pointSize={10}
        pointColor="#ffffff"
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor', modifiers: [] }}
        enableGridX={true}
        enableGridY={true}
        useMesh={true}
        // colors={{ scheme: 'purpleRed_green' }}
        colors={{ scheme: 'category10' }}
        lineWidth={2}
        enableArea={true}
        legends={[
          {
            anchor: 'bottom-right',
            direction: 'column',
            justify: false,
            translateX: 100,
            translateY: 0,
            itemsSpacing: 0,
            itemDirection: 'left-to-right',
            itemWidth: 80,
            itemHeight: 20,
            itemOpacity: 0.75,
            symbolSize: 16,
            symbolShape: 'circle',
            symbolBorderColor: 'rgba(0, 0, 0, .5)',
            effects: [
              {
                on: 'hover',
                style: {
                  itemBackground: 'rgba(0, 0, 0, .03)',
                  itemOpacity: 1
                }
              }
            ]
          }
        ]}
      />
    </div>
  )
}

export default HeadcountChart


  // RETORNANDO MESES DE 03 A 02
  /*   const chartData = Object.entries(orderedData).map(([year, dataPoints]) => ({
    id: year,
    data: dataPoints.map(({ month, count }) => ({
      x: month,
      y: count,
    })),
  })); */

  // RETORNANDO UM ANO NA SEQUÊNCIA DO OUTRO SEM SOBREPOR
  /* const chartData = Object.entries(orderedData).map(([year, dataPoints]) => {
    const formattedDataPoints = dataPoints.map(({ month, count }) => ({
      x: `${year}-${month}`,
      y: count,
    }));

    return {
      id: year,
      data: formattedDataPoints.sort((a, b) => monthOrder.indexOf(a.x.split('-')[1]) - monthOrder.indexOf(b.x.split('-')[1])),
    };
  }); */