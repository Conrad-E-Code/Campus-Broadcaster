import {useState} from 'react'
import {useNavigate} from "react-router-dom"
import "../../App.css"


function NewUser(props) {
    // create a post redirect?
    // post a new user to a user table?
const [newUser, setNewUser] = useState("")
const [newCampus, setNewCampus] = useState("")
const [newPassword, setNewPassword] = useState("")
const [repeatPassword, setRepeatPassword] = useState("")

const history = useNavigate()

const newUserObj = {
    username: newUser,
    school_id: newCampus,
     password: newPassword
}
const configObj = {
    method: 'POST', 
    headers: {"content-type": "application/json"},
    body: JSON.stringify(newUserObj),    
}

const handleSubmit = (e) => {
    
    e.preventDefault();
    console.log(e)
    if (newPassword === repeatPassword) {
        fetch('http://localhost:9292/users', configObj)

        .then(r => (r.json))
        .then(history("/dashboard"))
    }
}   
    return (
        
        <div className='new-account'> Create Account <br></br>
        <form onSubmit={handleSubmit}>
        <br></br>
            <input placeholder="User Name" type="text" onChange={(e) => setNewUser(e.target.value)}></input><br></br>
            <br></br>
            <input placeholder="User Campus" type="number" onChange={(e) => setNewCampus(e.target.value)}></input><br></br>
            <br></br>
            <input placeholder="Enter Password" type="text" onChange={(e) => setNewPassword(e.target.value)}></input><br></br>
            <br></br>
            <input placeholder="ReEnter Password" type="text" onChange={(e) => setRepeatPassword(e.target.value)}></input><br></br>
            <br></br>
            <button className='new-submit'>Submit</button>
            
        </form>
        </div>
    )
}

export default NewUser

