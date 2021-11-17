import React from "react";

const cleanPercentage = (percentage) => {
  const tooLow = !Number.isFinite(+percentage) || percentage < 0;
  const tooHigh = percentage > 100;
  return tooLow ? 0 : tooHigh ? 100 : +percentage;
};

const Circle = ({ colour, pct }) => {
  const r = 50;
  const circ = 2 * Math.PI * r;
  const strokePct = ((100 - pct) * circ) / 100;
  return (
    <circle
      r={r}
      cx={120}
      cy={75}
      fill="transparent"
      stroke={strokePct !== circ ? colour : "100%"} // remove colour as 0% sets full circumference
      strokeWidth={"1.5rem"}
      strokeDasharray={circ}
      strokeDashoffset={pct ? strokePct : 0}
      strokeLinecap="round"
      // strokeLinecap="butt"
    ></circle>
  );
};

const Text = ({ percentage }) => {
  return (
    <text
      x="10%"
      y="10%"
      dominantBaseline="central"
      textAnchor="middle"
      fontSize={"1em"}
    >
      {percentage.toFixed(0)}%
    </text>
  );
};

const PieSmall= ({ percentage, colour }) => {
  const pct = cleanPercentage(percentage);
  return (
    <svg width={150} height={150}>
      <g transform={`rotate(-90 ${"100 100"})`}>
        <Circle colour="transparent" />
        <Circle colour={colour} pct={pct} />
      </g>
      {/* <Text percentage={pct} /> */}
    </svg>
  );
};

export default PieSmall
