import {useState, useRef} from 'react'
import "./login.css"
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import axios from 'axios';

export default function Login({storage, setCurrentUser}) {
    const [page,setPage] = useState(true);
    const [message, setMessage] = useState(false);

    const username = useRef();
    const password = useRef();
    const email = useRef();

    const handleClick = ()=>{
        if(page === false){
            setPage(true);
        }else{
            setPage(false);
        }
    }

    const handleSubmit = async(e)=>{
        e.preventDefault();

        const user = {
            username:username.current.value,
            password:password.current.value,
        };
        try{
            const res = await axios.post('/auth/login',user);
            console.log('success');
            storage.setItem("user", res.data[0].USERNAME);
            setCurrentUser(res.data[0].USERNAME);
        }catch(e){
            console.log(e);
        }
    }

    const handleForgot = async(e)=>{
        e.preventDefault();
        const user = {
            email:email.current.value
        };
        try{
            await axios.post('/auth/forgot-password',user);
            setMessage(true);
        }catch(e){
            console.log(e);
        }
    }
    return (
        <div className="login">
            {page ? (<div className="loginWrapper">
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="username" ref={username} required/>
                    <input type="password" placeholder="password" ref={password} required/>
                    <p onClick={handleClick}>forgot password ?</p>
                    <button className="loginButton" type="submit">Login</button>
                </form>
            </div>) :
            (<>
                <ArrowBackIosIcon onClick={handleClick} className="loginBackButton"/>
                <div className="loginWrapper">
                <form onSubmit={handleForgot}>
                    <input type="email" ref={email} placeholder="Email address"/>
                    <button className="loginButton" type="submit">Submit</button>
                    {message && <p>Email and password sent to your email</p>}
                </form>
            </div></>)}
        </div>
    )
}
