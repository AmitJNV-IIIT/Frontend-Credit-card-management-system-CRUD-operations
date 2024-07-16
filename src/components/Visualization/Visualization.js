import React from "react";
import RechartScatterPlot from "./RechartsScatterPlot";
import VisxScatterPlot from "./VisxScatterPlot";
import { D3ScatterPlot } from "./D3ScatterPlot";
import BarChart from "./BarChart";
import "./styles.css";
import CalendarWrapper from "./Calendar";
import Timeline from "./Timeline";

export default function App() {
  return (
    <>
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "1200px",
        width: "100%",
        position: "relative",
      }}
    >
      <h3>Scatter Plot</h3>
      <RechartScatterPlot />
      <h3>Weighted Scatter Plot</h3>
      <div style={{ marginBottom: "20px" }}>
        {/* Adjust the margin-bottom value as needed */}
        <D3ScatterPlot />
      </div>
      <h3>Timeline of Transaction & Volume</h3>
      <div style={{ marginBottom: "20px" }}>
        {/* Adjust the margin-bottom value as needed */}
        <Timeline />
      </div>
      {/* Add other components (VisxScatterPlot, BarChart, CalendarWrapper) as needed */}
    </div>
    
    </>
  );
}
