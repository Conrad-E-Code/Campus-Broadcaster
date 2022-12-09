import {Link} from "react-router-dom"
import "../../App.css"
// import NewUser from './components/NewUser/NewUser';


function HomePage(props) {






    return (
    <div className="home-page">Home 
        <br></br>
        <Link to="/dashboard">
        <button className="home-login">Login</button>
        </Link>
        <br></br>
        <Link to="/users/new">
        <button className="home-create">Create Account</button>
        </Link>
        <br></br>
    </div>
    )
}

















export default HomePage