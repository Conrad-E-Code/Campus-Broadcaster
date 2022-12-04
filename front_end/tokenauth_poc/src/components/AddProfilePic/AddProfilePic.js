import {useNavigate} from "react-router-dom"

function AddProfilePic(props) {

    const history = useNavigate()

    handlePicSubmit(e){
        //POST picture
        // redirect to next step if successful
        console.log(e)
        const picSendURL = "URLforPic"
        configObj = {method:"POST",
        headers:{"content-type": "application/json"},
        body: JSON.stringify(buildFormData)}

        fetch(picSendURL, configObj)
        .then(r => r.json())
        .then(history("/dashboard"))

    }

    return(
        <div>
            <h1>Add a Link to Your Profile Pic</h1>
            <form onSubmit={(e) => handlePicSubmit(e)}>
                <label>
                    Paste your link here:
                <input type="text"> </input>
                </label>
                <button type="submit">Submit Pic</button>
            </form>
        </div>
    )
}

