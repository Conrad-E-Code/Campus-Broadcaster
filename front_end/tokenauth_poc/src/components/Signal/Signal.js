import React, { useState } from 'react'

function Signal({content, userId, signalId, createdAt, username, feed, setFeed}){

//const [test, setTest] = useState(true)

const feedMinusOne = feed.filter((sig) => sig.id !== signalId)

function handleDeleteSignal(){

    
    console.log(signalId)
    const configObj = {
        method:"DELETE",
        headers: {"content-type": "application/json"}
    }
  fetch(`http://localhost:9292/broadcasts/${signalId}`, configObj)
  .then(setFeed(feedMinusOne))
  
  //.then(r => r.json)
  //.then(rdata => console.log(rdata))
}

return(
    <div>
        <p>{username} said {content} at {createdAt} <button onClick={handleDeleteSignal}>X</button></p>
    </div>
)

}

export default Signal