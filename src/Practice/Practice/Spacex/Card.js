import React from 'react'

function Card({mission_name, launch_date_local, details}) {
    return (
        <div>
            Mission Name : {mission_name} <br/>
            Launch Date Local : {launch_date_local} <br/>
            Details : {details}<hr/><hr/>
        </div>
    )
}

export default Card
