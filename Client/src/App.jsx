import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import GetAccounts from './Components/GetAccounts';
import CreateAccount from './Components/CreateAccount';
import UpdateAccount from './Components/UpdateAccount';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<GetAccounts></GetAccounts>}></Route>
          <Route path='/create' element={<CreateAccount></CreateAccount>}></Route>
          <Route path='/update/:id' element={<UpdateAccount></UpdateAccount>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );

}

export default App
