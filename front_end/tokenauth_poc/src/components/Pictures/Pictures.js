import React from 'react'
import {useEffect} from "react"

function Pictures(props) {
    useEffect(() => {
        fetch("http://localhost:9292/pictures")
        .then(r => r.json())
        .then(data => (console.log(data)))
    }, [])

    return (
        <p> Hello From Pics</p>
    )
} 

export default Pictures