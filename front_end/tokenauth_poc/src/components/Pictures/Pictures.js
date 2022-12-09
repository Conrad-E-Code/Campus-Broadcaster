import React, { useState } from 'react'
import {useEffect} from "react"
import PicModule from '../PicModule/PicModule'


function Pictures({token}) {
    const [picLike, setPicLike] = useState([])
    const [picFeed, setPicFeed] = useState([])

    const mappedPicFeed = picFeed.map((pic) => {
        const filterlikes = picLike.filter((pl) => {
            return pic.id === pl.image_id
        })
    return <PicModule setpiclike={setPicLike} picLike={picLike} filterlikes={filterlikes} key={pic.id} image_url={pic.image_url} user_id={pic.user_id} id={pic.id} token={token}/>
})
    useEffect(() => {
        fetch("http://localhost:9292/pictures")
        .then(r => r.json())
        .then(data => {
            setPicFeed(data)
            console.log(data)
        })
        
    }, [])

  

    useEffect(() => {
        fetch(`http://localhost:9292/piclikes`)
        .then(r => r.json())
        .then(data => setPicLike(data))
    },[])


    return (
        <div> Hello From Pics
            {mappedPicFeed}

        </div>
    )
} 

export default Pictures