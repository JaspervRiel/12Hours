import React, { Component } from 'react';
import Feed from '../Feed/Feed';
import {useState} from 'react'
function Feeds(){
const [imageList, setimageList] = useState([])
fetch('http://localhost:8080/getImage').then(response => response.json())
.then(json => setimageList(json));


        return (
            <div className='div.image'>
                <h1>test</h1>
                {imageList.map(items =>{
                    const srcString = "data:image/png;base64," + items.image;
                    return(
                        <div className="div-feed">
                            <div>{items.user.firstName}</div>
                            <div className="image">
                                {console.log(srcString)}
                              <img src={srcString} alt='error'/>
                            </div>
                        </div>
                    )
                } )}
            </div>
            
        );
}
 
export default Feeds;