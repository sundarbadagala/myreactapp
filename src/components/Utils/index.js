import React from 'react'
import RemoveDuplication from './DuplitcationRemove'
import ObjData from './ObjeData'


function index() {
    const arr = [1,1,1,2,3,4,5,3,2,1]
    const obj1 = {
        fruid:'apple',
        flower:'rose',
        bike:'raider',
        place:'himalayas'
    }
    return (
        <div>
            <RemoveDuplication value={arr}/>
            <ObjData data={obj1}/>


        </div>
    )
}

export default index
