import { useState } from "react";
import "./registerLogin.css";
import Bg from "../../Assets/bg.png";
import Register from "../../Components/Register/Register";
import Login from "../../Components/Login/Login";

export default function RegisterLogin({storage, setCurrentUser}) {
    const [page,setPage] = useState(true);

    const handleClick = ()=>{
        if(page === false){
            setPage(true);
        }else{
            setPage(false);
        }
    }
    
    return (
        <div className="registerLogin">
            <div className="navbar">
            <div className="navbarWrapper">
                <div className="navbarLogo">
                    <h1>Online DASHBOARD</h1>
                </div>
                <div className="navbarDetails">
                    <h3 onClick={handleClick}>{page ? 'Login Here' : 'Register Here'}</h3>
                    <h2>Contact us</h2>
                </div>
            </div>
        </div>
            <div className="registerLoginWrapper">
                <div className="registerLoginImg">
                    <img src={Bg} alt="" />
                </div>
                <div className="registerLoginForm">
                    {page ? <Register /> : <Login storage = {storage} setCurrentUser={setCurrentUser}/>}
                </div>
            </div>
        </div>
    )
}
