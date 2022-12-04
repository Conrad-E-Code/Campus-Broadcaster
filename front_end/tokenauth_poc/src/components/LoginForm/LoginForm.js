import React from "react"
import './LoginForm.css'

function LoginForm({setToken}) {

    function loginFetch(e) {
        e.preventDefault()
        console.log(e)
        setToken(true)
        const LOGIN_URL = ""
        // fetch(LOGIN_URL)
        // .then(
        //     console.log("unknown territory")
        // )
    }

    return (
        <div className="login-form-div">
            <h1> Welcome to The Login Form</h1>
            <h2> Hello From LoginForm</h2>
            <form onSubmit={(e) => loginFetch(e)} className="login-form">
                <label> Enter Username:
                    <input className="login-input" type="text">
                    </input>
                </label>
                <br />
                <label> Enter Password:
                    <input className="login-input" type="password">
                    </input>
                </label>
                <br />
                <button className="login-input" type="submit"> LOGIN
                </button>
            </form>
        </div>
    )
}

export default LoginForm