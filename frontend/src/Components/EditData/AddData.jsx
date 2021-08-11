import './adddata.css';
import { useRef } from 'react';
import axios from 'axios';

export default function EditData({setEditButton,currentUser}) {

    const handleClick=()=>{
        setEditButton(false);
    }
    const name = useRef();
    const AR = useRef();
    const TR = useRef();
    const location = useRef()

    const handleSubmit =async(e)=>{
        e.preventDefault();
        const profit = (AR.current.value - TR.current.value);
        const PS = (profit/TR.current.value) * 100;
         const newData = {
                USERNAME:currentUser,
                PRODUCT_NAME:name.current.value,
                ACTUAL_REVENUE: AR.current.value,
                TARGETED_REVENUE:TR.current.value,
                PROFIT_SHARE:PS,
                LOCATION:location.current.value
            }
            console.log(newData);
            try{
                await axios.post('/home/add/'+currentUser,newData);
                // console.log('data sent');
                // name.current.value="";
                // AR.current.value="";
                // TR.current.value="";
                // setIssuccess(true);
                window.location.reload();
        }catch(e){
            console.log(e);
        }
    }
    return (
        <div className="editData">
            <div className="editDataWrapper">
                <div className="cancelButton">
                    <button onClick={handleClick}>x</button>
                    </div>
                <form onSubmit={handleSubmit}>
                    <input type="text" ref={name} placeholder="Product Name" />
                    <input type="text" ref={AR} placeholder="Actual Revenue" />
                    <input type="text" ref={TR} placeholder="Targeted Revenue" />
                    <select ref={location}>
                        <option value="delhi">New Delhi</option>
                        <option value="chennai">Chennai</option>
                        <option value="mumbai">Mumbai</option>
                        <option value="kolkata">Kolkata</option>
                    </select>
                    <button type='submit' className="editButtonSubmit">ADD</button>
                </form>
            </div>
        </div>
    )
}
