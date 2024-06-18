import './App.css'
import { useEffect,useState } from 'react'
function App() {

const [data,setData] = useState([]);

useEffect(()=>{
  fetch("http://localhost:8081/accounts")
  .then(res=>res.json())
  .then(data=>setData(data))
  .catch(err => console.log(err));
},[]);

  return (
    <div>
          <p>{data[0].ID}</p>
          <p>{data[0].Email}</p>
          <p>{data[0].Password}</p>
          <p>{data[0].Website}</p>
      </div>
  );

}

export default App
