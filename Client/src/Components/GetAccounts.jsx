import axios from "axios"
import { useState, useEffect } from "react";

export default function GetAccounts(){
    const [account, setAccount] = useState([]);

    useEffect(()=>{
        axios.get('http://localhost:8081/')
        .then(res => setAccount(res.data))
        .catch(err => console.log(err));
    }, [])

    return(
        <div>
            {
                account.map((data,i)=>(
                    <div key={i}>
                        <p>{data.ID}</p>
                        <p>{data.Email}</p>
                        <p>{data.Password}</p>
                        <p>{data.Website}</p>
                    </div>
                ))
            }
        </div>
    );

}