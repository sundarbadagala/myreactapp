import React from 'react'

function Upload() {
    const changeHandler=(e)=>{
        console.log(e.target.files[0].name)
    }
    return (
        <div>
            <input type="file" id="myFile" name="filename" onChange={(e)=>changeHandler(e)}/>
        </div>
    )
}

export default Upload
