import { useState, useEffect } from "react"


function PicModule({image_url, user_id, id, token}){


    function handlePicLike(){
        console.log(`Pic Id is ${id}`)

        const picLikeURL = "http://localhost:9292/piclikes"
        const picLikeObj = {"user_id": token, "image_id": id}
        const PicLikePostObj = {method:"POST",
        headers:{"content-type": "application/json"},
        body: JSON.stringify(picLikeObj)}

         fetch(picLikeURL, PicLikePostObj)
         .then(r => r.json())
         .then(rdata => console.log(rdata))

        }
    

return(
    <div>
    <img src={`${image_url}`} alt={user_id}/>
    <button onClick={() => handlePicLike()}>Like</button>
    </div>
)

}

export default PicModule