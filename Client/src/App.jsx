import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import GetAccounts from './Components/GetAccounts';
import Register from './Components/Register';
import Login from './Components/Login';
import UpdateAccount from './Components/UpdateAccount';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<GetAccounts></GetAccounts>}></Route>
          <Route path='/update/:id' element={<UpdateAccount></UpdateAccount>}></Route>
          <Route path='/register' element={<Register></Register>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );

}

export default App
