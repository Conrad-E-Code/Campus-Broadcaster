import React, { useEffect, useState } from 'react'
import {Link} from "react-router-dom"
import Channel from '../Channel/Channel'

function Dashboard({token}) {
    const [feed, setFeed] = useState([])
    const mappedFeed = feed.map((cast) => {
        return(
            <p>{cast}</p>
        )
    })
    const tokenObj = {
        "token" : `${token}`
    }
    const configObj = {
        method:"POST",
        headers:{"content-type": "application/json"},
        body: JSON.stringify(tokenObj)
    }
    // useEffect(()=> {
    //     fetch("http://localhost:9292/test", configObj)
    //     .then(r => r.json())
    //     .then( data => console.log(data))
    // },[])
    // POST WORKING ^^

    useEffect(() => {
        fetch(`http://localhost:9292/test/${token}`)
        .then(r => r.json())
        .then(data => {
            setFeed(data)
        })
            

    },[])

    return (
        <div className="dashboard">
        <p> Hello from the dashboard</p>
        {mappedFeed}
        <Channel/>
        <Link to="/preferences">Preferences</Link>
        </div>
    )
}

export default Dashboard