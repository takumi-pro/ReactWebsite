import { VFC } from 'react'
import React from 'react'

type Props = {
    name: string
    age: string
}

export const App: VFC<Props> = (props) => {
    const { name, age } = props
    return (
        <p>
            私は{name}で、年齢は{age}です
        </p>
    )
}
