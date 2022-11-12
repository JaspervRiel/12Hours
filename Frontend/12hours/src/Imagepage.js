import React from "react"
import React, {Component} from "react";

function Imagepage(){
    
    
    return(
        <div>
            <h1>hey</h1>
            <input type="file" id="input" onChange={this.FileSelected}/>
            <button onClick={console.log("hey")} />
        </div>
    )
}


export default Imagepage;