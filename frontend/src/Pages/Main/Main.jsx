import "./main.css"
import { useEffect, useState, useRef } from "react";
import Navbar from "../../Components/Navbar/Navbar"
import DonutGraph from "../../Components/DonutGraph/DonutGraph";
import Bargraph from "../../Components/Bargraph/Bargraph";
import axios from "axios";
import EditData from "../../Components/EditData/AddData";

export default function Main({currentUser,storage,setCurrentUser}) {

    const [companyData, setCompanyData] = useState([]);
    const [editButton, setEditButton] = useState(false);
    const [place, setPlace] = useState("");
    
    const location = useRef();
    useEffect(()=>{
         axios.get("/home/"+currentUser+"/"+place).then((response) => {
        setCompanyData(response.data);
        // console.log(response.data);
        // console.log(companyData);
        });
   
    },[currentUser,place])
    
    const handleClick = ()=>{
        setEditButton(true);
    }
    const handleLocation=()=>{
        setPlace(location.current.value);
    }
    console.log(place);

    return (
        <div className="main">
            <Navbar currentUser={currentUser} 
                    storage={storage} 
                    setCurrentUser={setCurrentUser}/>
                <div className="mainEditButton">
                    <div className="locationFilter">Location:
                        <div className="listOfLocations">
                            <select ref={location} onClick={handleLocation}className="listOfLocationOption">
                                <option value="" ></option>
                                <option value="Mumbai" >Mumbai</option>
                                <option value="kolkata">Kolkata</option>
                                <option value="Chennai">Chennai</option>
                                <option value="Delhi">Delhi</option>
                            </select>
                        </div>
                    </div>
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
