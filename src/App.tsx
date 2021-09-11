import { VFC } from 'react'
import React from 'react'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'

import { Navbar } from './component/index'
import GlobalStyle from './globalStyles'

export const App: VFC = () => {
    return (
        <BrowserRouter>
            <GlobalStyle />
            <Navbar></Navbar>
        </BrowserRouter>
    )
}
