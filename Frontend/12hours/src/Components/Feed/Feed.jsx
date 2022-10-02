import React from "react";
import './feed.css'
const Feed = ({author,download_url}) =>{
    return(
        
        <div className="div-feed">
            <div>{author}</div>
            <div>
                <img src={download_url} alt='error'/>
            </div>
        </div>
    )
    
}

export default Feed;