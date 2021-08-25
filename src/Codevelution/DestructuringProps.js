import React from 'react';

function Properties({name, age}) {
    return(
        <div>
            <p style={{color:'red'}}>name and age are properties taken from function properties directly</p>
            Hi {'sundar'}, age is {35}
        </div>
    );
    
}
export default Properties;