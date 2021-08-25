import React, { useState } from 'react'

function ContentHide() {
    const details='Subhas Chandra Bose, affectionately called as Netaji, was one of the most prominent leaders of Indian freedom struggle. Though Mahatma Gandhi and Jawaharlal Nehru have garnered much of the credit for successful culmination of Indian freedom struggle, the contribution of Subash Chandra Bose is no less. He has been denied his rightful place in the annals of Indian history. He founded Indian National Army (Azad Hind Fauj) to overthrow British Empire from India and came to acquire legendary status among Indian masses.'
    const [btnValue, setBtnValue]= useState(false)
    return (
        <div style={{width:'400px', margin:'auto', fontSize:'20px'}}>
            <p>{btnValue ? details : `${details.substring(0, 135)}...`}
            <button onClick={()=>setBtnValue(!btnValue)} style={{border:'none',outline:'none',background:'none', color:'blue',cursor:'pointer', fontSize:'17px'}}>{btnValue ? 'Show Less': 'Read More'}</button>
            </p>
        </div>
    )
}

export default ContentHide
