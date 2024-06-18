import axios from "axios"
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function GetAccounts(){
    
    const [account, setAccount] = useState([]);

    useEffect(()=>{
        axios.get('http://localhost:8081/')
        .then(res => setAccount(res.data))
        .catch(err => console.log(err));
    }, [])

    const handleDelete = async(id)=>{
        try{
            await axios.delete('http://localhost:8081/account/' + id);
            window.location.reload();
        }catch(err){
            console.log(err);
        }
    }

    return(
        <table className="password-management-table">
            <thead className="password-management-table-head">
                <th>
                    ID
                </th>
                <th>
                    Email
                </th>
                <th>
                    Password
                </th>
                <th>
                    Website
                </th>
            </thead>
            <tbody className="password-management-table-body">
            {
                account.map((data,i)=>(
                    <tr key={i}>
                        <td>{data.ID}</td>
                        <td>{data.Email}</td>
                        <td>{data.Password}</td>
                        <td>{data.Website}</td>
                        <td><Link to={`/update/${data.ID}`} className="btn">Update</Link></td>
                        <td><button onClick={e=>handleDelete(data.ID)}>Delete</button></td>
                    </tr>
                ))
            }
            </tbody>
        </table>
    );

}