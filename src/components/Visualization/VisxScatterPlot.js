import React from "react";
import { extent, format } from "d3";
import { motion } from "framer-motion";
import { scaleLog, scaleLinear, scaleOrdinal, scaleSqrt } from "@visx/scale";
import { Axis, AxisLeft } from "@visx/axis";
import { GridColumns } from "@visx/grid";
import { Group } from "@visx/group";
import { ParentSize } from "@visx/responsive";
import { LegendOrdinal } from "@visx/legend";
import { data as rawData } from "./Data";

const VisxScatterPlot = ({
  width = 800,
  height = 500,
  margin = { top: 30, left: 60, right: 40, bottom: 50 }
}) => {
  const data = rawData.sort((a, b) => b.population - a.population);

  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;

  const x = (d) => d.gdpPerCap;
  const y = (d) => d.lifeExpectancy;
  const radius = (d) => d.population;
  const color = (d) => d.region;

  const xScale = scaleLog({
    range: [margin.left, innerWidth + margin.left],
    // @ts-ignore
    domain: extent(data, x)
  });

  const yScale = scaleLinear({
    range: [innerHeight + margin.top, margin.top],
    // @ts-ignore
    domain: extent(data, y),
    nice: true
  });

  const colorScale = scaleOrdinal({
    range: ["#ff8906", "#3da9fc", "#ef4565", "#7f5af0", "#2cb67d"],
    // @ts-ignore
    domain: [...new Set(data.map(color))]
  });

  const rScale = scaleSqrt({
    range: [3, 40],
    // @ts-ignore
    domain: extent(data, radius)
  });

  return (
    <>
      <LegendOrdinal
        scale={colorScale}
        direction="row"
        shape="circle"
        style={{
          display: "flex",
          justifyContent: "space-around"
        }}
      />
      <svg width={width} height={height}>
        <AxisLeft scale={yScale} left={margin.left} label="Life expectancy" />
        <Axis
          label="GDP per cap"
          scale={xScale}
          orientation="bottom"
          top={innerHeight + margin.top}
          tickFormat={format("$~s")}
          numTicks={2}
          hideTicks
        />
        <Axis
          scale={xScale}
          orientation="top"
          stroke="transparant"
          top={margin.top}
          tickFormat={format("$~s")}
          numTicks={2}
          hideTicks
        />

        <GridColumns
          top={margin.top}
          scale={xScale}
          height={innerHeight}
          strokeOpacity={0.8}
          pointerEvents="none"
          numTicks={2}
        />
        <Group>
          {data.map((point, i) => (
            <motion.circle
              initial={{ r: 0 }}
              animate={{ r: rScale(radius(point)), transition: { delay: 0.5 } }}
              key={i}
              cx={xScale(x(point))}
              cy={yScale(y(point))}
              r={rScale(radius(point))}
              fill={colorScale(color(point))}
              fillOpacity={0.8}
            />
          ))}
        </Group>
      </svg>
    </>
  );
};

const ScatterPlotWrapper = () => (
  <ParentSize debounceTime={0}>
    {({ width, height }) => (
      <VisxScatterPlot width={width} height={height} />
    )}
  </ParentSize>
);

export default ScatterPlotWrapper;
