import React, { VFC } from 'react'
import styled from 'styled-components'

const Sp = styled.p<{ red?: boolean }>`
    color: ${({ red }) => (red ? 'red' : 'black')};
`

const Test: VFC = () => {
    return (
        <div>
            <Sp red>test</Sp>
            <Sp>test</Sp>
        </div>
    )
}

export default Test
