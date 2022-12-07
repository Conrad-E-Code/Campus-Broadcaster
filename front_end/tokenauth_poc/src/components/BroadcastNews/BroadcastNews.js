import {useNavigate} from "react-router-dom"
import { useState } from "react";


// we need the user_Id passed into this.
function BroadcastNews(props) {

    const [content, setContent] = useState("");

    function handleBroadcastSubmit(e){
        e.preventDefault();
        
        //No idea how we can set the datetime
        const BroadcastObj = {content: content, created_at: datetime, updated_at: datetime, user_id: user_id}

        const configObj = {
            method: 'POST', 
            headers: {"content-type": "application/json"},
            body: JSON.stringify(BroadcastObj),    
        }        
        //what's the URL?
        fetch('http://localhost:9292/users', configObj)
    }

    return (
        <div className="App">
          <form onSubmit={handleBroadcastSubmit}>
          <label>Share some news:</label>
          <textarea
            id="broadcast-text"
            placeholder="Start typing..."
            rows={3}
            onChange={(e) => setContent(e.target.value)}
          />
          </form>
        </div>
    );
}





