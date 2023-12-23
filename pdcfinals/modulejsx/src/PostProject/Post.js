import React from 'react';

function Post(props){
    return(
        <div>

            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <br></br>
        </div>
    )
}

export default Post;