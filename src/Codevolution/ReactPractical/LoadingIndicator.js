import React from 'react'
import {BounceLoader, BarLoader, BeatLoader, CircleLoader, HashLoader, MoonLoader} from 'react-spinners'
import { css } from '@emotion/react'

const loaderCss= css`
    border: 1px solid green;
    margin-top: 20px;
`

const style={
    width:'100%',
    height:'100vh',
    display:'flex',
    flexDirection:'column',
    alignItems:'center'
}

function App() {
    return (
        <div style={style}>
            <BounceLoader size={30}  color='blue' loading/><br/><br/>
            <BarLoader color='pink' loading/><br/><br/>
            <BeatLoader css={loaderCss} color='red' loading/><br/><br/>
            <CircleLoader/><br/><br/>
            <HashLoader css={loaderCss}/><br/><br/>
            <MoonLoader/><br/><br/>
        </div>
    )
}

export default App
