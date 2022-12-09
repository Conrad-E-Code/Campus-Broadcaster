import "../../App.css";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Channel from "../Channel/Channel";
import Signal from "../Signal/Signal";

function Dashboard({ token }) {
  const [feed, setFeed] = useState([]);
  const mappedFeed = feed.map((cast) => {
    console.log(cast);
    return (
      //need a key at some point
      <Signal
        key={cast.id}
        signalId={cast.id}
        content={cast.content}
        userId={cast.user_id}
        createdAt={cast.created_at}
        username={cast.username}
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
  function handleNext() {
    // console.log("next")
    if (counter >= 0) {
      setCounter(counter + 1);
    }
    console.log("next", counter);
  }

  function handlePrev() {
    // console.log("previous")
    if (counter < 1000) {
      setCounter(counter - 1);
    }
    console.log("previous", counter);
  }

  return (
    <div className="dashboard">
      <p> Hello from the dashboard</p>
      <h2>Campus Broadcasts</h2>
      {/* <img alt="pager" src="https://s.isanook.com/an/0/rp/rc/w300h200/yatxacm1w0/aHR0cHM6Ly9zLmlzYW5vb2suY29tL2FuLzAvdmFsZW50aW5lL3N0YXRpYy9pbWFnZXMvMjAyMi9wYWdlci9wYWdlcl8xLnBuZw==.png"></img> */}
      <div class="display-card">
        <button class="previous-post" onClick={handlePrev}></button>
        <br></br>
        <button class="next-post" onClick={handleNext}></button>
        <img
          alt="pager"
          src="https://s.isanook.com/an/0/rp/rc/w300h200/yatxacm1w0/aHR0cHM6Ly9zLmlzYW5vb2suY29tL2FuLzAvdmFsZW50aW5lL3N0YXRpYy9pbWFnZXMvMjAyMi9wYWdlci9wYWdlcl8xLnBuZw==.png"
        ></img>
        {mappedFeed[counter]}
      </div>
      <Channel />
      <br></br>
      <button>
        <Link to="/broadcasts/new">Share it!</Link>
      </button>
      <button>
        <Link to="/pictures/new">Post a Pic</Link>
      </button>
      <Link to="/preferences"></Link>
    </div>
  );
}

export default Dashboard;
