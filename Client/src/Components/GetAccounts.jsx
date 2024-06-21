import axios from "axios"
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons'
import CreateAccount from './CreateAccount';

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
        <>
        <section className="table-container">
             
            <table className="password-management-table">
                <thead className="password-management-table-head">
                    <tr>
                        <th>
                        Website
                        </th>
                        <th>
                        Email
                        </th>
                        <th>
                        Password
                        </th>
                        <th colSpan={2}>
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody className="password-management-table-body">
                <CreateAccount></CreateAccount>   
                {
                    account.map((data,i)=>(
                        <tr key={i}>
                            <td>{data.Website}</td>   
                            <td>{data.Email}</td>
                            <td>{data.Password}</td>                    
                            <td className="edit-account-btn-container">
                                <div>
                                    <Link className="btn" to={`/update/${data.ID}`}><FontAwesomeIcon className="edit-account-icon" icon={faPenToSquare}/></Link>
                                </div>
                            </td>
                            <td className="delete-account-btn-container">
                                <div>
                                    <button className="btn" onClick={e=>handleDelete(data.ID)}><FontAwesomeIcon className="delete-account-icon" icon={faTrash} /></button>
                                </div>
                            </td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
        </section>
        </>
    );

}