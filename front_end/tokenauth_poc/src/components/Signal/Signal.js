import React, { useState } from 'react'
import "../../App.css"

function Signal({content, userId, signalId, createdAt, username, feed, setFeed, likes}){

//const [test, setTest] = useState(true)

 const feedMinusOne = feed.filter((sig) => sig.id !== signalId)

function handleLike() {
    console.log(`Patch to 9292/${signalId} coming soon!`)

    // fetch post
    const PATCH_URL = `http://localhost:9292/broadcasts/${signalId}`
    const likeObj = {likes: likes + 1}
    const patchObj = {
        method: "PATCH",
        headers: {"Content-type" : "application/json"},
    body: JSON.stringify(likeObj)
}
    fetch(PATCH_URL, patchObj)
    .then(r => r.json())
    .then(data => console.log(data))
}

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
        <p className="cast-card">{username}:<br/>{content} 
        <br/>{createdAt}</p>
            <p className="likes">{likes}</p>
            <button className="delete-button" onClick={handleDeleteSignal}>
            X</button>
             <button className="like-button" onClick={handleLike} > 👍</button>
             <button className="dislike-button" onClick={() => alert("Boooooooo!")} >👎</button>
    </div>
)

}

export default Signal