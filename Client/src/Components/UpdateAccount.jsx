import axios from "axios"
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function UpdateAccount(){

    const [email, setEmail] = useState([]);
    const [password, setPassword] = useState([]);
    const [website, setWebsite] = useState([]);
    const {id} = useParams();
    const navigate = useNavigate();

    function handleSubmit(event){
        event.preventDefault();
        axios.put("http://localhost:8081/update/" + id, {email,password,website})
        .then(res=>{
            console.log(res);
            navigate('/');
        }).catch(err => console.log(err));
    }

    return(
        <form onSubmit={handleSubmit}>
            <h2>Update Account</h2>
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
            <button className="btn btn-success"> Update </button>
        </form>
    );

}