import React from 'react'

function App() {
    const age = 15
    const isSupervised= true
    //--------------First method---------------------
    const Movie=(age, isSupervised)=>{
        if(age<15){
            if(isSupervised){
                return true
            }else{
                return false
            }
        }else{
            return true
        }
    }
    //--------------Second method-----------------------
    const Movie2=(age, isSupervised)=>{
        return age > 15 || isSupervised
    }
    console.log(Movie(age, isSupervised))
    console.log(Movie2(age, isSupervised))
    return (
        <div>
            Movie Theatre<br/>
            Write a function that checks whether a person can watch u/a rated movie. One of the following two conditions is required for admittance <br/>
            1.The person is at least 15 years old<br/>
            2.They have parental supervision<br/>
            <code>
                input : 14, true <br/>
                output: true<br/><br/>
                input: 14, false<br/>
                outpu: false<br/><br/>
                input : 16, false<br/>
                output: true<br/><br/>
                input : 16, true<br/>
                output : true
            </code>
            
        </div>
    )
}

export default App
