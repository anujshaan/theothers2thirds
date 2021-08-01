import './editdata.css';
import { useRef } from 'react';
import axios from 'axios';

export default function EditData({setEditButton,currentUser}) {
    const handleClick=()=>{
        setEditButton(false);
    }
    const name = useRef();
    const AR = useRef();
    const TR = useRef();
    const PS = useRef();

    const handleSubmit=async(e)=>{
        e.preventDefault();
         const newData = {
                USERNAME:currentUser,
                PRODUCT_NAME:name.current.value,
                ACTUAL_REVENUE: AR.current.value,
                TARGETED_REVENUE:TR.current.value,
                PROFIT_SHARE:PS.current.value
            }
        try{
           
            await axios.post('/home/update/'+currentUser,newData);
            e.target.value=null;
            console.log('data sent');
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
                    <input type="text" ref={PS} placeholder="Profit Share(without % sign)" />
                    <button type='submit' className="editButtonSubmit">ADD</button>
                </form>
            </div>
        </div>
    )
}
