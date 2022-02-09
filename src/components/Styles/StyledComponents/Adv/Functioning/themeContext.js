import React,{useContext} from 'react'
import { ThemeContext } from 'styled-components';

function App() {
    const theme = useContext(ThemeContext)
    console.log('theme context', theme)
    return (
        <div style={{color:theme.text.color}}>
            Checkiing by using useContext hook
        </div>
    )
}

export default App
