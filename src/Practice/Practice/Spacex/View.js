import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'

function View() {
    let {flight_number}= useParams()
    const [data, setData]= useState({})
    useEffect(()=>{
        axios.get('https://api.spacexdata.com/v3/launches/'+flight_number)
        .then(res => setData(res.data))
        .catch(error => error)
    },[flight_number])
    return (
        <div>
            Mission Name : {data.mission_name}<br/>
            Launch Date Local : {data.launch_date_local}<br/>
            Details : {data.details}
        </div>
    )
}

export default View
