import { Axis, AxisLeft } from "@visx/axis";
import { localPoint } from "@visx/event";
import { GridColumns, GridRows } from "@visx/grid";
import { Group } from "@visx/group";
import { ParentSize } from "@visx/responsive";
import { scaleLinear, scaleTime } from "@visx/scale";
import { useState } from "react";

const events = [
  {
    start: new Date("2022-02-21T19:30:00"),
    end: new Date("2022-02-21T21:00:00"),
  },
  {
    start: new Date("2022-02-21T16:30:00"),
    end: new Date("2022-02-21T17:00:00"),
  },
  {
    start: new Date("2022-02-22T12:30:00"),
    end: new Date("2022-02-22T15:00:00"),
  },
  {
    start: new Date("2022-02-23T05:00:00"),
    end: new Date("2022-02-23T08:00:00"),
  },
  {
    start: new Date("2022-02-23T23:00:00"),
    end: new Date("2022-02-23T23:59:00"),
  },
  {
    start: new Date("2022-02-24T10:55:00"),
    end: new Date("2022-02-24T13:00:00"),
  },
  {
    start: new Date("2022-02-25T14:00:00"),
    end: new Date("2022-02-25T18:00:00"),
  },
];

const timeToSeconds = (hms) => {
  const [hours, minutes, seconds] = hms.split(":");
  const totalSeconds =
    Number(hours) * 60 * 60 + Number(minutes) * 60 + Number(seconds);
  return totalSeconds;
};

function sec2time(timeInSeconds) {
  var pad = function (num, size) {
      return ("000" + num).slice(size * -1);
    },
    time = parseFloat(timeInSeconds).toFixed(3),
    hours = Math.floor(time / 60 / 60),
    minutes = Math.floor(time / 60) % 60;

  return pad(hours, 2) + ":" + pad(minutes, 2);
}

const Calendar = ({
  width = 200,
  height = 125,
  margin = { top: 30, left: 60, right: 40, bottom: 50 },
}) => {
  const [drawEvent, setDrawEvent] = useState({ x: 0, y: 0 });

  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;

  const xScale = scaleTime({
    range: [margin.left, innerWidth + margin.left],
    domain: [new Date("2022-02-21T00:00:00"), new Date("2022-02-25T23:59:00")],
  });

  const yScale = scaleLinear({
    range: [innerHeight + margin.top, margin.top],
    domain: [0, 86000],
    reverse: true,
  });

  return (
    <svg
      width={width}
      height={height}
      onMouseUp={(e) => {
        const point = localPoint(e);
        if (!point) return;
        const { x, y } = point;
        const date = xScale.invert(x);
        const snappedDate = new Date(date).setHours(0, 0, 0, 0);
        const x2 = xScale(snappedDate);
        setDrawEvent({ x: x2, y });
      }}
    >
      <AxisLeft
        scale={yScale}
        left={margin.left}
        numTicks={23}
        tickFormat={(d) => sec2time(d)}
        hideAxisLine
        hideTicks
        tickValues={new Array(25).fill(0).map((x, i) => 3600 * i)}
      />
      <Axis
        scale={xScale}
        orientation="top"
        top={margin.top}
        numTicks={7}
        hideTicks
      />
      <GridRows
        left={margin.left}
        height={innerHeight}
        width={innerWidth}
        scale={yScale}
        tickValues={new Array(25).fill(0).map((x, i) => 3600 * i)}
      />
      <GridColumns
        top={margin.top}
        scale={xScale}
        height={innerHeight + 3}
        numTicks={5}
      />
      <Group>
        {events.map((event, i) => {
          const date = new Date(event.start).setHours(0, 0, 0, 0);
          const startTime = timeToSeconds(
            event.start.toTimeString().split(" ")[0]
          );
          const endTime = timeToSeconds(event.end.toTimeString().split(" ")[0]);

          return (
            <rect
              key={i}
              x={xScale(date)}
              y={yScale(startTime)}
              width={innerWidth / 5}
              height={yScale(endTime) - yScale(startTime)}
            />
          );
        })}
        {drawEvent && (
          <rect
            x={drawEvent.x}
            y={drawEvent.y}
            width={innerWidth / 5}
            height={50}
            fill="black"
          />
        )}
      </Group>
    </svg>
  );
};

const CalendarWrapper = () => (
  <ParentSize debounceTime={0}>
    {({ width, height }) => <Calendar width={width} height={height} />}
  </ParentSize>
);

export default CalendarWrapper;
