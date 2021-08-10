import './donutgraph.css';
import { PieChart, Pie, Cell,Tooltip, Legend } from "recharts";


export default function DonutGraph({companyData}) {
    // const data = [
    //     { name: "Group A", value: profit },
    //     { name: "Group B", value: diff },
    // ];

    const data = [];
    companyData.map((val)=>{
        const newData = {name: val.PRODUCT_NAME,value : val.PROFIT_SHARE}
        data.push(newData);
    })
    
    console.log(data);
    const COLORS = ["#0088FE", "#ffc300" ,"#008000","#d90429","#9d4edd","469d89"];
    return (
        <div className="donutGraph">
            
            <PieChart width={500} height={300}>
                <Pie
                    data={data}
                    cx={250}
                    cy={150}
                    innerRadius={60}
                    outerRadius={110}
                    fill="#8884d8"
                    dataKey="value"
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    <Legend />
                </Pie>
                <Tooltip/>
             </PieChart>
        </div>
    )
}
