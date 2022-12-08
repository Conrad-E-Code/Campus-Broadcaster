function Signal({content, userId, signalId, createdAt, username}){


return(
    <div>
        <p>{username} said {content} at {createdAt}</p>
    </div>
)

}

export default Signal