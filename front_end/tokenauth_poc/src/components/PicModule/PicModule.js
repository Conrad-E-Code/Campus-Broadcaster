import { useState, useEffect } from "react"


function PicModule({picLike, setpiclike, filterlikes, image_url, user_id, id, token}){


    function handlePicLike(){
        console.log(`Pic Id is ${id}`)
        const picLikeURL = "http://localhost:9292/piclikes"
        const picLikeObj = {"user_id": token, "image_id": id}
        const PicLikePostObj = {method:"POST",
        headers:{"content-type": "application/json"},
        body: JSON.stringify(picLikeObj)}

         fetch(picLikeURL, PicLikePostObj)
         .then(r => r.json())
         .then(rdata => {console.log(rdata)
            const picLikePlusOne = [...picLike, rdata]
            setpiclike(picLikePlusOne)})

        }
    
        //console.log(filterlikes)
return(
    <div>
    <img src={`${image_url}`} alt={user_id}/>
    <button onClick={() => handlePicLike()}>Like</button>
    <ul>
        {filterlikes.map((fl) => {
            return <li key={`${fl.id}-plid`}> {`${fl.liker_user} likes this`}</li>
        })}
    </ul>
    </div>
)

}

export default PicModule