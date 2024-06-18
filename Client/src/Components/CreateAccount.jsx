import axios from "axios"
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CreateAccount(){

    const [email, setEmail] = useState([]);
    const [password, setPassword] = useState([]);
    const [website, setWebsite] = useState([]);
    const navigate = useNavigate();

    function handleSubmit(event){
        event.preventDefault();
        axios.post("http://localhost:8081/create",{email,password,website})
        .then(res=>{
            console.log(res);
            navigate('/');
        }).catch(err => console.log(err));
    }

    return(
        <form onSubmit={handleSubmit}>
            <h2>Add Account</h2>
            <div>
                <label>Email</label>
                <input type="text" placeholder="Enter Email" className="form-control"
                onChange={e=>setEmail(e.target.value)}></input>
            </div>
            <div>
                <label>Password</label>
                <input type="text" placeholder="Enter Password" className="form-control"
                onChange={e=>setPassword(e.target.value)}></input>
            </div>
            <div>
                <label>Website</label>
                <input type="text" placeholder="Enter Website" className="form-control"
                onChange={e=>setWebsite(e.target.value)}></input>
            </div>
            <button className="btn btn-success"> Submit</button>
        </form>
    );

}