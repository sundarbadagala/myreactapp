import React, { useState } from 'react'

function Index() {
    const [questions, setQuestions]= useState('')
    const [marks, setMarks]= useState('')
    const styles={
        boxStyles:{
            border: '1px solid green',
            width: '10%',
        },
        inputStyles:{
            width: '50px',
            padding:'5px',
            border: 'none',

        }
    }
    return (
        <div style={{display:'flex'}}>
            <div style={styles.boxStyles}>
            <input type='text' style={styles.inputStyles} value={questions} onChange={(e)=>setQuestions(e.target.value)}/>X
            <input type='text' style={styles.inputStyles} value={marks} onChange={(e)=>setMarks(e.target.value)}/>M
            </div>
            <div>
            {
                questions && marks && <div>{`=${questions*marks}M`}</div>
            }
            </div>
        </div>
    )
}

export default Index

