import './App.css';
import { Routes, Route } from "react-router-dom"
import LoginForm from './components/LoginForm/LoginForm';
import Dashboard from './components/Dashboard/Dashboard';
import Preferences from './components/Preferences/Preferences';
import {useState} from 'react'
function App() {
  const [token, setToken] = useState(false)

  return (
    <div className="App">
      <header className="App-header">
        <h2> Hello from header</h2>
      {/* {token? null :<LoginForm setToken={setToken} />} */}
      </header>
      <Routes>
        <Route element={token? <Dashboard/> :<LoginForm setToken={setToken}/>} path="/dashboard"></Route>
        <Route element={token? <Preferences/> :<LoginForm setToken={setToken}/>} path="/preferences"></Route>
      </Routes>
      
    </div>
  );
}

export default App;
