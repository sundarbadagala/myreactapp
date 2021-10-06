import React from 'react'

function App() {
    const date4= '1632767683161'
    //all are digits having length 13
    const result4 = /^\d{13}$/i.test(date4)
    console.log(result4)

    const date = '27/09/2021'
    //contains three number values with lengths 2 , 2 and 4 & all numbers seperated by "/" & and its a strict condition 
    const result = /^\d{2}\/\d{2}\/\d{4}$/i.test(date) 
    console.log(result)

    const date7 = '23/10/2020'
    //DD/MM/YYYY
    const result7 = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/i.test(date7)
    console.log(result7)

    const date8 = '10/23/2021'
    //MM/DD/YYYY
    const result8 = /^(((0)[0-9])|((1)[0-2]))(\/)([0-2][0-9]|(3)[0-1])(\/)\d{4}$/i.test(date8)
    console.log(result8)

    const date2 = '27-09-2021'
    //contains three number values with lengths 2 , 2 and 4 & all numbers seperated by "-" & and its a strict condition 
    const result2 = /^\d{2}-\d{2}-\d{4}$/i.test(date2)
    console.log(result2)

    const date3= '27092021'
    //all are digits having length 8
    const result3 = /^\d{8}$/i.test(date3)
    console.log(result3)

    const date5 = '27092021'
    //DDMMYYYY format
    //first 2 digits between 00-31
    //second 2 digits between 00-12
    //third 4 digits having length 4 having any value 
    const result5 = /^(([0-2][0-9])|3[0-1])((0[0-9])|(1[0-2]))\d{4}$/i.test(date5)
    console.log(result5)

    const date9 = '09272021'
    //MMDDYY format
    const result9= /^((0[0-9])|(1[0-2]))(([0-2][0-9])|3[0-1])\d{4}$/i.test(date9)
    console.log(result9)

    const date6 = '27092021095959'
    //DDMMYYYYHHMMSS format
    //DD must be 00-31
    //MM 00-12
    //YYYY any 4 digits number
    //HH  00-23
    //MM 00-59
    //SS 00-59
    const result6 = /^(([0-2][0-9])|3[0-1])((0[0-9])|(1[0-2]))\d{4}([0-1][0-9]|2[0-3])([0-5][0-9])([0-5][0-9])$/i.test(date6)
    console.log(result6)

    const date10 = '09282021095959'
    const result10 = /^((0[0-9])|(1[0-2]))(([0-2][0-9])|3[0-1])\d{4}([0-1][0-9]|2[0-3])([0-5][0-9])([0-5][0-9])$/i.test(date10)
    console.log(result10)
    
    const date11= {
        year:2021,
        month:12,
        date:23
    }
    // const date11= ['year', 'month', 'date']
    const result11= Object.keys(date11).includes('year', 'month', 'date')
    console.log(result11)

    const date12 = 631132200000
    const result12 = /^\d?\d{12}$/i.test(date12)
    console.log(result12)

    const value = '2021/12/23 12:12:23'
    const main = value.split(/\/|:| / )
    console.log(main)

    console.log(("1:2/3".split(/:|\//) ))
    return (
        <div>
            
        </div>
    )
}

export default App