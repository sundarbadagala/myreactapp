import React from 'react'

function Good(){
    const Time= new Date();
    const Hour= Time.getHours();
    let Wish;
    const styles={
        fontSize: 30
    }

    if(Hour <= 12){
        Wish = 'Morning';
        styles.color= 'blue';
    }
    else if(Hour <= 14){
        Wish = 'Afternoon';
        styles.color= 'violet';
        
    }
    else if(Hour <= 18){
        Wish = 'Evening';
        styles.color= 'hotpink';
       
    }
    else if(Hour <= 23){
        Wish = 'Night';
        styles.color= 'red';
       
    }
    return(
        <div>
        <h3 style={styles}>Good {Wish}</h3>
        </div>
    );
}

export default Good;