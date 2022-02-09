import React from 'react'
import {UserProvider} from './UserContext'
import Card from './Card'
import Card2 from './Card2'

function Index() {
    return (
        <UserProvider>
            <Card/>
            <Card2/>
        </UserProvider>
    )
}

export default Index
