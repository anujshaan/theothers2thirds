import "./main.css"
import { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar/Navbar"
import DonutGraph from "../../Components/DonutGraph/DonutGraph";
import Bargraph from "../../Components/Bargraph/Bargraph";
import axios from "axios";
import EditData from "../../Components/EditData/EditData";

export default function Main({currentUser,storage,setCurrentUser}) {

    const [companyData, setCompanyData] = useState([]);
    const [editButton, setEditButton] = useState(false);
    
    useEffect(()=>{
         axios.get("/home/"+currentUser).then((response) => {
        setCompanyData(response.data);
        // console.log(response.data);
        // console.log(companyData);
        });
   
    },[currentUser])
    
    const handleClick = ()=>{
        setEditButton(true);
    }
    
    return (
        <div className="main">
            <Navbar currentUser={currentUser} 
                    storage={storage} 
                    setCurrentUser={setCurrentUser}/>
                <div className="mainEditButton">
                    <button onClick={handleClick}>Add Your Data</button>
                </div>
            <div className="mainWrapper">
                {editButton && <EditData setEditButton={setEditButton} currentUser={currentUser}/>}
                <div className="mainSearchBox"></div>
                <div className="mainDonutGraph">
                    <div className="donutGraphcss">
                        <DonutGraph  companyData={companyData}/>
                    </div>
                </div>
                <div className="mainBarGraph">
                      <Bargraph companyData={companyData}/>                      
                </div>
            </div>
        </div>
    )
}
