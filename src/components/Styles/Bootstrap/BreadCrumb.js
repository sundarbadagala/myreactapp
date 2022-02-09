import React from 'react'
import {Breadcrumb} from 'react-bootstrap'

function Main() {
    return (
        <div>
            <Breadcrumb>
                <Breadcrumb.Item>Bread Crumb 1</Breadcrumb.Item>
                <Breadcrumb.Item>Bread Crumb 2</Breadcrumb.Item>
                <Breadcrumb.Item active>Bread Crumb 3</Breadcrumb.Item>
            </Breadcrumb>
            <hr/>
            <Breadcrumb>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>Library</Breadcrumb.Item>
                <Breadcrumb.Item active>Comics</Breadcrumb.Item>
            </Breadcrumb>
        </div>
    )
}

export default Main
