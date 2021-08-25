import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
  display: inline-block;
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  outline:none;
  border-radius: 3px;
  cursor: pointer;
  text-decoration:none;
  &:hover{
      background:palevioletred;
      color: white;

  }
`

function Button5() {
    return (
        <div>
        <Button>Normal Button</Button>
        <Button as="a" href="/">Link with Button styles</Button>
        </div>
    )
}

export default Button5
