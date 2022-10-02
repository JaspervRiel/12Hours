import React, { Component } from 'react';
import Feed from '../Feed/Feed';
class Feeds extends Component {
    state = {  } 
    render() { 
        return (
            <div style={{width:"60%",display:'flex',flexDirection:'column',padding:'0 10px'}}>
            <h1>test</h1>
            <Feed author={"Jasper van Riel"} download_url={"https://upload.wikimedia.org/wikipedia/commons/b/bd/Test.svg"}/>
            <Feed author={"Jasper van Riel"} download_url={"https://upload.wikimedia.org/wikipedia/commons/b/bd/Test.svg"}/>
            <Feed author={"Jasper van Riel"} download_url={"https://upload.wikimedia.org/wikipedia/commons/b/bd/Test.svg"}/>

            </div>
        );
    }
}
 
export default Feeds;