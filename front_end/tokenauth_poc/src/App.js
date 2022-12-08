import './App.css';
import { Routes, Route, Link,} from "react-router-dom"
import LoginForm from './components/LoginForm/LoginForm';
import Dashboard from './components/Dashboard/Dashboard';
import Pictures from './components/Pictures/Pictures';
import useToken from './useToken';
import NewUser from './components/NewUser/NewUser';
import HomePage from './components/HomePage/HomePage';
import {useState} from 'react'
import BroadcastNews from './components/BroadcastNews/BroadcastNews'
import AddProfilePic from './components/AddProfilePic/AddProfilePic'

// function setToken(userToken) {
//   sessionStorage.setItem('token', JSON.stringify(userToken))
// }
// function getToken(){
//   const tokenString = sessionStorage.getItem('token')
//   const userToken = JSON.parse(tokenString)
//   return userToken?.token
// }

function App() {
  const {token, setToken} = useToken()
  const [formUser, setFormUser] = useState("")
  // const params = useParams()
  // console.log(params)

  // useEffect(() => {
  //   setFormUser(JSON.parse(window.localStorage.getItem('formUser')))
  // },[])


// useEffect(()=> {
//   window.localStorage.setItem('formUser', formUser)
// }, [formUser])
  //const token = getToken()
  // if(!token) {
  //   return <LoginForm setToken={setToken}/>
  // }
  // else {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Campus Broadcaster</h2>
        {/* <button onClick={() => console.log(token)} >Try Me!</button> */}
      {/* {token? null :<LoginForm setToken={setToken} />} */}
      </header>
      <Routes>
        <Route element={token? <Dashboard token={token}/> :
        <LoginForm token={token}setFormUser={setFormUser} formUser={formUser} setToken={setToken} />} path="/dashboard"></Route>
        <Route element={token? <Pictures/> :
        <LoginForm token={token}setFormUser={setFormUser} formUser={formUser} setToken={setToken} />} path="/pictures"></Route>
        <Route element={token? <BroadcastNews token={token}/> :
        <LoginForm token={token} setFormUser={setFormUser} formUser={formUser} setToken={setToken} />} path="/broadcasts/new"></Route>
        <Route element={<NewUser/>} path="/users/new"></Route>
        <Route element={token? <AddProfilePic token={token} /> :
        <LoginForm token={token}setFormUser={setFormUser} formUser={formUser} setToken={setToken} />} path="/pictures/new"></Route>
        <Route element={token?<Dashboard token={token}/>:<HomePage/>} path="/"></Route>
        
      </Routes>
      {token? <button onClick={() => {sessionStorage.clear()
      document.location.reload()}} >Logout</button> : null}
    </div>
  );
  }


export default App;
