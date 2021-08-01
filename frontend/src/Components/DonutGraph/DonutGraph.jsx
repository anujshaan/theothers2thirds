import './donutgraph.css';
import { PieChart, Pie, Cell } from "recharts";


export default function DonutGraph({profit}) {
    const diff = 100 - profit;
    const data = [
        { name: "Group A", value: profit },
        { name: "Group B", value: diff },
    ];
    const COLORS = ["#0088FE", "#555"];
    return (
        <div className="donutGraph">
            <PieChart width={350} height={200}>
                <Pie
                    data={data}
                    cx={250}
                    cy={100}
                    innerRadius={50}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                >
                    {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
      
             </PieChart>
        </div>
    )
}
