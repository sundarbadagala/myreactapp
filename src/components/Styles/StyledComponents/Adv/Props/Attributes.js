import React from 'react'
import styled from 'styled-components'

function App() {
    const Link = styled.a.attrs(props=>({
        target:'_blank'
    }))`
        text-decoration: none;
        color: red;
    `
    return (
        <div>
            <Link href='https://www.google.com/webhp?hl=en&sa=X&ved=0ahUKEwjVl7aOlpDzAhXHdCsKHdQTBkwQPAgI'>Google</Link>
        </div>
    )
}

export default App
