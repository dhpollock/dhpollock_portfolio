import React from "react";
import * as d3 from "d3";

const Arc = ({ data, index, createArc, colors, format }) => (
  <g key={index} className="arc">
    <path id="arc-{index}" className="arc" d={createArc(data)} fill={colors(index)} />
    <text
      transform={`translate(${createArc.centroid(data)})`}
      textAnchor="middle"
      alignmentBaseline="middle"
      fill="black"
      fontSize="14"
    >
    {/* <textPath href="#arc-{index}"> */}
    { data.data.prettyPrint }
    {/* </textPath> */}
      {/* {format(data.prettyPrint)} */}
    </text>
  </g>
);

const SkillChart = props => {
  const createPie = d3
    .pie()
    .value(d => d.value)
    .sort(null);
  const createArc = d3
    .arc()
    .innerRadius(props.innerRadius)
    .outerRadius(props.outerRadius);
  const colors = d3.scaleOrdinal(d3.schemeCategory10);
//   const format = d3.format(".2f");
  const data = createPie(props.data);
    console.log(data);
  return (
    <svg width={props.width} height={props.height} overflow="visible">
      <g transform={`translate(${props.outerRadius} ${props.outerRadius})`}>
        {data.map((d, i) => (
          <Arc
            key={i}
            data={d}
            index={i}
            createArc={createArc}
            colors={colors}
            // format={format}
          />
        ))}
      </g>
    </svg>
  );
};

export default SkillChart;