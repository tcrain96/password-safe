import axios from "axios"
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

export default function CreateAccount(){

    const [email, setEmail] = useState([]);
    const [password, setPassword] = useState([]);
    const [website, setWebsite] = useState([]);

    function handleSubmit(event){
        event.preventDefault();

        axios.post("http://localhost:8081/create",{email,password,website})
        .then(res=>{
            console.log(res);
            window.location.reload();
        }).catch(err => console.log(err));
    }

    return(
        <tr className="create-account-row">
            <td>
                <input name="Website" type="text" placeholder="Enter Website" className="form-control"
                onChange={e=>setWebsite(e.target.value)}></input>
            </td>
            <td>
                <input name="Email" type="text" placeholder="Enter Email" className="form-control"
                onChange={e=>setEmail(e.target.value)}></input>
            </td>
            <td>
                <input name="Password" type="text" placeholder="Enter Password" className="form-control"
                onChange={e=>setPassword(e.target.value)}></input>
            </td>
            <td colSpan={2} className="new-account-btn-container">
                <div>
                    <button onClick={e=>handleSubmit(e)} className="btn"> Add New Account</button>
                    <FontAwesomeIcon className="new-account-icon" icon={faArrowRight} />
                </div>
            </td>
        </tr>
    );

}