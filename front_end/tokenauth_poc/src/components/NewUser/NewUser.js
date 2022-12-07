import {useState} from 'react'



function NewUser(props) {
    // create a post redirect?
    // post a new user to a user table?
const [newUser, setNewUser] = useState("")
const [newCampus, setNewCampus] = useState("")
const [newPassword, setNewPassword] = useState("")
const [repeatPassword, setRepeatPassword] = useState("")

const newUserObj = {username: newUser, school_id: newCampus, password: newPassword}

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
    }
}   
    return (
        
        <div> Create Account <br></br>
        <form onSubmit={handleSubmit}>
            <input placeholder="User Name" type="text" onChange={(e) => setNewUser(e.target.value)}></input><br></br>
            <input placeholder="User Campus" type="number" onChange={(e) => setNewCampus(e.target.value)}></input><br></br>
            <input placeholder="Enter Password" type="text" onChange={(e) => setNewPassword(e.target.value)}></input><br></br>
            <input placeholder="ReEnter Password" type="text" onChange={(e) => setRepeatPassword(e.target.value)}></input><br></br>
            <button>Submit</button>
            
        </form>
        </div>
    )
}

export default NewUser

