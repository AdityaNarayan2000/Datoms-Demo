import React from "react";
import { Progress } from "antd";
// <li id="list1">
//     <a href="#">Bulb Number</a>
// </li>
const data = [
        {
          title: "Bulb 1",
          value: 30,
        },
        {
          title: "Bulb 2",
          value: 50,
        },
        {
          title: "Bulb 3",
          value: 80,
        },
        {
          title: "Bulb 4",
          value: 45,
        },
        {
          title: "Bulb 5",
          value: 20,
        },
        {
          title: "Bulb 6",
          value: 99,
        },
        {
          title: "Bulb 7",
          value: 50,
        },
        {
          title: "Bulb 8",
          value: 80,
        },
        {
          title: "Bulb 9",
          value: 45,
        },
        {
          title: "Bulb 10",
          value: 20,
        },
        {
          title: "Bulb 11",
          value: 99,
        },
        {
          title: "Bulb 1",
          value: 30,
        },
        {
          title: "Bulb 2",
          value: 50,
        },
        {
          title: "Bulb 3",
          value: 80,
        },
        {
          title: "Bulb 4",
          value: 45,
        },
        {
          title: "Bulb 5",
          value: 20,
        },
        {
          title: "Bulb 6",
          value: 99,
        },
        {
          title: "Bulb 7",
          value: 50,
        },
        {
          title: "Bulb 8",
          value: 80,
        },
        {
          title: "Bulb 9",
          value: 45,
        },
        {
          title: "Bulb 10",
          value: 20,
        },
        {
          title: "Bulb 11",
          value: 99,
        },
      ];

const BulbData = () => {
  const list = data.map((bulb) => {
    return (
      <li id={bulb.title}>
        <a href="#">{bulb.title}</a>
        <div style={{ width: 170, float: "right", marginRight: "7%" }}>
          <Progress
            percent={bulb.value}
            size="small"
            status={bulb.value < 50 ? "exception" : ""}
          />
        </div>
      </li>
    );
  });
  return (
    <div>
      <ul>{list}</ul>
    </div>
  );
};



export default BulbData;
