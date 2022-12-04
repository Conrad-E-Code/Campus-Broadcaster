import React from 'react'
import {Link} from "react-router-dom"

function Dashboard(props) {
    return (
        <div className="dashboard">
        <p> Hello from the dashboard</p>
        <Link to="/preferences">Preferences</Link>
        </div>
    )
}

export default Dashboard