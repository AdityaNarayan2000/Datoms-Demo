import React, { useState, useEffect } from "react";
import { Line } from "@ant-design/charts";

const PowerChart = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    asyncFetch();
  }, []);
  const asyncFetch = () => {
    fetch(
      "https://gw.alipayobjects.com/os/bmw-prod/1d565782-dde4-4bb6-8946-ea6a38ccf184.json"
    )
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log("fetch data failed", error);
      });
  };
  var config = {
    data: data,
    padding: "auto",
    xField: "Date",
    yField: "scales",
    annotations: [
      {
        type: "regionFilter",
        start: ["min", "median"],
        end: ["max", "0"],
        color: "#F4664A",
      },


      {
        type: "text",
        position: ["min", "median"],
        content: "",
        offsetY: -40,
        style: { textBaseline: "bottom" },
        padding: "20px",
      },
      {
        type: "line",
        start: ["min", "median"],
        end: ["max", "median"],
        style: {
          height: "50",
          stroke: "#F4664A",
          lineDash: [5, 2],
          padding: "20px",
        },
      },
    ],
  };
  return <Line {...config} />;
};

export default PowerChart;
