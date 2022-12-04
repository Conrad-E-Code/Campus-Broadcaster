import './App.css';
import { Routes, Route } from "react-router-dom"
import LoginForm from './components/LoginForm/LoginForm';
import Dashboard from './components/Dashboard/Dashboard';
import Preferences from './components/Preferences/Preferences';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <LoginForm />
      </header>
      <Routes>
        <Route element={<Dashboard />} path="/dashboard"></Route>
        <Route element={<Preferences />} path="/preferences"></Route>
      </Routes>
      
    </div>
  );
}

export default App;
