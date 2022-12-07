import {Link} from "react-router-dom" 

function Channel(props){


return(
    <div>
        <h2>Campus Broadcasts</h2>
        <br></br>
        <button><Link to="/broadcasts/new">Share it!</Link></button>
    </div>
)

}

export default Channel