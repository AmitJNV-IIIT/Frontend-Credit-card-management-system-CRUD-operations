import React from "react";
import { Scatter, ScatterChart, ResponsiveContainer, XAxis, YAxis, Cell } from "recharts";
import { data } from "./Data";

const colors = ["#ff8906", "#3da9fc", "#ef4565", "#7f5af0", "#2cb67d"];

const RechartScatterPlot = () => {
  return (
    <ResponsiveContainer width="50%" height="50%">
      <ScatterChart
        width={400}
        height={400}
        margin={{
          top: 20,
          right: 20,
          bottom: 20,
          left: 20
        }}
      >
        <XAxis
          type="number"
          dataKey="gdpPerCap"
          name="gdpPerCap"
          scale="log"
          domain={["dataMin", "dataMax"]}
        />
        <YAxis
          type="number"
          dataKey="lifeExpectancy"
          name="lifeExpectancy"
          domain={["dataMin", "dataMax"]}
        />
        <Scatter data={data} fill="#8884d8" radius={15}>
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} />
          ))}
        </Scatter>
      </ScatterChart>
    </ResponsiveContainer>
  );
};

export default RechartScatterPlot;
