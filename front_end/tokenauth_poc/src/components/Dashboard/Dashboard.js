import "../../App.css";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Signal from "../Signal/Signal";

function Dashboard({ token }) {
  const [feed, setFeed] = useState([]);
  const mappedFeed = feed.map((cast) => {
    console.log(cast);
    return (
      //need a key at some point
      <Signal
      likes={cast.likes}
        key={cast.id}
        signalId={cast.id}
        content={cast.content}
        userId={cast.user_id}
        createdAt={cast.created_at}
        username={cast.username}
        setFeed={setFeed}
        feed={feed}
      />
    );
  });
  const tokenObj = {
    token: `${token}`,
  };
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
      .then((r) => r.json())
      .then((data) => {
        setFeed(data);
      });
  }, []);

    const [counter, setCounter] = useState(0);
//   function handleNext() {
//     // console.log("next")
//     if (counter >= -Infinity) {
//       setCounter(counter + 1);
//     }
//     console.log("next", counter);
//   }

//   function handlePrev() {
//     // console.log("previous")
//     if (counter < Infinity) {
//       setCounter(counter - 1);
//     }
//     console.log("previous", counter);
//   }
  
  function handleDown() {
    // console.log("down")
    if (counter >= -Infinity) {
      setCounter(counter + 1);
    }
    console.log("Down", counter);
  }

  function handleUp() {
    // console.log("up")
    if (counter < Infinity) {
      setCounter(counter - 1);
    }
    console.log("Up", counter);
  }

  return (
    <div className="dashboard">
      <br></br>
      <h2 className="head">BroadCaster</h2>
      <br></br>
      {/* <img alt="pager" src="https://s.isanook.com/an/0/rp/rc/w300h200/yatxacm1w0/aHR0cHM6Ly9zLmlzYW5vb2suY29tL2FuLzAvdmFsZW50aW5lL3N0YXRpYy9pbWFnZXMvMjAyMi9wYWdlci9wYWdlcl8xLnBuZw==.png"></img> */}
      <div className="display-card">
      {/* <p>Campus Broadcasts</p> */}
        {/* <button className="previous-post" onClick={handlePrev}></button>
        <br></br>
        <button className="next-post" onClick={handleNext}></button> */}
        <br></br>
        <button className="up-post" onClick={handleUp}></button>
        <br></br>
        <button className="down-post" onClick={handleDown}></button>
        <img
            className="pager"
          alt="pager"
          src="https://s.isanook.com/an/0/rp/rc/w300h200/yatxacm1w0/aHR0cHM6Ly9zLmlzYW5vb2suY29tL2FuLzAvdmFsZW50aW5lL3N0YXRpYy9pbWFnZXMvMjAyMi9wYWdlci9wYWdlcl8xLnBuZw==.png"
        ></img>
        {mappedFeed[counter]}
      </div>
      
      <br></br>
      <button>
        <Link to="/broadcasts/new">Share it!</Link>
      </button>
      <button>
        <Link to="/pictures/new">Post a Pic</Link>
      </button>
      <Link to="/preferences"></Link>
      <Link to="/pictures">SEE PICS</Link>
    </div>
  );
}

export default Dashboard;
