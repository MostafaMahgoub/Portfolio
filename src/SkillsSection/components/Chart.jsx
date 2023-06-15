import React, { useRef, useEffect } from 'react';
import { lightningChart, PointShape, Themes } from '@arction/lcjs';

function Chart({showChart}) {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      
      const chart = lightningChart().ChartXY({
        container: chartRef.current,
        theme: Themes.turquoiseHexagon,
      });

      
      chart
        .setTitle('Learning curve')
        .setPadding({ top: 20, right: 30, bottom: 20, left: 20 });

     
      chart.getDefaultAxisX().setInterval({ start: 2018, end: 2023 }).setTitle('Year');
      chart.getDefaultAxisY().setInterval({ start: 0, end: 200 }).setTitle('Rate of improvment');

      
      const pointSize = 10;
      const skillSeries = [
        { name: 'Javascript,HTML,CSS', data: [
          { x: 2020, y: 0 },
          { x: 2021, y: 50 },
          { x: 2022, y: 50 },
          { x: 2023, y: 150 },
        ]},
        { name: 'React,Sass', data: [
          { x: 2020, y: 0 },
          { x: 2021, y: 0 },
          { x: 2022, y: 50 },
          { x: 2023, y: 150 },
        ]},
        { name: 'Dart,Flutter,Firebase', data: [
          { x: 2020, y: 0 },
          { x: 2021, y: 20 },
          { x: 2022, y: 100 },
        ]},
        { name: 'Unity,PHP', data: [
          { x: 2020, y: 0 },
          { x: 2021, y: 50 },
        ]},
        { name: 'C++', data: [
          { x: 2018, y: 0 },
          { x: 2019, y: 50 },
          { x: 2020, y: 100 },
          { x: 2021, y: 150 },
        ]},
        { name: 'MySQL,MongoDB', data: [
          { x: 2019, y: 0 },
          { x: 2020, y: 50 },
          { x: 2021, y: 80 },
          { x: 2022, y: 150 },
          { x: 2023, y: 200 },
        ]},
        { name: 'Python', data: [
          { x: 2020, y: 0 },
          { x: 2021, y: 30 },
          { x: 2022, y: 50 },
          { x: 2023, y: 100 },
        ]},
        { name: 'ElectronJS,NodeJS,Bootstrap,Typescript', data: [
          { x: 2021, y: 0 },
          { x: 2022, y: 10 },
          { x: 2023, y: 200 },
        ]},
        { name: 'Git,GitHub', data: [
          { x: 2020, y: 0 },
          { x: 2021, y: 50 },
          { x: 2022, y: 80 },
          { x: 2023, y: 150 },
        ]},
      ];
      
      skillSeries.forEach((series, index) => {
        chart
          .addPointLineSeries({
            pointShape: PointShape.Triangle
          })
          .setName(series.name)
          .setPointSize(pointSize)
          .add(series.data);
      });

      
      chart.setAutoCursor((cursor) =>
        cursor.setResultTableAutoTextStyle(true).setTickMarkerXAutoTextStyle(true).setTickMarkerYAutoTextStyle(true),
      );

      
      const legendSkills = chart.addLegendBox().add(chart);
      legendSkills.setTitle('Skills');
      const handleLegendMouseEnter = () => {
        const currentMargin = legendSkills.getMargin();
        legendSkills.setMargin({ top: currentMargin.top, right: -30, bottom: currentMargin.bottom, left: currentMargin.left });
      };
      const handleLegendMouseLeave = () => {
       const currentMargin = legendSkills.getMargin();
        legendSkills.setMargin({ top: currentMargin.top, right: -240, bottom: currentMargin.bottom, left: currentMargin.left });
      };
      legendSkills.onMouseEnter(handleLegendMouseEnter);
      legendSkills.onMouseLeave(handleLegendMouseLeave);
      legendSkills.onTouchStart(handleLegendMouseEnter);
      legendSkills.onTouchMove(handleLegendMouseLeave);
      
      return () => {
        chart.dispose();
      };
    }
  }, [chartRef]);

  return <div ref={chartRef} className={`chart_Container ${
    showChart ? 'Chart-animation' : ''
  }`} />;
}

export default Chart;
