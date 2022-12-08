import {useNavigate} from "react-router-dom"
import { useState } from "react";


// we need the user_Id passed into this.
function BroadcastNews({token}) {

    const history = useNavigate()
    const [content, setContent] = useState("");

    function handleBroadcastSubmit(e){
        e.preventDefault();
        const BroadcastObj = {content: content, user_id: token}

        const configObj = {
            method: 'POST', 
            headers: {"content-type": "application/json"},
            body: JSON.stringify(BroadcastObj),    
        }    
        console.log(BroadcastObj)    
        //what's the URL?
        fetch('http://localhost:9292/broadcasts', configObj)
        
        .then(r => (r.json))
        .then(history("/dashboard"))
    }

    return (
        <div className="App">
          <form onSubmit={handleBroadcastSubmit}>
          <label>Share some news:</label>
          <br></br>
          <textarea
            required="true"
            id="broadcast-text"
            placeholder="Start typing..."
            rows={3}
            onChange={(e) => setContent(e.target.value)}/>
            <br></br>
            <button type="submit">Submit</button>
          </form>
        </div>
    );
}


export default BroadcastNews


