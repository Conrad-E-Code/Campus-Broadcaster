import React from "react"
import './LoginForm.css'
import {useState} from "react"
import PropTypes from 'prop-types'

async function loginUser(creds) {
    return fetch("http://localhost:9292/login",{
        method:"POST",
        headers:{"content-type": "application/json"},
        body: JSON.stringify(creds)
    })
    .then( r => r.json())
}

function LoginForm({setToken}) {
const [formUser, setFormUser] = useState("")
const [formPass, SetFormPass] = useState("")
// const loginObj = {
//     "username": formUser,
//     "password": formPass
// }

// console.log(loginObj)
    // async function handleSubmit(e) 
    const handleSubmit = async e => {
        e.preventDefault()
        const token = await loginUser({
            "username": formUser,
            "password": formPass
        })
        console.log(token)
        setToken(token)
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
            <h1>You Must Log In To See This Content!</h1>
            <h2>Enter Credentials Below
            </h2>
            <form onSubmit={(e) => handleSubmit(e)} className="login-form">
                <label> Enter Username:
                    <input  onChange={(e) => {
                        setFormUser(e.target.value)
                       // console.log(e.target.value)
                        //console.log(formUser)
                    }} className="login-input" type="text">
                    </input>
                </label>
                <br />
                <label> Enter Password:
                    <input  onChange={(e) => {SetFormPass(e.target.value)
                    //console.log(e.target.value)
                    //console.log(formPass)
                    }} className="login-input" type="password">
                    </input>
                </label>
                <br />
                <button className="login-input" type="submit"> LOGIN
                </button>
            </form>
        </div>
    )
}
LoginForm.propTypes = {
    setToken: PropTypes.func.isRequired
  }
export default LoginForm