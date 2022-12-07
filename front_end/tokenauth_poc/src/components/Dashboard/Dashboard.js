import React from 'react'
import {Link} from "react-router-dom"
import Channel from '../Channel/Channel'

function Dashboard(props) {




    return (
        <div className="dashboard">
        <p> Hello from the dashboard</p>
        <Channel/>
        <Link to="/preferences">Preferences</Link>
        </div>
    )
}

export default Dashboard