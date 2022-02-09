import React from 'react'
import ReactPlayer from 'react-player'

function App() {
    return (
        <div>
            <ReactPlayer
                url='https://www.youtube.com/watch?v=7sDY4m8KNLc&list=PLC3y8-rFHvwhAh1ypBvcZLDO6I7QTY5CM&index=12'
                controls
                width= '300px'
                height='200px'
                onReady={()=>console.log('onReady Callback')}
                onStart={()=>console.log('onStart Callback')}
                onPause={()=>console.log('onPause Callback')}
                onEnded={()=>console.log('onEnded Callback')}
                onError={()=>console.log('onError Callback')}
            />
        </div>
    )
}

export default App
