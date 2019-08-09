import React from "react";
import Recharts from "./components/Recharts";
import Echarts from "./components/Echarts";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip
} from "recharts";
import {
  PieChart,
  Pie,
  Label,
  Legend,
  PolarRadiusAxis,
  PolarAngleAxis
} from "recharts";
const App = () => {
  const data = [
    { name: "月份 1", 销量: 50, pv: 1000, amt: 1000 },
    { name: "月份 2", 销量: 500, pv: 2000, amt: 2000 },
    { name: "月份 3", 销量: 200, pv: 3000, amt: 3000 },
    { name: "月份 4", 销量: 300, pv: 1000, amt: 1000 },
    { name: "月份 5", 销量: 300, pv: 2000, amt: 2000 },
    { name: "月份 6", 销量: 600, pv: 3000, amt: 3000 }
  ];
  const data01 = [
    { name: "20K-30K", value: 6.5, x1: 25 },
    { name: "15K-20K", value: 10.9, x1: 25 },
    { name: "10K-15K", value: 41.1, x1: 25 },
    { name: "8K-10K", value: 18.8, x1: 25 },
    { name: "6K-8K", value: 18.8, x1: 25 },
    { name: "4K-6K", value: 3.9, x1: 25 }
  ];
  const renderLineChart = (
    <LineChart
      width={900}
      height={400}
      data={data}
      margin={{ top: 125, right: 20, bottom: 25, left: 0 }}
    >
      <Line type="monotone" dataKey="销量" stroke="red" />
      <CartesianGrid stroke="teal" strokeDasharray="5 5" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
    </LineChart>
  );
  const pieChart = (
    <PieChart
      width={730}
      height={250}
      margin={{ top: 25, right: 20, bottom: 25, left: 0 }}
    >
      <Pie
        data={data01}
        dataKey="value"
        nameKey="name"
        cx="50%"
        cy="50%"
        outerRadius={90}
        innerRadius={40}
        fill="teal"
        legendType="square"
        label={{ dataKey: "name" }}
      />
      {/* <PolarAngleAxis /> */}
      {/* <PolarRadiusAxis /> */}
      <Label />
      <Legend />
      <Tooltip />
    </PieChart>
  );
  return (
    <div>
      <div>{renderLineChart}</div>
      <div>{pieChart}</div>
      <Recharts />
      <Echarts />
    </div>
  );
};

export default App;
