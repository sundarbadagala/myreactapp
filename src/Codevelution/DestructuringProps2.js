import React from 'react';

function Task(props){
    const {name, age}= props;
    return(
        <div>
            name {name}, age is {age}
        </div>
    );
}
export default Task;