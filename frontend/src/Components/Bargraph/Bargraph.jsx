
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

// const data = [
//   {
//     name: "Product A",
//     TR: 4000,
//     AR: 2400,
//     amt: 2400
//   },
//   {
//     name: "Product B",
//     TR: 3000,
//     AR: 1398,
//     amt: 2210
//   },
//   {
//     name: "Product C",
//     TR: 2000,
//     AR: 9800,
//     amt: 2290
//   },
//   {
//     name: "Product D",
//     TR: 2780,
//     AR: 3908,
//     amt: 2000
//   },
//   {
//     name: "Product E",
//     TR: 1890,
//     AR: 4800,
//     amt: 2181
//   }
// ];

export default function Bargraph({companyData}) {
  const data=[];
  companyData.map((val)=>{
    
      const newData = {name : val.PRODUCT_NAME, AR:val.ACTUAL_REVENUE, TR:val.TARGETED_REVENUE}
      data.push(newData);
  })
  return (
    <BarChart
      width={1400}
      height={500}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="TR" fill="#8884d8" />
      <Bar dataKey="AR" fill="#82ca9d" />
    </BarChart>
  );
}
