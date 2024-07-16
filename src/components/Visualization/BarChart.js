import { Axis, AxisLeft } from "@visx/axis";
import { Group } from "@visx/group";
import { LegendOrdinal } from "@visx/legend";
import { ParentSize } from "@visx/responsive";
import { scaleBand, scaleLog, scaleOrdinal } from "@visx/scale";
import { extent, format } from "d3";
import { data as rawData } from "./Data";

const BarChart = ({
  width = 300,
  height = 500,
  margin = { top: 30, left: 100, right: 40, bottom: 50 },
}) => {
  const data = rawData.sort((a, b) => b.gdpPerCap - a.gdpPerCap);

  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;

  const x = (d) => d.gdpPerCap;
  const y = (d) => d.country;
  const color = (d) => d.region;

  const xScale = scaleLog({
    range: [margin.left, innerWidth + margin.left],
    domain: extent(data, x),
    nice: true,
  });

  const yScale = scaleBand({
    range: [innerHeight + margin.top, margin.top],
    domain: data.map(y),
  });

  const colorScale = scaleOrdinal({
    range: ["#ff8906", "#3da9fc", "#ef4565", "#7f5af0", "#2cb67d"],
    domain: [...new Set(data.map(color))],
  });

  return (
    <>
      <LegendOrdinal
        scale={colorScale}
        direction="row"
        shape="rect"
        style={{
          display: "flex",
          justifyContent: "space-around",
        }}
      />
      <svg width={width} height={height}>
        <AxisLeft
          scale={yScale}
          left={margin.left}
          label="Country"
          numTicks={data.length}
        />
        <Axis
          label="GDP per cap"
          scale={xScale}
          orientation="bottom"
          top={innerHeight + margin.top}
          tickFormat={format("$~s")}
          numTicks={4}
        />
        <Group>
          {data.map((point, i) => {
            return (
              <rect
                key={i}
                orientation="horizontal"
                x={margin.left}
                y={yScale(y(point))}
                width={xScale(x(point))}
                height={innerHeight / data.length}
                onClick={() => alert(JSON.stringify(point))}
                fill={colorScale(color(point))}
              />
            );
          })}
        </Group>
      </svg>
    </>
  );
};

const BarChartWrapper = () => (
  <ParentSize debounceTime={0}>
    {({ width, height }) => <BarChart width={width} height={height} />}
  </ParentSize>
);

export default BarChartWrapper;
