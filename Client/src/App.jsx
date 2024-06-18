import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import GetAccounts from './Components/GetAccounts';
function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<GetAccounts></GetAccounts>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );

}

export default App
