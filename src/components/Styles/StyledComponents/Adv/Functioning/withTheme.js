import React from 'react'
import {withTheme} from 'styled-components'
//import styled from 'styled-components'

function App(props) {
    console.log('theme-mode', props.theme)
    return (
        <div style={{color:props.theme.text.color}}>
            checking with theme condition
        </div>
    )
}

export default withTheme(App)
