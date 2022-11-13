import React from "react";
import {useState} from "react";

function UploadImage(){
    const [BaseImage, setBaseImage] = useState("")
    

    const clickUploadImage=async(e)=>{
        console.log(e.target.files)
        const file = e.target.files[0]
        var base64=await Base64convert(file)
        setBaseImage(base64)
        console.log(base64)
        
        
        // var myHeaders = new Headers();
        // myHeaders.append("Content-Type", "application/json");
        
        // var raw = JSON.stringify({
        //   "image": base64.toString(),
        //   "bio": "test"
        // });
        
        // var requestOptions = {
        //   method: 'POST',
        //   headers: myHeaders,
        //   body: raw,
        //   redirect: 'follow'
        // };
        
        // fetch("http://localhost:8080/createImage", requestOptions)
        //   .then(response => response.text())
        //   .then(result => console.log(result))
        //   .catch(error => console.log('error', error));    
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
        <div>
            <input type="file" onChange={(e)=>{
                clickUploadImage(e)
            }}>

            </input>
            <br></br>
            <img src={BaseImage}/>
        </div>
    )
}
export default UploadImage;