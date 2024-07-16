import {
  extent,
  scaleLinear,
  scaleLog,
  select,
  format,
  axisTop,
  axisBottom,
  axisLeft,
  axisRight,
  scaleOrdinal,
  scaleSqrt,
} from "d3";
import { useEffect, useRef } from "react";
import { data as rawData } from "./Data";

export const D3ScatterPlot = ({
  data = rawData,
  width = 800,
  height = 500,
  margin = { top: 30, left: 60, right: 40, bottom: 50 },
}) => {
  const ref = useRef(null);

  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;

  const x = (d) => d.gdpPerCap;
  const y = (d) => d.lifeExpectancy;
  const radius = (d) => d.population;
  const color = (d) => d.region;

  const createBarChart = () => {
    const node = ref.current;

    const xScale = scaleLog()
      .domain(extent(data, x))
      .range([margin.left, innerWidth + margin.left]);

    const yScale = scaleLinear()
      .domain(extent(data, y))
      .nice()
      .range([innerHeight + margin.top, margin.top]);

    const colorScale = scaleOrdinal()
      .domain(data.map(color))
      .range(["#ff8906", "#3da9fc", "#ef4565", "#7f5af0", "#2cb67d"]);

    const rScale = scaleSqrt()
      .range([3, 40])
      .domain(extent(data, radius));

    select(node).selectAll("circle").data(data).enter().append("circle");
    select(node).selectAll("circle").data(data).exit().remove();
    select(node).selectAll("g").enter().append("g");
    select(node).selectAll("g").exit().remove();

    select(node)
      .selectAll("circle")
      .data(data)
      .attr("cx", (d) => xScale(x(d)))
      .attr("cy", (d) => yScale(y(d)))
      .attr("r", (d) => rScale(radius(d)))
      .style("fill", (d) => colorScale(color(d)))
      .style("opacity", 0.8);

    select(node)
      .append("g")
      .attr("transform", `translate(0,${margin.top})`)
      .call(axisBottom(xScale).ticks(2).tickFormat(format("$~s")).tickSize(0));

    select(node)
      .append("g")
      .attr("transform", `translate(0,${innerHeight + margin.top})`)
      .call(axisBottom(xScale).ticks(2).tickFormat(format("$~s")).tickSize(0));

    select(node)
      .append("g")
      .attr("transform", `translate(${margin.left}, 0)`)
      .call(axisLeft(yScale));

    console.log(yScale.domain());
  };

  useEffect(() => {
    createBarChart();
  }, []);

  return <svg ref={ref} width={width} height={height} />;
};
