import React, { useState, useEffect } from "react";
import { Area } from "@ant-design/charts";

const ResponseTime = () => {
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
    xField: "Date",
    yField: "scales",
    xAxis: {
      range: [0, 2],
      tickCount: 1,
    },
    areaStyle: function areaStyle() {
      return { fill: "l(270) 0:#ffffff00 0.5:#ffffff80 1:#ffffff" };
    },
    color: "#ffffff",
    height: 30,
    width: 10,
  };
  return <Area {...config} />;
};

export default ResponseTime;
