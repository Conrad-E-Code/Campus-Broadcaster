function Signal({content, userId, signalId, createdAt, username}){


return(
    <div>
        <p class="cast-card">{username}:<br/>{content} 
        <br/>{createdAt}</p>
    </div>
)

}

export default Signal