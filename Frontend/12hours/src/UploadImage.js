import React from "react";
import {useState} from "react";
import "./Style.css";

function UploadImage(){
    const [BaseImage, setBaseImage] = useState("")
    

    const clickpreviewImage=async(e)=>{
        console.log(e.target.files)
        const file = e.target.files[0]
        var base64 = await Base64convert(file);
        setBaseImage(base64)
    }
        
    const clickUploadImage =()=>{    
         var myHeaders = new Headers();
         myHeaders.append("Content-Type", "application/json");
        
         var raw = JSON.stringify({
           "image": BaseImage.toString(),
           "bio": "test"
         })
        
         var requestOptions = {
           method: 'POST',
           headers: myHeaders,
           body: raw,
           redirect: 'follow'
         };
        
         fetch("http://localhost:8080/createImage", requestOptions)
           .then(response => response.text())  
        }
            
        
    

    const Base64convert=(file)=>{
        return new Promise((resolve,reject)=>{
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);

            fileReader.onload=()=>{
                resolve(fileReader.result.split(',')[1]);
            };

            fileReader.onerror=(error)=>{
                reject(error)
            };

        })

    }
    
    return(
        <div className="parent">
            <div classname="title">
                <h1>Upload your image here</h1>
            </div>
            <div className="input">
            <input type="file" onChange={(e)=>{
                clickpreviewImage(e)
            }}>

            </input>
            </div>
            <br></br>
            <img className="image-preview" src={BaseImage} alt="error"/>
            <button onClick={clickUploadImage()}>Place Photo</button>
        </div>
    )
}
export default UploadImage;