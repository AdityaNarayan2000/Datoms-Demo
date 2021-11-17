import React, { useState, useEffect } from "react";
import { Column } from "@ant-design/charts";

const HeatBar = () => {
  var data = [
    {
      name: "Past Week",
      Day: "Monday",
      Temperature: 18.9,
    },
    {
      name: "Past Week",
      Day: "Tuesday",
      Temperature: 28.8,
    },
    {
      name: "Past Week",
      Day: "Wednesday",
      Temperature: 39.3,
    },
    {
      name: "Past Week",
      Day: "Thursday",
      Temperature: 81.4,
    },
    {
      name: "Past Week",
      Day: "Friday",
      Temperature: 47,
    },
    {
      name: "Past Week",
      Day: "Saturday",
      Temperature: 20.3,
    },
    {
      name: "Past Week",
      Day: "Sunday",
      Temperature: 24,
    },
    {
      name: "This Week",
      Day: "Monday",
      Temperature: 12.4,
    },
    {
      name: "This Week",
      Day: "Tuesday",
      Temperature: 23.2,
    },
    {
      name: "This Week",
      Day: "Wednesday",
      Temperature: 34.5,
    },
    {
      name: "This Week",
      Day: "Thursday",
      Temperature: 99.7,
    },
    {
      name: "This Week",
      Day: "Friday",
      Temperature: 52.6,
    },
    {
      name: "This Week",
      Day: "Saturday",
      Temperature: 35.5,
    },
    {
      name: "This Week",
      Day: "Sunday",
      Temperature: 37.4,
    },
  ];

  var config = {
    data: data,
    isGroup: true,
    xField: "Day",
    yField: "Temperature",
    seriesField: "name",
    label: {
      position: "middle",
      layout: [
        { type: "interval-adjust-position" },
        { type: "interval-hide-overlap" },
        { type: "adjust-color" },
      ],
    },
    color: ["red", "blue"],
    columnStyle: {
      radius: [20, 20, 0, 0],
    },
  };
  return <Column {...config} />;
};

export default HeatBar;
