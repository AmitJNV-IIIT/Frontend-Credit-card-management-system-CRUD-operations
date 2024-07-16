import React from "react";
import { Axis } from "@visx/axis";
import { scaleTime } from "@visx/scale";

const events = [
  {
    date: new Date("2013-04-01"),
    title: "Event"
  },
  {
    date: new Date("2016-10-01"),
    title: "Event"
  },
  {
    date: new Date("2018-06-01"),
    title: "Event"
  },
  {
    date: new Date("2022-01-01"),
    title: "Event"
  }
];

const width = 1000;
const height = 110;
const padding = { top: 20, left: 20, right: 20, bottom: 20 };

const Timeline = () => {
  const innerWidth = width - padding.left - padding.right;
  const innerHeight = height - padding.top - padding.bottom;

  const xScale = scaleTime({
    range: [padding.left, innerWidth + padding.left],
    domain: [new Date("2012-01-01T00:00:00"), new Date("2026-01-01T00:00:00")]
  });

  return (
    <>
      <svg width={width} height={height}>
        <Axis
          scale={xScale}
          orientation="bottom"
          top={padding.top + innerHeight}
        />
        <g>
          {events.map((event, i) => (
            <g key={i}>
              <rect
                x={xScale(event.date) - 50}
                y={30}
                width={100}
                height={50}
              />
              <rect height={10} y={80} width={1} x={xScale(event.date) - 0.5} />
            </g>
          ))}
        </g>
      </svg>
      {/* {events.map((event, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            top: padding.top,
            left: xScale(event.date) - 50,
            height: 50,
            width: 100,
            border: "1px solid black",
            display: "grid",
            placeItems: "center"
          }}
        >
          {event.title}
        </div>
      ))} */}
    </>
  );
};

export default Timeline;
