import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import GetAccounts from './Components/GetAccounts';
import CreateAccount from './Components/CreateAccount';
function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<GetAccounts></GetAccounts>}></Route>
          <Route path='/create' element={<CreateAccount></CreateAccount>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );

}

export default App
