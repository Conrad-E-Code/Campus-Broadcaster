import React from "react"
//import {useNavigate} from "react-router-dom"
import {useState} from "react"

function AddProfilePic(props) {

    //const history = useNavigate()
    const [newPicURL, setNewPicURL] = useState("")

   function handlePicSubmit(e){
        e.preventDefault()
        //POST picture
        // redirect to next step if successful
        // adding a column to user table?

        console.log(e.target.value)
        const picSendURL = "URLforPic"
        const configObj = {method:"POST",
        headers:{"content-type": "application/json"},
        body: JSON.stringify("test")}

        // fetch(picSendURL, configObj)
        // .then(r => r.json())
        // .then(history("/dashboard"))

    }

    return(
        <div>
            <h1>Add a Link to Your Profile Pic</h1>
            <h3> Default pics:</h3>
            <ul>
                <li>https://i.pinimg.com/originals/5f/59/91/5f5991890b1a6cdab3216bd63721524b.jpg</li>
                <li>https://m.media-amazon.com/images/M/MV5BZDU5NzAzNWQtOGE3MS00Njg1LTlhNjYtZDVhYmZlODExZGVhXkEyXkFqcGdeQXVyODQ4MjU1MDk@._V1_.jpg</li>
            </ul>
            <form onSubmit={(e) => handlePicSubmit(e)}>
                <label>
                    Paste your link here:
                <input type="text" onChange={(e) => setNewPicURL(e.target.value)}></input>
                </label>
                <button type="submit">Submit Pic</button>
            </form>
        </div>
    )
}

export default AddProfilePic