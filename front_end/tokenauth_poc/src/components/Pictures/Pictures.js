import React, { useState } from 'react'
import {useEffect} from "react"
import PicModule from '../PicModule/PicModule'


function Pictures({token}) {

    const [picFeed, setPicFeed] = useState([])
    const mappedPicFeed = picFeed.map((pic) => {
    return <PicModule key={pic.id} image_url={pic.image_url} user_id={pic.user_id} id={pic.id} token={token}/>
})

    useEffect(() => {
        fetch("http://localhost:9292/pictures")
        .then(r => r.json())
        .then(data => {
            setPicFeed(data)
            console.log(data)
        })
        
    }, [])

    const [picLike, setPicLike] = useState([])

    useEffect(() => {
        fetch(`http://localhost:9292/piclikes/${token}`)
        .then(r => r.json())
        .then(data => {
            //setPicLike(data)
            console.log(data)
        })
    },[])


    return (
        <div> Hello From Pics
            {mappedPicFeed}

        </div>
    )
} 

export default Pictures