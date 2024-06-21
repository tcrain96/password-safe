import axios from "axios"
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register(){

    const [username, setUsername] = useState([]);
    const [password, setPassword] = useState([]);
    const navigate = useNavigate();

    function handleSubmit(event){
        event.preventDefault();

        axios.post("http://localhost:8081/register",{username,password})
        .then(res=>{
            console.log(res);
            navigate("/login");
        }).catch(err => console.log(err));
    }

    return(
        <table>
            <tbody>
                <tr className="create-account-row">
                    <td>
                        <input name="Username" type="text" placeholder="Enter Username" className="form-control"
                        onChange={e=>setUsername(e.target.value)}></input>
                    </td>
                    <td>
                        <input name="Password" type="text" placeholder="Enter Password" className="form-control"
                        onChange={e=>setPassword(e.target.value)}></input>
                    </td>
                    <td colSpan={2} className="new-account-btn-container">
                        <div>
                            <button onClick={e=>handleSubmit(e)} className="btn"> Signup</button>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    );

}