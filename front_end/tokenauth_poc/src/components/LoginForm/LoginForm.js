import React from "react"
import './LoginForm.css'
import {useState} from "react"
import PropTypes from 'prop-types'
import '../../App.css'
//import {useNavigate} from "react-router-dom"
//import Dashboard from "../Dashboard/Dashboard"
//import useToken from "../../useToken"

async function loginUser(creds) {
    return fetch("http://localhost:9292/login",{
        method:"POST",
        headers:{"content-type": "application/json"},
        body: JSON.stringify(creds)
    })
    .then( r => r.json())
    .then()
}

function LoginForm({token, setToken, setFormUser, formUser}) {
    //const [formUser, setFormUser] = useState("")
const [formPass, SetFormPass] = useState("")
const [showBadLogin, setShowBadLogin] = useState(false)
// const loginObj = {
//     "username": formUser,
//     "password": formPass
// }

// console.log(loginObj)
    // async function handleSubmit(e) 
    //function showBadLogin() {
        // if (token === false) 
        // {console.log(`${token} this is bad token`)}
        // else {
        //     console.log(`${token} this is good token`)}
    //}
    const handleSubmit = async e => {
        e.preventDefault()
        let token = await loginUser({
            "username": formUser,
            "password": formPass
        })
        if (token == false) 
        {console.log(`${token} this is bad token`)
        setShowBadLogin(true)}
        else {
            console.log(`${token} this is good token`)}
    
        console.log(token)
        setToken(token)
        //console.log(token)
        //showBadLogin()
    }
        // console.log(e)
        // const LOGIN_URL = "changemeurl/login"
        // console.log(loginObj)
        // const bpObj = {
        //     method:"POST",
        //     headers:{"content-type": "application/json"},
        //     body: JSON.stringify(loginObj)
        // }


    return (
        <div className="login-form-div">
            
            <h2 className="see-this">You Must Log In To See This Content!</h2><br></br>
            <h2 className="credentials">Enter Credentials Below</h2><br></br>
            <form onSubmit={(e) => handleSubmit(e)} className="login-form">
                <label className="enter-username"> Enter Username:
                    <input  onChange={(e) => {
                        setFormUser(e.target.value)
                       // console.log(e.target.value)
                        //console.log(formUser)
                    }} className="login-input" type="text">
                    </input>
                </label>
                <br />
                <label className="enter-password"> Enter Password:
                    <input  onChange={(e) => {SetFormPass(e.target.value)
                    //console.log(e.target.value)
                    //console.log(formPass)
                    }} className="login-input" type="password">
                    </input>
                </label>
                <br />
                {showBadLogin? <p className="red-text">BAD LOGIN ATTEMPT!</p> : null}
                <button id="login-form-button"className="login-input" type="submit"> Login
                </button>
            </form>
        </div>
    )
}
LoginForm.propTypes = {
    setToken: PropTypes.func.isRequired
  }
export default LoginForm