import moment from 'moment'

function App() {
    console.log(moment('09-23-2021').isSame('09-23-2021'))
    console.log(moment('10-11-2021').isSame('10-12-2021','year'))
    console.log(moment('09-23-2021').isBefore('09-24-2021'))
    console.log(moment('09-23-2021').isAfter('09-24-2021'))

    const m1= moment('2021-04-05')
    const m2= moment('2021-04-06')
    const m3= moment('2021-04-07')
    console.log(m2.isBetween(m1, m3))
    return (
        <div>
            
        </div>
    )
}

export default App
