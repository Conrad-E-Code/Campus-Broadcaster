import React, { useEffect, useState } from 'react'
import {Link} from "react-router-dom"
import Channel from '../Channel/Channel'
import Signal from '../Signal/Signal'

function Dashboard({token}) {
    const [feed, setFeed] = useState([])

    const mappedFeed = feed.map((cast) => {
        console.log(cast)
        return(
            //need a key at some point
            <Signal likes={cast.likes} key={cast.id} signalId={cast.id} content={cast.content} setFeed={setFeed} feed={feed}
            userId={cast.user_id} createdAt={cast.created_at} username={cast.username} />
        )
    })
    const tokenObj = {
        "token" : `${token}`
    }
    // const configObj = {
    //     method:"POST",
    //     headers:{"content-type": "application/json"},
    //     body: JSON.stringify(tokenObj)
    // }
    // useEffect(()=> {
    //     fetch("http://localhost:9292/test", configObj)
    //     .then(r => r.json())
    //     .then( data => console.log(data))
    // },[])
    // POST WORKING ^^

    useEffect(() => {
        fetch(`http://localhost:9292/broadcasts/${token}`)
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
        <br></br>
        <button><Link to="/broadcasts/new">Share it!</Link></button>
        <button><Link to="/pictures/new">Post a Pic</Link></button>
        <Link to="/pictures"> SEE PICS</Link>
        </div>
    )
}

export default Dashboard