import "./register.css"
import { useRef, useState } from "react"
import axios from 'axios';

export default function Register() {

    const [failure, setFailure] = useState(false);
    const [success, setSuccess] = useState(false);

    const compName = useRef();
    const gstNum = useRef();
    const username = useRef();
    const email = useRef();
    const password = useRef();
    const confirmPassword = useRef();
    
    const handleClick = async(e)=>{
        e.preventDefault();
        if(password.current.value !== confirmPassword.current.value){
            confirmPassword.current.setCustomValidity("password doesn't match")
        }else{
            const user = {
                compName:compName.current.value,
                gstNum:gstNum.current.value,
                username:username.current.value,
                email:email.current.value,
                password:password.current.value
            };
            try{
                await axios.post('/auth/register',user);
                console.log('success');
                compName.current.value="";
                gstNum.current.value="";
                username.current.value="";
                email.current.value="";
                password.current.value="";
                confirmPassword.current.value="";
                setSuccess(true);
                setFailure(false);
            }catch(e){
                console.log(e);
                setFailure(true);
                setSuccess(false);
            }
        }
    }
    return (
        <div className="register">
            <div className="registerWrapper">
                <form onSubmit={handleClick}>
                    <input type="text" placeholder="Company Name" ref={compName} required/>
                    <input type="text" placeholder="GST No." required ref={gstNum} />
                    <input type="text" placeholder="username" ref={username} required/>
                    <input type="email" placeholder="Email address" ref={email} required/>
                    <input type="password" placeholder="password" ref={password} required/>
                    <input type="password" placeholder="confirm password" ref={confirmPassword} required/>
                    <button type="submit" className="registerButton"> Register</button>
                    {failure && <p>Something went wrong</p>}
                    {success && <p>Registration Success please Login</p>}
                </form>
            </div>
        </div>
    )
}
